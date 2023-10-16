import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Stack } from 'expo-router';

import Header from '@/components/layout/Header/Header';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function RootLayout() {
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => <Header />,
          }}
        />

        <Stack.Screen name="(modal)/filter" />
      </Stack>
    </BottomSheetModalProvider>
  );
}
