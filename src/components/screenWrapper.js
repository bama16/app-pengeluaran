import { View, Text, StatusBar, Platform } from 'react-native';
import React from 'react';

export default function ScreenWrapper({ children }) {
  let statusBarHeight = StatusBar.currentHeight
    ? StatusBar.currentHeight
    : Platform.OS == 'android'
    ? 30
    : 0;
  return (
    <View
      style={{
        paddingTop: statusBarHeight,
        flex: 1,
      }}
    >
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      {children}
    </View>
  );
}
