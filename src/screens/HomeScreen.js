import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import '../../global.css';
import ScreenWrapper from '../components/screenWrapper';
import { color } from '../../assets/themes';
import randomImages from '../../assets/images/randomimage';
import EmptyList from '../components/emptyList';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';

const items = [
  {
    id: 1,
    place: 'Jakarta',
    country: 'Indonesian',
  },
  {
    id: 2,
    place: 'Bandung',
    country: 'Indonesian',
  },
  {
    id: 3,
    place: 'Yogyakarta',
    country: 'Indonesian',
  },
  {
    id: 4,
    place: 'Bali',
    country: 'Indonesian',
  },
  {
    id: 5,
    place: 'Papua',
    country: 'Indonesian',
  },
  {
    id: 6,
    place: 'PIK',
    country: 'Indonesian',
  },
];

const HomeScreen = () => {
  console.log('Ini Random: ', randomImages());
  const navigation = useNavigation();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <ScreenWrapper>
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${color.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity
          onPress={handleLogout}
          className="p-2 px-3 bg-white border border-gray-200 rounded-full"
        >
          <Text className={`${color.heading}`}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require('../../assets/images/banner.png')}
          className="w-60 h-60"
        ></Image>
      </View>
      <View className="px-4 flex-1">
        <View className="flex-row justify-between items-center mb-4">
          <Text className={`${color.heading} font-bold text-xl`}>
            Recent Trips
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddTrip')}
            className="p-2 px-3 bg-white border border-gray-200 rounded-full"
          >
            <Text className={color.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 500 }}>
          <FlatList
            data={items}
            numColumns={2}
            ListEmptyComponent={
              <EmptyList message={`You haven't recorded any trips yet`} />
            }
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{
              justifyContent: 'space-around',
            }}
            className="mx-1"
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('TripExpenses', { ...item })
                  }
                  className="bg-white p-5 rounded-2xl mb-6 shadow-sm"
                >
                  <View>
                    <Image source={randomImages()} className="w-40 h-40 mb-2" />
                    <Text className={`${color.heading} font-bold`}>
                      {item.place}
                    </Text>
                    <Text className={`${color.heading} text-xs`}>
                      {item.country}
                    </Text>
                    <Text></Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
