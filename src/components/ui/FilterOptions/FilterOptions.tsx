import { Text, TouchableOpacity, View } from 'react-native';
import { type VariantProps, tv } from 'tailwind-variants';

import { Icon } from '@/components/ui/Icon/Icon';

export type FilterOptionsVariants = VariantProps<typeof filterOption>;

export interface FilterOptionsProps extends FilterOptionsVariants {
  baseClassName?: string;
}

export const FilterOptions = ({ baseClassName }: FilterOptionsProps) => {
  const { button, base } = filterOption();

  return (
    <>
      <View className={base({ className: baseClassName })}>
        <TouchableOpacity className={button()} style={{ gap: 20 }}>
          <Icon icon="ArrowDownOutline" className="text-medium" />

          <Text className="flex-1">Sort</Text>

          <Icon icon="ChevronForward" className="text-primary" />
        </TouchableOpacity>

        <View className="h-px bg-grey" />

        <TouchableOpacity className={button()} style={{ gap: 20 }}>
          <Icon icon="RestaurantOutline" className="text-medium" />

          <Text className="flex-1">Hygene rating</Text>

          <Icon icon="ChevronForward" className="text-primary" />
        </TouchableOpacity>

        <View className="h-px bg-grey" />

        <TouchableOpacity className={button()} style={{ gap: 20 }}>
          <Icon icon="PriceTagOutline" className="text-medium" />

          <Text className="flex-1">Offers</Text>

          <Icon icon="ChevronForward" className="text-primary" />
        </TouchableOpacity>

        <View className="h-px bg-grey" />

        <TouchableOpacity className={button()} style={{ gap: 20 }}>
          <Icon icon="NutritionOutline" className="text-medium" />

          <Text className="flex-1">Dietary</Text>

          <Icon icon="ChevronForward" className="text-primary" />
        </TouchableOpacity>
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
