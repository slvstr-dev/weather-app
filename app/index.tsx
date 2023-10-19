import { Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Categories } from '@/components/ui/Categories/Categories';
import { Restaurants } from '@/components/ui/Restaurants/Restaurants';

export default function IndexPage() {
  return (
    <SafeAreaView className="mt-[60px] bg-lightGrey flex-1" edges={['bottom', 'top']}>
      <ScrollView>
        <Categories />

        <Text className="text-lg font-bold mt-2 px-4">Top picks in you neighbourhood</Text>

        <Restaurants />

        <Text className="text-lg font-bold mt-2 px-4">Offers near you</Text>

        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  );
}
