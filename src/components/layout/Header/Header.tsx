import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';

import { Icon } from '@/components/ui/Icon/Icon';
import SearchBar from '@/components/ui/SearchBar/SearchBar';

export default function Header() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="min-h-full bg-white items-center flex-row px-5 gap-x-5">
        <TouchableOpacity>
          <Image source={require('@/assets/images/bike.png')} className="w-[30] h-[30]" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-1">
          <Text className="text-theme-medium text-[14px]">Delivery · Now</Text>

          <View className="flex-row items-center gap-x-1">
            <Text className="text-[18px] font-bold">Utrecht</Text>

            <Icon icon="ChevronDown" className="text-theme-primary" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-theme-lightGrey p-2.5 rounded-full">
          <Icon icon="PersonOutline" className="text-theme-primary" />
        </TouchableOpacity>
      </View>

      <SearchBar />
    </SafeAreaView>
  );
}
