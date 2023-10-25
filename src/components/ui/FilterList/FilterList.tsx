import { Text, TouchableOpacity, View } from 'react-native';
import { type VariantProps, tv } from 'tailwind-variants';

import { Icon, IconProps } from '@/components/ui/Icon/Icon';

export type Filter = {
  label: string;
  name: IconProps['name'];
  onPress: () => void;
  isDisabled?: boolean;
};

export type FilterOptionsVariants = VariantProps<typeof filterOption>;

export interface FilterOptionsProps extends FilterOptionsVariants {
  baseClassName?: string;
  filters: Filter[];
}

export const FilterOptions = ({ baseClassName, filters }: FilterOptionsProps) => {
  const { button, base } = filterOption();

  return (
    <>
      <View className={base({ className: baseClassName })}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter.label}
            className={button({ isDisabled: filter.isDisabled })}
            style={{ gap: 20 }}
            onPress={filter.onPress}
            disabled={filter.isDisabled}>
            <Icon name={filter.name} className="text-medium" />

            <Text className="flex-1">{filter.label}</Text>

            <Icon name="ChevronForward" className="text-primary" />
          </TouchableOpacity>
        ))}
      </View>

      <Text className="text-base font-bold mb-4">Categories</Text>
    </>
  );
};

const filterOption = tv({
  slots: {
    base: 'mb-4 rounded-lg bg-white overflow-hidden px-2',
    button: 'flex-row items-center p-3',
  },
  variants: {
    isDisabled: {
      true: {
        button: 'opacity-50',
      },
    },
  },
});
