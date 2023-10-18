import { Ref, forwardRef } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { type VariantProps, tv } from 'tailwind-variants';

import { Icon, IconProps } from '@/components/ui/Icon/Icon';
import { Option } from '@/types/interfaces';

export type PreferenceVariants = VariantProps<typeof preference>;

export type PreferenceProps = PreferenceVariants & {
  baseClassName?: string;
  isDisabled?: boolean;
  icon?: IconProps['icon'];
  option: Option;
};

export const Preference = forwardRef(function Preference(
  { isDisabled, baseClassName, option, icon, ...props }: PreferenceProps,
  ref: Ref<TouchableOpacity>,
) {
  const { button } = preference({ className: baseClassName });

  return (
    <TouchableOpacity
      ref={ref}
      className={button({ isDisabled })}
      style={{ gap: 8 }}
      disabled={isDisabled}
      {...props}>
      {!!icon && <Icon icon={icon} className="text-medium" />}

      <Text className="flex-1">{option.label}</Text>

      <Icon icon="ChevronForward" className="text-primary" />
    </TouchableOpacity>
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
