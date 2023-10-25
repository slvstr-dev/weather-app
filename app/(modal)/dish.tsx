import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated, { FadeIn, FadeInLeft } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getDishById } from '@/assets/data/restaurant';
import { useBasketStore } from '@/stores/basketStore';

const Dish = () => {
  const { id } = useLocalSearchParams();
  const item = id ? getDishById(+id)! : null;
  const router = useRouter();
  const { addProduct } = useBasketStore();

  if (!item) return null;

  const addToCart = () => {
    addProduct(item);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['bottom']}>
      <View className="bg-white flex-1">
        <Animated.Image
          entering={FadeIn.duration(400).delay(200)}
          source={item?.img}
          className="w-full h-[300px]"
        />

        <View style={{ padding: 20 }}>
          <Animated.Text
            entering={FadeInLeft.duration(400).delay(200)}
            className="text-2xl font-bold mb-2">
            {item?.name}
          </Animated.Text>

          <Animated.Text
            entering={FadeInLeft.duration(400).delay(400)}
            className="text-base text-mediumDark">
            {item?.info}
          </Animated.Text>
        </View>
      </View>

      <View className="absolute bg-white bottom-0 left-0 w-full p-2.5 shadow-md">
        <SafeAreaView edges={['bottom']} className="bg-white">
          <TouchableOpacity
            className="bg-primary px-2 rounded-lg items-center justify-center flex-1 h-[50px]"
            onPress={addToCart}>
            <Text className="text-white font-bold text-base">Add for €{item?.price}</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
};

export default Dish;
