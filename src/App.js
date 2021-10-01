import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {StyleSheet, Text, View} from 'react-native';
import Appbar from './components/Appbar';
import NameCard from './components/NameCard';
import {Dimensions} from 'react-native';
import VehicleCard from './components/VehicleCard';
import InteractionArea from './components/InteractionArea';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LinearGradient
        colors={['#009FDF', '#62D0FF']}
        style={styles.linearGradient}>
        <Appbar />
        <NameCard />
        <VehicleCard />
        <InteractionArea />
      </LinearGradient>
    </View>
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
