import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../components/screenWrapper';
import BackButton from '../components/backButton';
import { color } from '../../assets/themes';
import { useNavigation } from '@react-navigation/native';

const AddTripScreen = () => {
  const navigation = useNavigation();
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');
  const handleAddTrip = () => {
    if (place && country) {
      navigation.navigate('Home');
      console.log('Tempat: ', place);
      console.log('Negara: ', country);
    } else {
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
                Add Trip
              </Text>
            </View>
            <BackButton />
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image
              source={require('../../assets/images/4.png')}
              className="h-72 w-72"
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${color.heading} font-bold text-lg`}>
              Where On Earth?
            </Text>
            <TextInput
              value={place}
              onChangeText={value => setPlace(value)}
              className={`p-4 bg-white rounded-full mb-3`}
            />
            <Text className={`${color.heading} font-bold text-lg`}>
              Which Country?
            </Text>
            <TextInput
              value={country}
              onChangeText={value => setCountry(value)}
              className={`p-4 bg-white rounded-full mb-3`}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleAddTrip}
            style={{ backgroundColor: color.button }}
            className="my-6 rounded-full p-3 shadow-sm"
          >
            <Text className="text-center text-white font-bold text-lg">
              Add Trip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AddTripScreen;
