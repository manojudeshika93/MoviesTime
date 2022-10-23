import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {styles} from './MoviesScreen.style';

export const MoviesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.highlight}>MoviesApp</Text>
    </SafeAreaView>
  );
};
