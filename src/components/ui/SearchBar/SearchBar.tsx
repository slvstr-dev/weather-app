import { Link } from 'expo-router';
import { TextInput, View, TouchableOpacity } from 'react-native';

import { Icon } from '@/components/ui/Icon/Icon';

export default function SearchBar() {
  return (
    <View className="min-h-full bg-white items-center flex-row px-5 gap-x-2.5">
      <TouchableOpacity className="flex-1">
        <View className="flex-row items-center gap-x-1 bg-theme-lightGrey rounded-lg">
          <Icon icon="SearchOutline" className="text-theme-medium" />

          <TextInput
            className="p-2.5 text-theme-mediumDark"
            placeholder="Restaurants, groceries, dishes"
          />
        </View>
      </TouchableOpacity>

      <Link href="/" asChild>
        <TouchableOpacity className="p-2.5 rounded-full">
          <Icon icon="OptionsOutline" className="text-theme-primary" />
        </TouchableOpacity>
      </Link>
    </View>
  );
}
