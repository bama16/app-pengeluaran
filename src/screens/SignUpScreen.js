import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../components/screenWrapper';
import BackButton from '../components/backButton';
import { color } from '../../assets/themes';
import { useNavigation } from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { setUserLoading } from '../../redux/slices/user';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/loading';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { userLoading } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    if (email && password) {
      try {
        dispatch(setUserLoading(true));
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('SignUp: ', auth);
        dispatch(setUserLoading(false));
      } catch (e) {
        dispatch(setUserLoading(false));
        Snackbar.show({
          text: 'Password atau email salah',
          backgroundColor: 'red',
          duration: Snackbar.LENGTH_SHORT,
        });
      }
    } else {
      Snackbar.show({
        text: 'Email and Password are required!',
        backgroundColor: 'red',
        duration: Snackbar.LENGTH_SHORT,
      });
    }
  };

  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className="relative mt-5">
            <View className="absolute top-0 left-0 right-0">
              <Text
                className={`${color.heading} text-center font-bold text-xl`}
              >
                Sign Up
              </Text>
            </View>
            <BackButton />
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image
              source={require('../../assets/images/signup.png')}
              className="h-80 w-80"
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${color.heading} font-bold text-lg`}>Email</Text>
            <TextInput
              value={email}
              onChangeText={value => setEmail(value)}
              className={`p-4 bg-white rounded-full mb-3`}
            />
            <Text className={`${color.heading} font-bold text-lg`}>
              Password
            </Text>
            <TextInput
              value={password}
              onChangeText={value => setPassword(value)}
              secureTextEntry
              className={`p-4 bg-white rounded-full mb-3`}
            />
          </View>
        </View>
        <View>
          {userLoading ? (
            <Loading />
          ) : (
            <TouchableOpacity
              onPress={handleSignUp}
              style={{ backgroundColor: color.button }}
              className="my-6 rounded-full p-3 shadow-sm"
            >
              <Text className="text-center text-white font-bold text-lg">
                Sign Up
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUpScreen;
