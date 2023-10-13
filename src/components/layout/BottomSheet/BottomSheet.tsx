import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { ReactNode, type Ref, forwardRef, useMemo } from 'react';

interface BottomSheetProps {
  children: ReactNode;
}

export const BottomSheet = forwardRef(function BottomSheet(
  { children }: BottomSheetProps,
  ref: Ref<BottomSheetModal>,
) {
  const snapPoints = useMemo(() => ['50%'], []);

  return (
    <BottomSheetModal ref={ref} snapPoints={snapPoints}>
      {children}
    </BottomSheetModal>
  );
});
