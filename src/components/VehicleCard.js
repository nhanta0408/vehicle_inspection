import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import ScreenRatio from '../ScreenRatio';
const VehicleCard = () => {
  return (
    <View style={styles.vehicleCard}>
      <View style={styles.inforView}>
        <View>
          <Text style={styles.fieldTitle}>Vehicle ID: </Text>
          <Text style={styles.fieldTitle}>Number Plate: </Text>
          <Text style={styles.fieldTitle}>Model: </Text>
        </View>
        <View>
          <Text style={styles.fieldValue}>H. Jones </Text>
          <Text style={styles.fieldValue}>D032 </Text>
          <Text style={styles.fieldValue}>School Bus </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vehicleCard: {
    width: 310 * ScreenRatio.ratioWidth,
    height: 115 * ScreenRatio.ratioHeight,
    borderRadius: 10 * ScreenRatio.ratioSquare,
    backgroundColor: 'white',
    marginTop: 25 * ScreenRatio.ratioHeight,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  image: {
    width: 80 * ScreenRatio.ratioSquare,
    height: 80 * ScreenRatio.ratioSquare,
    borderRadius: 160 * ScreenRatio.ratioSquare,
    marginLeft: 15 * ScreenRatio.ratioWidth,
  },
  inforView: {
    width: 220 * ScreenRatio.ratioWidth,
    marginLeft: 25 * ScreenRatio.ratioWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fieldTitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16 * ScreenRatio.ratioSquare,
    marginVertical: 4 * ScreenRatio.ratioHeight,
  },
  fieldValue: {
    fontFamily: 'Nunito',
    fontSize: 16 * ScreenRatio.ratioSquare,
    marginVertical: 4 * ScreenRatio.ratioHeight,
  },
});

export default VehicleCard;
