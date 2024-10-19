import React from 'react';
import {FlatList, ViewToken} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {AnimatedFlatListProps, AnimatedItemProps} from './types';

function AnimatedItem<T>({
  index,
  children,
  viewableItems,
}: AnimatedItemProps<T>) {
  const animatedStyle = useAnimatedStyle(() => {
    const isVisible = viewableItems.value
      .filter(allViewAble => allViewAble.isViewable)
      .some(viewable => viewable.index === index);

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);
  return (
    <Animated.View style={[{alignSelf: 'center'}, animatedStyle]} key={index}>
      {children}
    </Animated.View>
  );
}

export function AnimatedFlatList<T>({
  renderItem,
  ...rest
}: AnimatedFlatListProps<T>) {
  const viewableItems = useSharedValue<ViewToken[]>([]);
  return (
    <FlatList
      onViewableItemsChanged={({viewableItems: items}) => {
        viewableItems.value = items;
      }}
      {...rest}
      renderItem={props => {
        return (
          <AnimatedItem
            item={props.item}
            viewableItems={viewableItems}
            index={props.index}>
            {renderItem(props)}
          </AnimatedItem>
        );
      }}
    />
  );
}
