import { Ref, forwardRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { type VariantProps, tv } from 'tailwind-variants';

import { Icon, IconProps } from '@/components/ui/Icon/Icon';
import { Option } from '@/types/interfaces';

export type PreferenceVariants = VariantProps<typeof preference>;

export type PreferenceProps = PreferenceVariants & {
  baseClassName?: string;
  isDisabled?: boolean;
  icon?: IconProps['icon'];
  label: string;
  option: Option;
};

export const Preference = forwardRef(function Preference(
  { isDisabled, baseClassName, option, label, icon }: PreferenceProps,
  ref: Ref<View>,
) {
  const { button } = preference();

  return (
    <View ref={ref} className={baseClassName} style={{ gap: 8 }}>
      <Text className="font-semibold px-2 text-base">{label}</Text>

      <TouchableOpacity className={button({ isDisabled })} style={{ gap: 8 }} disabled={isDisabled}>
        {!!icon && <Icon icon={icon} className="text-medium" />}

        <Text className="flex-1">{option.label}</Text>

        <Icon icon="ChevronForward" className="text-primary" />
      </TouchableOpacity>
    </View>
  );
});

const preference = tv({
  slots: {
    button: 'flex-row items-center p-3 border-grey border-y bg-white',
  },
  variants: {
    isDisabled: {
      true: {
        button: 'opacity-50',
      },
    },
  },
});
