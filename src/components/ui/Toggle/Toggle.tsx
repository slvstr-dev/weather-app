import { PropsWithChildren, useCallback, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { type VariantProps, tv } from 'tailwind-variants';

export type ToggleVariants = VariantProps<typeof toggle>;

export type ToggleProps = PropsWithChildren<ToggleVariants> & {
  baseClassName?: string;
  onPress?: () => void;
  isDisabled?: boolean;
  options: {
    label: string;
    value: string;
  }[];
};

export const Toggle = ({ isDisabled, baseClassName, options, onPress }: ToggleProps) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const { base, text, pill } = toggle();

  return (
    <View className={base({ className: baseClassName })}>
      {options?.map((option, idx) => {
        const handlePress = useCallback(() => {
          setActiveIdx(idx);
          onPress?.();
        }, [idx, onPress]);

        return (
          <TouchableOpacity
            key={option.value}
            className={pill({
              isActive: activeIdx === idx,
              isDisabled: isDisabled && activeIdx === idx,
            })}
            onPress={handlePress}
            disabled={isDisabled}>
            <Text className={text({ isActive: activeIdx === idx })}>{option.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const toggle = tv({
  slots: {
    base: 'flex-row gap-x-2 flex-wrap',
    pill: 'rounded-full px-6 py-1',
    text: 'font-semibold',
  },
  variants: {
    isActive: {
      true: {
        pill: 'bg-theme-primary',
        text: 'text-white',
      },
    },
    isDisabled: {
      true: {
        pill: 'bg-theme-grey',
      },
    },
  },
});
