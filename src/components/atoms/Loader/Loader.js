import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {styles} from './Loader.style';
import {colors} from '../../../constants/colors';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.red} />
    </View>
  );
};
