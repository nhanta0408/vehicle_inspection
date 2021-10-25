import React from 'react';

import {Pressable, StyleSheet, Text, View, ImageBackground} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreenRatio from '../ScreenRatio';
import CustomButton from '../components/CustomButton';
import RNFS from 'react-native-fs';
import {useSelector, useDispatch} from 'react-redux';
import {setIsFinishedArr} from '../redux/finishedReducers/isFinishedActions';
import {AppColor} from '../value';

const CaptureReviewScreen = ({navigation, route}) => {
  const isFinished = useSelector(
    state => state.isFinishedReducer,
  ).isFinishedArr;

  const dispatch = useDispatch();
  return (
    <ImageBackground
      source={{uri: route.params.imageUri}}
      style={{
        width: ScreenRatio.ratioWidth * 360,
        flex: 1,
        alignSelf: 'stretch',
      }}>
      {console.log(`Print bên Preview: ${route.params.imageUri}`)}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.pop()}>
          <MaterialCommunityIcons
            name="close"
            size={45 * ScreenRatio.ratioSquare}
            color="white"
          />
        </Pressable>
      </View>
      <View style={{flex: 18}}></View>
      <View style={styles.footer}>
        <CustomButton
          text="Accept"
          backgroundColor={AppColor.secondaryColor}
          textColor="white"
          borderWidth={0}
          width={160}
          iconRightName="check"
          iconColor="white"
          onPress={async () => {
            try {
              const filePath = route.params.imageUri;
              const newFilePath =
                RNFS.ExternalDirectoryPath +
                `/MyTest${route.params.number}.jpg`;
              RNFS.moveFile(filePath, newFilePath)
                .then(
                  () =>
                    console.log(
                      'File move from',
                      filePath,
                      ' to ',
                      newFilePath,
                    ),
                  dispatch(setIsFinishedArr(route.params.number)),
                  navigation.navigate('HomeScreen'),
                )
                .catch(error => {
                  console.log(error);
                });
            } catch (error) {
              console.log(error);
            }
          }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 2,
    padding: 5 * ScreenRatio.ratioSquare,
    width: '100%',
    backgroundColor: '#00000000',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  footer: {
    flex: 4,
    backgroundColor: '#00000000',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 20,
  },

  insideCircle: {
    marginTop: 8 * ScreenRatio.ratioSquare,
    height: 64 * ScreenRatio.ratioSquare,
    width: 64 * ScreenRatio.ratioSquare,
    borderRadius: 30 * ScreenRatio.ratioSquare,
    backgroundColor: 'white',
    borderWidth: 4 * ScreenRatio.ratioSquare,
    borderColor: '#bdbdbd',
  },
});

export default CaptureReviewScreen;
