import { styled } from 'nativewind';
import { Text, TouchableOpacity, View } from 'react-native';
import BouncyCheckBox from 'react-native-bouncy-checkbox';
import { type VariantProps, tv } from 'tailwind-variants';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '@/tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export type CheckBoxItemVariants = VariantProps<typeof checkboxItem>;

export interface CheckBoxItemProps extends CheckBoxItemVariants {
  name: string;
  count: number;
  baseClassName?: string;
  isChecked?: boolean;
  onChange?: () => void;
}

const StyledBouncyCheckBox = styled(BouncyCheckBox, {
  props: {
    iconStyle: true,
    innerIconStyle: true,
    textContainerStyle: true,
  },
});

export const CheckBoxItem = ({
  name,
  count,
  isChecked,
  baseClassName,
  onChange,
}: CheckBoxItemProps) => {
  const { button } = checkboxItem();

  return (
    <View className={baseClassName} style={{ gap: 8 }}>
      <TouchableOpacity className={button()} style={{ gap: 8 }} onPress={onChange}>
        <Text className="flex-1">
          {name} ({count})
        </Text>

        <StyledBouncyCheckBox
          isChecked={isChecked}
          fillColor={fullConfig.theme?.colors?.primary as string}
          iconStyle="rounded border-2"
          innerIconStyle="rounded border-2"
          textContainerStyle="ml-0"
          disableBuiltInState
          onPress={onChange}
        />
      </TouchableOpacity>
    </View>
  );
};

const checkboxItem = tv({
  slots: {
    button: 'flex-row items-center p-3 bg-white mb-2 rounded-md',
  },
  variants: {
    isDisabled: {
      true: {
        button: 'opacity-50',
      },
    },
  },
});
