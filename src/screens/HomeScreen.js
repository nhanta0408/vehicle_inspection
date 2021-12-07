import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {StyleSheet, Text, View, ActivityIndicator, SafeAreaView} from 'react-native';
import Appbar from '../components/Appbar';
import NameCard from '../components/NameCard';
import {Dimensions} from 'react-native';
import VehicleCard from '../components/VehicleCard';
import InteractionArea from '../components/InteractionArea';
import ResultArea from '../components/ResultArea';
import LoadingArea from '../components/LoadingArea';
import {useSelector, useDispatch} from 'react-redux';

const HomeScreen = ({navigation, route}) => {
  const resultInspect = useSelector(state => state.inspectReducer);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <LinearGradient
        colors={['#009FDF', '#62D0FF']}
        style={styles.linearGradient}>
        <Appbar />
        <NameCard />
        <VehicleCard />
        {/* <InteractionArea navigation={navigation} /> */}
        {resultInspect.stateType == 'Idle' ? (
          <InteractionArea navigation={navigation} />
        ) : resultInspect.stateType == 'Loading' ? (
          <LoadingArea />
        ) : (
          <ResultArea isSuccessfullArr={resultInspect.resultArr} />
        )}
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
