import { PropsWithChildren } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { type VariantProps, tv } from 'tailwind-variants';

export type ButtonVariants = VariantProps<typeof button>;

export type ButtonProps = PropsWithChildren<ButtonVariants> & {
  baseClassName?: string;
  onPress?: () => void;
  isDisabled?: boolean;
};

export const Button = ({ children, isDisabled, color, baseClassName, onPress }: ButtonProps) => {
  const { base, text } = button({ color, isDisabled });

  return (
    <TouchableOpacity
      className={base({ className: baseClassName })}
      onPress={onPress}
      disabled={isDisabled}>
      <Text className={text()}>{children}</Text>
    </TouchableOpacity>
  );
};

const button = tv({
  slots: {
    base: 'rounded p-4 items-center',
    text: 'text-white font-bold',
  },
  variants: {
    color: {
      primary: {
        base: 'bg-primary',
      },
      outlinePrimary: {
        base: 'bg-white border border-primary',
        text: 'text-primary',
      },
    },
    isDisabled: {
      true: {
        base: 'bg-grey',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});
