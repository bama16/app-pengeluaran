import { View, Text, Image } from 'react-native';
import React from 'react';

const EmptyList = ({ message }) => {
  return (
    <View className="flex-1 justify-center items-center my-4">
      <Image
        className="h-36 w-36 shadow"
        source={require('../../assets/images/empty.png')}
      />
      <Text className="text-gray-400 font-bold">
        {message || 'date not found'}
      </Text>
    </View>
  );
};

export default EmptyList;
