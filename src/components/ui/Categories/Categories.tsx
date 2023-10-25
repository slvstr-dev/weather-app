import { Text, ScrollView, View, Image, TouchableOpacity } from 'react-native';

import { categories } from '@/assets/data/home';

export const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ columnGap: 10, padding: 16 }}>
      {categories.map((category, idx) => (
        <TouchableOpacity key={idx}>
          <View className="w-[100px] h-[100px] bg-white shadow rounded-sm">
            <Image source={category.img} className="rounded-t-sm" />

            <Text className="p-1.5 text-sm font-bold">{category.text}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
