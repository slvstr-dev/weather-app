import { useNavigation } from 'expo-router';
import { useCallback, useState } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';

import data from '@/assets/data/filter.json';
import { Button } from '@/components/ui/Button/Button';
import { CheckBoxItem, CheckBoxItemProps } from '@/components/ui/CheckBoxItem/CheckBoxItem';
import { FilterOptions, type Filter } from '@/components/ui/FilterList/FilterList';

const filters: Filter[] = [
  {
    label: 'Sort',
    icon: 'ArrowDownOutline',
    onPress: () => {},
  },
  {
    label: 'Hygene rating',
    icon: 'RestaurantOutline',
    onPress: () => {},
  },
  {
    label: 'Offers',
    icon: 'PriceTagOutline',
    onPress: () => {},
  },

  {
    label: 'Dietary',
    icon: 'NutritionOutline',
    onPress: () => {},
  },
];

export default function FilterModal() {
  const [activeFilters, setActiveFilters] = useState<CheckBoxItemProps[]>([]);
  const { goBack } = useNavigation();

  const renderItem: ListRenderItem<CheckBoxItemProps> = useCallback(
    ({ item }) => {
      return (
        <CheckBoxItem
          {...item}
          isChecked={activeFilters.includes(item)}
          onChange={() => handleFilterClick(item)}
        />
      );
    },
    [activeFilters],
  );

  const handleFilterClick = useCallback(
    (filter: CheckBoxItemProps) => {
      if (activeFilters.includes(filter)) {
        return setActiveFilters(activeFilters.filter((f) => f !== filter));
      }

      setActiveFilters([...activeFilters, filter]);
    },
    [activeFilters],
  );

  const handleClearAll = useCallback(() => {
    setActiveFilters([]);
  }, []);

  return (
    <View className="bg-lightGrey flex-1 p-6">
      <FlatList
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={<FilterOptions filters={filters} />}
        className="mb-[76]"
      />

      <View
        className="absolute bottom-0 left-0 right-0 h-[100px] bg-white p-2.5 shadow-md flex-row items-start justify-center"
        style={{ gap: 10 }}>
        <Button onPress={handleClearAll} color="outlinePrimary" baseClassName="flex-1">
          Clear all
        </Button>

        <Button onPress={goBack} baseClassName="flex-1">
          Done
        </Button>
      </View>
    </View>
  );
}
