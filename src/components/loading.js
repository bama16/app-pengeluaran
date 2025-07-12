import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { color } from '../../assets/themes';

const Loading = () => {
  return (
    <View className="flex-row justify-center py-8">
      <ActivityIndicator size={'large'} color={color.button} />
    </View>
  );
};

export default Loading;
