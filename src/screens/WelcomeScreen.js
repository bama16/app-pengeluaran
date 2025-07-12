import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/screenWrapper';
import { color } from '../../assets/themes';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View className="h-full flex justify-around">
        <View className="flex-row justify-center mt-10">
          <Image
            source={require('../../assets/images/welcome-bro.png')}
            className="w-96 h-96 shadow"
          />
        </View>
        <View className="mx-5 mb-5">
          <Text
            className={`text-center font-bold text-4xl ${color.heading} mb-10`}
          >
            Expensify
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}
            className="shadow p-3 rounded-full mb-5"
            style={{ backgroundColor: color.button }}
          >
            <Text className="text-center text-white text-xl font-bold">
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            className="shadow p-3 rounded-full"
            style={{ backgroundColor: color.button }}
          >
            <Text className="text-center text-white text-xl font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default WelcomeScreen;
