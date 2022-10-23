import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import CircularProgress from 'react-native-circular-progress-indicator';

import {styles} from './ProgressIndicator.style';
import {colors} from '../../../constants/colors';

export const ProgressIndicator = ({value, suffix}) => {
  return (
    <View style={styles.container}>
      <CircularProgress
        value={value}
        radius={22}
        activeStrokeColor={colors.lightGreen}
        inActiveStrokeColor={colors.white}
        inActiveStrokeOpacity={0.7}
        progressValueStyle={styles.text}
        valueSuffix={suffix}
      />
    </View>
  );
};

ProgressIndicator.propTypes = {
  value: PropTypes.number.isRequired,
  suffix: PropTypes.string,
};

ProgressIndicator.defaultProps = {
  suffix: '%',
};
