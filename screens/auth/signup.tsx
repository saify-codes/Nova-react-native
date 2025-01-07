import React, {useState} from 'react';
import Snackbar from 'react-native-snackbar';
import Auth from '../../services/firebase/firebaseAuthService';

import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Text
} from 'react-native';
import {Props} from './signup.d';
import {withLoader} from '../../utils';

export default function Signup({navigation}: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
  });

  const {name, email, password, confirmPassword, error} = formState;

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

  const handleSignUp = async () => {
    if (!name || !email || !password || !confirmPassword) {
      setFormState(prevState => ({
        ...prevState,
        error: 'All fields are required.',
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

    if (password !== confirmPassword) {
      setFormState(prevState => ({
        ...prevState,
        error: 'Passwords do not match.',
      }));
      return;
    }

    if (password.length < 6) {
      setFormState(prevState => ({
        ...prevState,
        error: 'Password must be at least 6 characters long.',
      }));
      return;
    }

    const registrationError = await withLoader(
      setLoading,
      Auth.register('credentials', {email, password}),
    );

    if (registrationError) {
      Alert.alert(registrationError);
    } else {
      Snackbar.show({
        text: 'account created',
      });
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-6">
        <Text className="text-3xl font-bold text-gray-800 mb-8">Sign Up</Text>

        {error ? (
          <Text className="text-red-500 text-sm mb-2">{error}</Text>
        ) : null}

        {/* Name Input */}
        <TextInput
          className="w-full bg-gray-100 px-4 py-3 rounded-lg mb-4 border border-gray-300 placeholder:text-gray-500"
          placeholder="Enter your name"
          value={name}
          onChangeText={value => handleInputChange('name', value)}
        />

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
          className="w-full bg-gray-100 px-4 py-3 rounded-lg mb-4 border border-gray-300 placeholder:text-gray-500"
          placeholder="Enter your password"
          value={password}
          onChangeText={value => handleInputChange('password', value)}
          secureTextEntry
        />

        {/* Confirm Password Input */}
        <TextInput
          className="w-full bg-gray-100 px-4 py-3 rounded-lg mb-6 border border-gray-300 placeholder:text-gray-500"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={value => handleInputChange('confirmPassword', value)}
          secureTextEntry
        />

        {/* Sign-Up Button */}
        <TouchableOpacity
          className={`w-full py-3 rounded-lg flex items-center justify-center ${
            loading ? 'bg-gray-400' : 'bg-blue-500'
          }`}
          onPress={handleSignUp}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text className="text-white font-bold text-lg">Sign Up</Text>
          )}
        </TouchableOpacity>

        {/* Footer */}
        <View className="mt-6 flex flex-row">
          <Text className="text-gray-600">Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('Signin')}>
            <Text className="text-blue-500 font-bold">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
