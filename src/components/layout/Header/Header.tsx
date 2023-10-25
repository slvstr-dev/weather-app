import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Link } from 'expo-router';
import { useRef } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';

import { BottomSheet } from '@/components/layout/BottomSheet/BottomSheet';
import { Icon } from '@/components/ui/Icon/Icon';
import { Preference } from '@/components/ui/Preference/Preference';
import SearchBar from '@/components/ui/SearchBar/SearchBar';
import { Toggle } from '@/components/ui/Toggle/Toggle';

export default function Header() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openBottomSheet = () => {
    bottomSheetRef.current?.present();
  };

  const toggleOptions = [
    { label: 'Delivery', value: 'delivery' },
    { label: 'Pickup', value: 'pickup' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="min-h-full bg-white items-center flex-row px-5" style={{ gap: 20 }}>
        <TouchableOpacity onPress={openBottomSheet}>
          <Image source={require('@/assets/images/bike.png')} className="w-[30] h-[30]" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-1" onPress={openBottomSheet}>
          <Text className="text-medium text-[14px]">Delivery · Now</Text>

          <View className="flex-row items-center" style={{ gap: 4 }}>
            <Text className="text-[18px] font-bold">Utrecht</Text>

            <Icon name="ChevronDown" className="text-primary" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-lightGrey p-2.5 rounded-full">
          <Icon name="PersonOutline" className="text-primary" />
        </TouchableOpacity>
      </View>

      <SearchBar baseClassName="px-4" />

      <BottomSheet ref={bottomSheetRef} label="Confirm" backgroundStyle="bg-lightGrey">
        <Toggle options={toggleOptions} baseClassName="justify-center px-2" />

        <View className="mt-10" style={{ gap: 30 }}>
          <View style={{ gap: 8 }}>
            <Text className="font-semibold px-2 text-base">Your location</Text>

            <Link href="/(modal)/location" asChild>
              <Preference
                option={{ label: 'Current location', value: 'current_location' }}
                name="LocationOutline"
              />
            </Link>
          </View>

          <View style={{ gap: 8 }}>
            <Text className="font-semibold px-2 text-base">Arrival time</Text>

            <Preference option={{ label: 'Now', value: 'now' }} name="StopwatchOutline" />
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}
