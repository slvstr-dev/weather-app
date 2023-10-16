import { useNavigation } from 'expo-router';
import { View, Text, FlatList, ListRenderItem } from 'react-native';

import data from '@/assets/data/filter.json';
import { Button } from '@/components/ui/Button/Button';

interface Category {
  name: string;
  count: number;
  checked?: boolean;
}

export default function FilterModal() {
  const { goBack } = useNavigation();

  const renderItem: ListRenderItem<Category> = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View className="bg-lightGrey flex-1 p-6">
      <FlatList data={data} renderItem={renderItem} />

      <View className="absolute bottom-0 left-0 right-0 h-[100px] bg-white p-2.5 shadow-md">
        <Button onPress={goBack}>Done</Button>
      </View>
    </View>
  );
}
