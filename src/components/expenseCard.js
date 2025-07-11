import { View, Text } from 'react-native';
import React from 'react';
import { categoryBG, color } from '../../assets/themes';

const ExpenseCard = ({ item }) => {
  return (
    <View
      style={{ backgroundColor: categoryBG[item.category] }}
      className="flex-row justify-between item-center p-3 px-5 mb-3 rounded-2xl"
    >
      <View>
        <Text className={`${color.heading} font-bold`}>{item.title}</Text>
        <Text className={`${color.heading} text-xs`}>{item.category}</Text>
      </View>
      <View>
        <Text>${item.amount}</Text>
      </View>
    </View>
  );
};

export default ExpenseCard;
