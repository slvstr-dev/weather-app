import {
  BottomSheetModal,
  BottomSheetBackdrop,
  useBottomSheetModal,
  type BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { styled } from 'nativewind';
import { ReactNode, type Ref, forwardRef, useMemo, useCallback } from 'react';
import { SafeAreaView } from 'react-native';

import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/utils/tailwindUtils';

export interface BottomSheetProps {
  children: ReactNode;
  baseClassName?: string;
  backgroundStyle?: string;
  label?: string;
}

const StyledBottomSheetModal = styled(BottomSheetModal, {
  props: {
    backgroundStyle: true,
    handleIndicatorStyle: true,
  },
});

export const BottomSheet = forwardRef(function BottomSheet(
  { children, backgroundStyle, baseClassName, label }: BottomSheetProps,
  ref: Ref<BottomSheetModal>,
) {
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />
    ),
    [],
  );
  const snapPoints = useMemo(() => ['50%'], []);
  const { dismiss } = useBottomSheetModal();

  const handlePress = useCallback(() => {
    dismiss();
  }, [dismiss]);

  return (
    <StyledBottomSheetModal
      ref={ref}
      className={baseClassName}
      backgroundStyle={cn('rounded-t-none bg-theme-lightGrey flex-1', backgroundStyle)}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      overDragResistanceFactor={0}
      handleIndicatorStyle="hidden">
      <SafeAreaView>
        {children}

        <Button baseClassName="mt-8 mx-2" onPress={handlePress}>
          {label || 'Close'}
        </Button>
      </SafeAreaView>
    </StyledBottomSheetModal>
  );
});
