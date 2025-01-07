import React, {useState} from 'react';
import Auth from '../../services/firebase/firebaseAuthService';

import {Props} from './signin.d';
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  Alert,
} from 'react-native';

import {withLoader} from '../../utils';

export default function Signin({navigation}: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    loading: false,
    error: '',
  });

  const {email, password, error} = formState;

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormState(prevState => ({
      ...prevState,
      [field]: value,
      error: '', // Clear error on input change
    }));
  };

  const handleSignIn = async () => {
    if (!email || !password) {
      setFormState(prevState => ({
        ...prevState,
        error: 'Email and password are required.',
      }));
      return;
    }

    if (!validateEmail(email)) {
      setFormState(prevState => ({
        ...prevState,
        error: 'Please enter a valid email address.',
      }));
      return;
    }

    const loginError = await withLoader(
      setLoading,
      Auth.login('credentials', {email, password}),
    );

    if (loginError) {
      Alert.alert(loginError);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-6">
        <Text className="text-3xl font-bold text-gray-800 mb-8">Sign In</Text>

        {error ? (
          <Text className="text-red-500 text-sm mb-2">{error}</Text>
        ) : null}

        {/* Email Input */}
        <TextInput
          className="w-full bg-gray-100 px-4 py-3 rounded-lg mb-4 border border-gray-300 placeholder:text-gray-500"
          placeholder="Enter your email"
          value={email}
          onChangeText={value => handleInputChange('email', value)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password Input */}
        <TextInput
          className="w-full bg-gray-100 px-4 py-3 rounded-lg mb-6 border border-gray-300 placeholder:text-gray-500"
          placeholder="Enter your password"
          value={password}
          onChangeText={value => handleInputChange('password', value)}
          secureTextEntry
        />

        {/* Sign-In Button */}
        <TouchableOpacity
          className={`w-full py-3 rounded-lg flex items-center justify-center ${
            loading ? 'bg-gray-400' : 'bg-blue-500'
          }`}
          onPress={handleSignIn}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text className="text-white font-bold text-lg">Sign In</Text>
          )}
        </TouchableOpacity>

        {/* Footer */}
        <View className="mt-6 flex flex-row">
          <Text className="text-gray-600">Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('Signup')}>
            <Text className="text-blue-500 font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
