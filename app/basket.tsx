import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import { SafeAreaView } from 'react-native-safe-area-context';

import SwipeableRow from '@/components/ui/SwipeableRow/SwipeableRow';
import { useBasketStore } from '@/stores/basketStore';

const Basket = () => {
  const { products, total, clearCart, reduceProduct } = useBasketStore();
  const [order, setOrder] = useState(false);

  const FEES = {
    service: 2.99,
    delivery: 5.99,
  };

  const startCheckout = () => {
    setOrder(true);
    clearCart();
  };

  return (
    <>
      {order && (
        <ConfettiCannon
          count={200}
          origin={{ x: -10, y: 0 }}
          fallSpeed={2500}
          fadeOut={true}
          autoStart={true}
        />
      )}

      {order && (
        <View className="mt-1/2 p-5 items-center">
          <Text className="text-2xl font-bold text-center">Thank you for your order!</Text>

          <Link href={'/'} asChild>
            <TouchableOpacity className="bg-primary px-4 rounded-lg items-center w-[250px] h-[50px] justify-center mt-5">
              <Text className="text-white font-bold text-base">New order</Text>
            </TouchableOpacity>
          </Link>
        </View>
      )}

      {!order && (
        <>
          <FlatList
            data={products}
            ListHeaderComponent={<Text className="text-xl font-bold m-4">Items</Text>}
            ItemSeparatorComponent={() => <View className="h-px bg-grey" />}
            renderItem={({ item }) => (
              <SwipeableRow onDelete={() => reduceProduct(item)}>
                <View className="flex-row bg-white px-4 py-2.5 items-center" style={{ gap: 20 }}>
                  <Text className="text-primary text-lg">{item.quantity}x</Text>

                  <Text className="flex-1 text-lg">{item.name}</Text>

                  <Text className="text-lg">€{item.price * item.quantity}</Text>
                </View>
              </SwipeableRow>
            )}
            ListFooterComponent={
              <View>
                <View className="h-px bg-grey" />

                <View className="flex-row justify-between px-4 py-2.5 bg-white">
                  <Text className="text-lg text-medium">Subtotal</Text>

                  <Text className="text-lg">€{total}</Text>
                </View>

                <View className="flex-row justify-between px-4 py-2.5 bg-white">
                  <Text className="text-lg text-medium">Service fee</Text>

                  <Text className="text-lg">€{FEES.service}</Text>
                </View>

                <View className="flex-row justify-between px-4 py-2.5 bg-white">
                  <Text className="text-lg text-medium">Delivery fee</Text>

                  <Text className="text-lg">€{FEES.delivery}</Text>
                </View>

                <View className="flex-row justify-between px-4 py-2.5 bg-white">
                  <Text className="text-lg text-medium">Order Total</Text>

                  <Text className="text-lg font-bold">
                    €{(total + FEES.service + FEES.delivery).toFixed(2)}
                  </Text>
                </View>
              </View>
            }
          />

          <View className="absolute bg-white bottom-0 left-0 w-full p-2.5 shadow-md">
            <SafeAreaView edges={['bottom']} className="bg-white">
              <TouchableOpacity
                className="bg-primary px-2 rounded-lg items-center justify-center flex-1 h-[50px]"
                onPress={startCheckout}>
                <Text className="text-white font-bold text-base">Order now</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </>
      )}
    </>
  );
};

export default Basket;
