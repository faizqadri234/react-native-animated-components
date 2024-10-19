import React from 'react';
import {FlatListProps, ListRenderItem, ViewToken} from 'react-native';
import {SharedValue} from 'react-native-reanimated';

export type AnimatedFlatListProps<T> = FlatListProps<T> & {
  renderItem: ListRenderItem<T>;
};

export type AnimatedItemProps<T> = {
  index: number;
  children: React.ReactNode;
  viewableItems: SharedValue<ViewToken[]>;
  item: T;
};
