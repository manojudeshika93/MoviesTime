import React from 'react';
import PropTypes from 'prop-types';
import {Image, View} from 'react-native';

import {styles} from './ImageBox.style';
import {colors} from '../../../constants/colors';

export const ImageBox = ({
  props,
  height,
  width,
  margin,
  padding,
  backgroundColor,
  borderRadius,
  borderWidth,
  borderColor,
  shadowColor,
  mode,
  source,
  marginLeft,
  marginRight,
}) => {
  return (
    <View style={{...styles.container}}>
      <Image
        {...props}
        style={{
          height,
          width,
          margin,
          padding,
          borderRadius,
          borderWidth,
          borderColor,
          shadowColor,
          marginLeft,
          marginRight,
          backgroundColor,
        }}
        resizeMode={mode}
        source={source}
      />
    </View>
  );
};

ImageBox.propTypes = {
  props: PropTypes.object,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.number,
  padding: PropTypes.number,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.number,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  shadowColor: PropTypes.string,
  mode: PropTypes.string,
  source: PropTypes.object.isRequired,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
};

ImageBox.defaultProps = {
  height: 200,
  width: 120,
  borderRadius: 10,
  margin: 0,
  padding: 0,
  mode: 'cover',
  backgroundColor: colors.darkBlue,
};
