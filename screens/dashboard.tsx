import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Props} from './dashboard.d';

export default function DashboardScreen({navigation}: Props) {
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 py-4 bg-blue-500">
        <Text className="text-lg font-bold text-white">Dashboard</Text>
        <TouchableOpacity
          className="p-2 bg-white rounded-full"
          onPress={() => navigation.openDrawer()}>
          <Text className="text-blue-500 font-bold">Menu</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl font-semibold text-gray-800">
          Welcome to the Dashboard
        </Text>
        <Text className="text-sm text-gray-500 mt-2">
          Explore the options in the menu.
        </Text>
      </View>

      {/* Footer */}
      <View className="py-4 border-t border-gray-200">
        <Text className="text-center text-gray-600">
          © 2025 My App. All rights reserved.
        </Text>
      </View>
    </View>
  );
}
