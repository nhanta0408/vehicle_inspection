import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Appbar from '../components/Appbar';
import NameCard from '../components/NameCard';
import {Dimensions} from 'react-native';
import VehicleCard from '../components/VehicleCard';
import InteractionArea from '../components/InteractionArea';
import ResultArea from '../components/ResultArea';
import LoadingArea from '../components/LoadingArea';

const HomeScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LinearGradient
        colors={['#009FDF', '#62D0FF']}
        style={styles.linearGradient}>
        <Appbar />
        <NameCard />
        <VehicleCard />
        <InteractionArea navigation={navigation} />
        {/* <ResultArea /> */}
        {/* <LoadingArea /> */}
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

export default HomeScreen;
