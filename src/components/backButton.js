import { TouchableOpacity, Image, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  console.log('Tombol back di tekan');

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Home')}
      className="rounded-full h-8 w-8"
    >
      <Image
        source={require('../../assets/icons/left-chevron.png')}
        className="h-8 w-8"
      />
    </TouchableOpacity>
  );
};

export default BackButton;
