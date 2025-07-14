import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import '../../global.css';
import ScreenWrapper from '../components/screenWrapper';
import { color } from '../../assets/themes';
import EmptyList from '../components/emptyList';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import BackButton from '../components/backButton';
import ExpenseCard from '../components/expenseCard';
import { getDocs, query, where } from 'firebase/firestore';
import { expensesRef } from '../../config/firebase';

const TripExpensesScreen = props => {
  const { id, country, place } = props.route.params;
  const navigation = useNavigation();
  console.log('Ini props: ', props);
  // =========================================

  const [expenses, setExpenses] = useState([]);

  const isFocused = useIsFocused();

  const fetchExpenses = async () => {
    const q = query(expensesRef, where('tripId', '==', id));
    const querySnapshot = await getDocs(q);

    let data = [];
    querySnapshot.forEach(doc => {
      data.push({ ...doc.data(), id: doc.id });
    });
    setExpenses(data);
    console.log('data home screen:', data);
  };

  useEffect(() => {
    if (isFocused) {
      fetchExpenses();
    }
  }, [isFocused]);

  // =========================================

  return (
    <ScreenWrapper>
      <View className="p-4 flex justify-between h-full">
        <View className="relative mt-1">
          <View className="absolute top-0 left-0 right-0">
            <Text className={`${color.heading} text-center font-bold text-xl`}>
              {place}
            </Text>
            <Text className={`${color.heading} text-center text-xs`}>
              {country}
            </Text>
          </View>
          <BackButton />
        </View>
        <View className="flex-row justify-center items-center rounded-xl mb-4">
          <Image
            source={require('../../assets/images/7.png')}
            className="w-80 h-80"
          />
        </View>
        <View className="px-4 space-y-3 flex-1">
          <View className="flex-row justify-between items-center mb-4">
            <Text className={`${color.heading} font-bold text-xl`}>
              Expenses
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AddExpense', { id, place, country })
              }
              className="p-2 px-3 bg-white border border-gray-200 rounded-full"
            >
              <Text className={color.heading}>Add Expenses</Text>
            </TouchableOpacity>
          </View>
          <View className="">
            <FlatList
              data={expenses}
              numColumns={1}
              ListEmptyComponent={
                <EmptyList message={`You haven't recorded any trips yet`} />
              }
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              className="mx-1"
              renderItem={({ item }) => {
                return <ExpenseCard item={item} />;
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default TripExpensesScreen;
