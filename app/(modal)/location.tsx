import { useNavigation } from 'expo-router';
import { View, Text } from 'react-native';

import { Button } from '@/components/ui/Button/Button';

export default function LocationModal() {
  const { goBack } = useNavigation();

  return (
    <View className="bg-lightGrey flex-1 p-6">
      <View>
        <Text>LocationModal</Text>
      </View>

      <View className="absolute bottom-0 left-0 right-0 h-[100px] p-2.5 flex-row items-start justify-center">
        <Button onPress={goBack} baseClassName="flex-1 shadow-md">
          Confirm
        </Button>
      </View>
    </View>
  );
}
