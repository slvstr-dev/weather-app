import { Text, TouchableOpacity, View } from 'react-native';
import { type VariantProps, tv } from 'tailwind-variants';

import { Icon } from '@/components/ui/Icon/Icon';

export type FilterItemVariants = VariantProps<typeof filterItem>;

export interface FilterItemProps extends FilterItemVariants {
  name: string;
  count: number;
  baseClassName?: string;
  checked?: boolean;
}

export const FilterItem = ({ name, count, checked, baseClassName }: FilterItemProps) => {
  const { button } = filterItem();

  return (
    <View className={baseClassName} style={{ gap: 8 }}>
      <TouchableOpacity className={button()} style={{ gap: 8 }}>
        {/* {!!icon && <Icon icon={icon} className="text-medium" />} */}

        <Text className="flex-1">
          Name: {name}, Checked: {checked}, Count: {count}
        </Text>

        <Icon icon="ChevronForward" className="text-primary" />
      </TouchableOpacity>
    </View>
  );
};

const filterItem = tv({
  slots: {
    button: 'flex-row items-center p-4 border-grey border-y bg-white',
  },
  variants: {
    isDisabled: {
      true: {
        button: 'opacity-50',
      },
    },
  },
});
