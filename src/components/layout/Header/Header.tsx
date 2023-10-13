import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';

import { PersonOutlineIcon } from '@/components/ui/Icons/PersonOutlineIcon';

export default function Header() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="h-[60] bg-white items-center justify-between flex-row gap-5">
        <TouchableOpacity>
          <Image source={require('@/assets/images/bike.png')} className="h-[30] w-[30]" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-1">
          <Text className="text-theme-primary">Home</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <PersonOutlineIcon className="text-theme-primary" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
