import { Link, useNavigation } from 'expo-router';
import { styled } from 'nativewind';
import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SectionList,
  ListRenderItem,
  ScrollView,
} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import resolveConfig from 'tailwindcss/resolveConfig';

import { restaurant } from '@/assets/data/restaurant';
import ParallaxScrollView from '@/components/layout/ParallaxScrollView/ParallaxScrollView';
import { Icon } from '@/components/ui/Icon/Icon';
import { useBasketStore } from '@/stores/basketStore';
import tailwindConfig from '@/tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

const StyledScrollView = styled(ScrollView, {
  props: {
    contentContainerStyle: true,
  },
});

const Details = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);

  const opacity = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<TouchableOpacity[]>([]);

  const DATA = restaurant.food.map((item, index) => ({
    title: item.category,
    data: item.meals,
    index,
  }));

  const { items, total } = useBasketStore();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: '',
      headerTintColor: fullConfig.theme?.colors?.primary as string,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="w-10 h-10 rounded-full bg-white justify-center items-center">
          <Icon name="ArrowBackOutline" size={24} className="text-primary" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View className="flex-row items-center justify-center" style={{ gap: 10 }}>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-white justify-center items-center">
            <Icon name="ShareOutline" size={24} className="text-primary" />
          </TouchableOpacity>

          <TouchableOpacity className="w-10 h-10 rounded-full bg-white justify-center items-center">
            <Icon name="SearchOutline" size={24} className="text-primary" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  const selectCategory = (index: number) => {
    const selected = itemsRef.current[index];
    setActiveIndex(index);

    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
    });
  };

  const onScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    if (y > 350) {
      opacity.value = withTiming(1);
    } else {
      opacity.value = withTiming(0);
    }
  };

  const renderItem: ListRenderItem<any> = ({ item, index }) => (
    <Link key={index} href={{ pathname: '/(modal)/dish', params: { id: item.id } }} asChild>
      <TouchableOpacity className="bg-white p-4 flex-row">
        <View className="flex-1">
          <Text className="text-base font-bold">{item.name}</Text>

          <Text className="text-sm text-mediumDark py-1">{item.info}</Text>

          <Text className="text-sm text-mediumDark py-1">€{item.price}</Text>
        </View>

        <Image source={item.img} className="h-20 w-20 rounded-[4px]" />
      </TouchableOpacity>
    </Link>
  );

  return (
    <>
      <ParallaxScrollView
        scrollEvent={onScroll}
        className="flex-1"
        backgroundColor={fullConfig.theme?.colors?.white as string}
        parallaxHeaderHeight={250}
        stickyHeaderHeight={100}
        renderBackground={() => <Image source={restaurant.img} className="h-[300px] w-full" />}
        contentBackgroundColor={fullConfig.theme?.colors?.lightGrey as string}
        renderStickyHeader={() => (
          <View key="sticky-header" className="bg-white ml-[70px] h-[100px] justify-end">
            <Text className="text-xl m-2.5">{restaurant.name}</Text>
          </View>
        )}>
        <View className="bg-lightGrey">
          <Text className="text-3xl m-4">{restaurant.name}</Text>

          <Text className="text-base m-4 leading-[22px] text-medium">
            {restaurant.delivery} ·{' '}
            {restaurant.tags.map(
              (tag, index) => `${tag}${index < restaurant.tags.length - 1 ? ' · ' : ''}`,
            )}
          </Text>

          <Text className="text-base m-4 leading-[22px] text-medium">{restaurant.about}</Text>

          <SectionList
            className="pb-[50px]"
            keyExtractor={(item, index) => `${item.id + index}`}
            scrollEnabled={false}
            sections={DATA}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View className="mx-4 h-px bg-grey" />}
            SectionSeparatorComponent={() => <View className="h-px bg-grey" />}
            renderSectionHeader={({ section: { title, index } }) => (
              <Text className="text-[22px] font-bold m-4 mt-10" key={index}>
                {title}
              </Text>
            )}
          />
        </View>
      </ParallaxScrollView>

      {/* Sticky segments */}
      <Animated.View
        className="absolute h-[50px] left-0 right-0 top-[100] pb-1 bg-white"
        style={animatedStyles}>
        <View className="bg-white justify-center w-full h-full">
          <StyledScrollView
            ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle="px-4 items-center pb-1">
            {restaurant.food.map((item, index) => (
              <TouchableOpacity
                ref={(ref) => (itemsRef.current[index] = ref!)}
                key={index}
                className={
                  activeIndex === index
                    ? 'rounded-[50px] py-1 px-4 bg-primary'
                    : 'px-4 py-1 rounded-[50px]'
                }
                onPress={() => selectCategory(index)}>
                <Text
                  className={
                    activeIndex === index
                      ? 'text-white font-bold text-base'
                      : 'text-base color-primary'
                  }>
                  {item.category}
                </Text>
              </TouchableOpacity>
            ))}
          </StyledScrollView>
        </View>
      </Animated.View>

      {/* Footer Basket */}
      {items > 0 && (
        <View className="absolute bg-white bottom-0 left-0 w-full p-2.5 shadow-lg">
          <SafeAreaView edges={['bottom']} className="bg-white">
            <Link href="/basket" asChild>
              <TouchableOpacity className="bg-primary px-4 rounded-lg items-center flex-row flex-1 justify-between h-[50px]">
                <Text className="text-white font-bold text-base">{items}</Text>

                <Text className="text-white bg-primary font-bold p-2 rounded-sm">View Basket</Text>

                <Text className="text-white font-bold text-base">€{total}</Text>
              </TouchableOpacity>
            </Link>
          </SafeAreaView>
        </View>
      )}
    </>
  );
};

export default Details;
