This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:



# react-native-animated-flatlist

`react-native-animated-flatlist` is an extended version of the `FlatList` component with built-in animations, providing smoother and more dynamic scrolling experiences. It supports all the original `FlatList` props and is available for both iOS and Android platforms.

## Features

- Smooth animations for scrolling and rendering.
- Fully customizable, inheriting all the props of `FlatList`.
- Works seamlessly on both iOS and Android.

## Demo
https://github.com/user-attachments/assets/f9661b71-8b94-426c-a29d-371a0256dacb


## Installation
To install the package, use npm or yarn:

```
npm install react-native-animated-flatlist

OR

yarn add react-native-animated-flatlist

```

## Usage

```tsx
/**
 * @Auther
 * Muhammad Faiz
 * faizqadri234@gmail.com
 *
 * 
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {AnimatedFlatList} from 'react-native-animated-flatlist';
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
```
