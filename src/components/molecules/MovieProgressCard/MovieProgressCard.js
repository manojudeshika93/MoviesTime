import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './MovieProgressCard.style';
import {ImageBox, ProgressIndicator} from '../../atoms';

export const MovieProgressCard = ({value, source}) => {
  return (
    <View style={styles.container}>
      <ImageBox source={source} />
      <View style={styles.progress}>
        <ProgressIndicator value={value} />
      </View>
    </View>
  );
};

MovieProgressCard.propTypes = {
  value: PropTypes.number.isRequired,
  source: PropTypes.object.isRequired,
};
