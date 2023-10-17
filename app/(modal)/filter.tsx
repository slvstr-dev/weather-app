import { useNavigation } from 'expo-router';
import { View, FlatList } from 'react-native';

import data from '@/assets/data/filter.json';
import { Button } from '@/components/ui/Button/Button';
import { FilterItem } from '@/components/ui/FilterItem/FilterItem';

export default function FilterModal() {
  const { goBack } = useNavigation();

  return (
    <View className="bg-lightGrey flex-1 p-6">
      <FlatList data={data} renderItem={({ item }) => <FilterItem {...item} />} />

      <View className="absolute bottom-0 left-0 right-0 h-[100px] bg-white p-2.5 shadow-md">
        <Button onPress={goBack}>Done</Button>
      </View>
    </View>
  );
}
