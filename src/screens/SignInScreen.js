import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../components/screenWrapper';
import BackButton from '../components/backButton';
import { color } from '../../assets/themes';
import Snackbar from 'react-native-snackbar';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import Loading from '../components/loading';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLoading } from '../../redux/slices/user';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userLoading } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    if (email && password) {
      // navigation.navigate('Home');
      // console.log('Tempat: ', email);
      try {
        dispatch(setUserLoading(true));
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Sign: ', auth);
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
                Sign In
              </Text>
            </View>
            <BackButton />
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image
              source={require('../../assets/images/login.png')}
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
              secureTextEntry={true}
              className={`p-4 bg-white rounded-full mb-3`}
            />
            <TouchableOpacity className="flex-row justify-end">
              <Text>Forget Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {userLoading ? (
            <Loading />
          ) : (
            <TouchableOpacity
              onPress={handleSignIn}
              style={{ backgroundColor: color.button }}
              className="my-6 rounded-full p-3 shadow-sm"
            >
              <Text className="text-center text-white font-bold text-lg">
                Sign In
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignInScreen;
