import { Link } from 'expo-router';
import { Text, ScrollView, View, Image, TouchableOpacity } from 'react-native';

import { restaurants } from '@/assets/data/home';

export const Restaurants = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ columnGap: 10, padding: 16 }}>
      {restaurants.map((restaurant, idx) => (
        <Link key={idx} href={`/`} asChild>
          <TouchableOpacity>
            <View className="w-[300px] h-[250px] bg-white shadow rounded-sm">
              <Image source={restaurant.img} className="rounded-t-sm flex-1 w-full h-full" />

              <View className=" justify-center p-2">
                <Text className="text-sm font-bold">{restaurant.name}</Text>

                <Text className="text-sm font-bold text-green">
                  {restaurant.rating} {restaurant.ratings}
                </Text>

                <Text className="text-sm text-medium">{restaurant.distance}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
};
