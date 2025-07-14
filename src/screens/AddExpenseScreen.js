import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../components/screenWrapper';
import BackButton from '../components/backButton';
import { color } from '../../assets/themes';
import { useNavigation } from '@react-navigation/native';
import { categories } from '../constants';
import Loading from '../components/loading';
import Snackbar from 'react-native-snackbar';
import { addDoc } from 'firebase/firestore';
import { expensesRef } from '../../config/firebase';

const AddExpenseScreen = props => {
  const { id } = props.route.params;
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddTrip = async () => {
    if (title && amount && category) {
      console.log('Category: ', category);
      console.log('id add expense: ', id);
      console.log('props add expense: ', props.route.params);

      setLoading(true);
      let doc = await addDoc(expensesRef, {
        title,
        amount,
        category,
        tripId: id,
      });
      if (doc && doc.id) {
        setLoading(false);
        navigation.goBack();
      }
    } else {
      Snackbar.show({
        text: 'Title, Amount and Category are required!',
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
              For What?
            </Text>
            <TextInput
              value={title}
              onChangeText={value => setTitle(value)}
              className={`p-4 bg-white rounded-full mb-3`}
            />
            <Text className={`${color.heading} font-bold text-lg`}>
              How Much?
            </Text>
            <TextInput
              value={amount}
              onChangeText={value => setAmount(value)}
              className={`p-4 bg-white rounded-full mb-3`}
            />
            <Text className={`${color.heading} font-bold text-lg`}>
              Category
            </Text>
            <View className="flex-row flex-wrap items-center">
              {categories.map(cat => {
                let bgColor = 'bg-white';
                if (cat.value == category) bgColor = 'bg-green-400';
                return (
                  <TouchableOpacity
                    onPress={() => setCategory(cat.value)}
                    key={cat.value}
                    className={`${bgColor} rounded-full px-4 p-3 mb-2 mr-2`}
                  >
                    <Text>{cat.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View>
          {loading ? (
            <Loading />
          ) : (
            <TouchableOpacity
              onPress={handleAddTrip}
              style={{ backgroundColor: color.button }}
              className="my-6 rounded-full p-3 shadow-sm"
            >
              <Text className="text-center text-white font-bold text-lg">
                Add Expense
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AddExpenseScreen;
