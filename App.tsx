/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {AnimatedFlatList} from './src/components/AnimatedFlatlist';
import {Data} from './src/mocks/FlatListData';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <AnimatedFlatList
        contentContainerStyle={{gap: 20, paddingTop: 100, flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        data={Data}
        renderItem={({item}) => {
          return (
            <View
              style={{
                borderRadius: 10,
                paddingVertical: 20,
                paddingHorizontal: 20,
                backgroundColor: 'lightgreen',
              }}>
              <Text>{item.text}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
