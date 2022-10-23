import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, Dimensions} from 'react-native';

import {styles} from './Card.style';
import {colors} from '../../../constants/colors';

const screenWidth = Dimensions.get('window').width;

export const Card = ({
  children,
  flexDirection,
  justifyContent,
  alignItems,
  paddingTop,
  paddingBottom,
  paddingHorizontal,
  height,
  width,
  borderWidth,
  backgroundColor,
  disabled,
  onClick,
  borderRadius,
  stylesProps,
  flex,
  marginHorizontal,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        alignItems,
        flex: flex,
      }}
      disabled={disabled}
      onPress={onClick}>
      <View
        style={{
          ...stylesProps,
          flexDirection,
          justifyContent,
          alignItems,
          paddingTop,
          paddingBottom,
          paddingHorizontal,
          height,
          width,
          borderWidth,
          backgroundColor,
          borderRadius,
          marginHorizontal,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

Card.propTypes = {
  flex: PropTypes.number,
  children: PropTypes.node,
  onClick: PropTypes.func,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  paddingTop: PropTypes.number,
  paddingButtom: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  borderRadius: PropTypes.number,
  borderWidth: PropTypes.number,
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  stylesProps: PropTypes.object,
  marginHorizontal: PropTypes.number,
};

Card.defaultProps = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: screenWidth * 0.9,
  borderRadius: 10,
  disabled: false,
  backgroundColor: colors.white,
  paddingTop: 15,
  paddingBottom: 5,
  paddingHorizontal: 15,
  marginHorizontal: 15,
};
