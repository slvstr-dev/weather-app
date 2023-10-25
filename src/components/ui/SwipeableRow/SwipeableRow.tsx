import { styled } from 'nativewind';
import React, { ReactNode, useRef } from 'react';
import { Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Icon } from '@/components/ui/Icon/Icon';

interface SwipeableRowProps {
  children: ReactNode;
  onDelete: () => void;
}

const StyledRectButton = styled(RectButton, {});

const SwipeableRow = ({ children, onDelete }: SwipeableRowProps) => {
  const swipeableRowRef = useRef<Swipeable>(null);

  const renderRightActions = (_progress: Animated.AnimatedInterpolation<number>) => {
    return (
      <StyledRectButton
        onPress={handleDelete}
        className="items-center flex-row bg-red-600 flex-1 justify-end">
        <Icon name="TrashOutline" size={24} className="text-white mr-2" />
      </StyledRectButton>
    );
  };

  const handleDelete = () => {
    swipeableRowRef.current?.close();

    onDelete();
  };

  return (
    <Swipeable
      ref={swipeableRowRef}
      friction={2}
      leftThreshold={80}
      enableTrackpadTwoFingerGesture
      rightThreshold={40}
      renderRightActions={renderRightActions}>
      {children}
    </Swipeable>
  );
};

export default SwipeableRow;
