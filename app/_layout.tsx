import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Stack, useNavigation } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import resolveConfig from 'tailwindcss/resolveConfig';

import Header from '@/components/layout/Header/Header';
import { Icon } from '@/components/ui/Icon/Icon';
import tailwindConfig from '@/tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function RootLayout() {
  const { goBack } = useNavigation();

  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => <Header />,
          }}
        />

        <Stack.Screen
          name="(modal)/filter"
          options={{
            presentation: 'modal',
            headerTitle: 'Filter',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: fullConfig.theme?.colors?.lightGrey as string,
            },
            headerLeft: () => (
              <TouchableOpacity onPress={goBack}>
                <Icon name="CloseOutline" size={28} className="text-primary" />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="(modal)/location"
          options={{
            presentation: 'fullScreenModal',
            headerTitle: 'Select location',
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={goBack}>
                <Icon name="CloseOutline" size={28} className="text-primary" />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="(modal)/dish"
          options={{
            presentation: 'modal',
            headerTitle: '',
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity
                className="bg-white rounded-full p-1.5"
                onPress={() => {
                  goBack();
                }}>
                <Icon name="CloseOutline" size={28} className="text-primary" />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="basket"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </BottomSheetModalProvider>
  );
}
