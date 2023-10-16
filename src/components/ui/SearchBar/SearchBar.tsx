import { Link } from 'expo-router';
import { TextInput, View, TouchableOpacity } from 'react-native';

import { Icon } from '@/components/ui/Icon/Icon';
import { cn } from '@/utils/tailwindUtils';

export interface SearchBarProps {
  baseClassName?: string;
}

export default function SearchBar({ baseClassName }: SearchBarProps) {
  return (
    <View
      className={cn('min-h-full bg-white items-center flex-row', baseClassName)}
      style={{ gap: 10 }}>
      <View className="flex-1">
        <View
          className="flex-row items-center bg-theme-lightGrey rounded-lg px-2"
          style={{ gap: 4 }}>
          <Icon icon="SearchOutline" className="text-theme-medium" />

          <TextInput
            className="p-2.5 text-theme-mediumDark"
            placeholder="Restaurants, groceries, dishes"
          />
        </View>
      </View>

      <Link href="/(modal)/filter" asChild>
        <TouchableOpacity className="p-2.5 rounded-full">
          <Icon icon="OptionsOutline" className="text-theme-primary" />
        </TouchableOpacity>
      </Link>
    </View>
  );
}
