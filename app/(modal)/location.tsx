import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView from 'react-native-maps';
import resolveConfig from 'tailwindcss/resolveConfig';

import { Button } from '@/components/ui/Button/Button';
import { Icon } from '@/components/ui/Icon/Icon';
import tailwindConfig from '@/tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export default function LocationModal() {
  const { goBack } = useNavigation();
  const [location, setLocation] = useState({
    latitude: 52.0907,
    longitude: 5.1214,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });

  return (
    <View className="bg-lightGrey flex-1">
      <GooglePlacesAutocomplete
        placeholder="Search or move the map"
        onPress={(_, details = null) => {
          const point = details?.geometry?.location;

          if (!point) return;

          setLocation({
            ...location,
            latitude: point.lat,
            longitude: point.lng,
          });
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
          language: 'en',
        }}
        fetchDetails={true}
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            backgroundColor: fullConfig.theme?.colors?.grey as string,
            paddingLeft: 35,
          },
          textInputContainer: {
            padding: 8,
            paddingBottom: 4,
            borderRadius: 10,
            backgroundColor: fullConfig.theme?.colors?.white as string,
          },
        }}
        renderLeftButton={() => (
          <Icon icon="SearchOutline" className="text-medium absolute top-[20] left-[15] z-10" />
        )}
        enablePoweredByContainer={false}
      />

      <MapView region={location} showsUserLocation className="flex-1" />

      <View className="absolute bottom-0 left-0 right-0 h-[100px] p-2.5 flex-row items-start justify-center">
        <Button onPress={goBack} baseClassName="flex-1 shadow-md">
          Confirm
        </Button>
      </View>
    </View>
  );
}
