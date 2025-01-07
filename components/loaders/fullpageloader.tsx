import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export default function FullPageLoader() {
  const rotation = useSharedValue(0);

  // Create animation for rotation
  rotation.value = withRepeat(withTiming(360, {duration: 1000}), -1);

  // Animated styles for rotation
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation.value}deg`}],
    };
  });

  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center">
      {/* Loader Animation */}
      <View className="flex justify-center items-center">
        <Animated.View
          style={[animatedStyle, {width: 100, height: 100}]}
          className="rounded-full border-4 border-blue-500 "
        />
        <Text className="text-lg font-medium text-gray-600 mt-4">
          Loading, please wait...
        </Text>
      </View>
    </SafeAreaView>
  );
}
