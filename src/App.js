import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import CaptureScreen from './screens/CaptureScreen';
import CaptureReviewScreen from './screens/CaptureReviewScreen';
import {Provider} from 'react-redux';
import {Store} from './redux/store';
import {StatusBar} from 'react-native';
import ScreenRatio from './ScreenRatio';

const Stack = createStackNavigator();

const App = () => {
  console.log(ScreenRatio.ratioHeight);
  console.log(ScreenRatio.ratioWidth);

  return (
    <Provider store={Store}>
      <StatusBar hidden />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="CaptureScreen"
            component={CaptureScreen}
            initialParams={{number: 0}}
          />
          <Stack.Screen
            name="CaptureReviewScreen"
            component={CaptureReviewScreen}
            initialParams={{imageUri: null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});

export default App;
