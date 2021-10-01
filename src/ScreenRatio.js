import React from 'react';

import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width; //392.72727272727275
const windowHeight = Dimensions.get('window').height; //737.4545454545455
const ratioWidth = windowWidth / 360;
const ratioHeight = windowHeight / 720;
const ratioSquare = ratioHeight > ratioWidth ? ratioWidth : ratioHeight;

export default {
  ratioWidth: ratioWidth,
  ratioHeight: ratioHeight,
  ratioSquare: ratioSquare,
};
