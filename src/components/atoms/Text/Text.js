import React from 'react';
import {Text as TextElement, View} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './Text.style';
import {colors} from '../../../constants/colors';

export const Text = ({
  children,
  fontSize,
  color,
  fontWeight,
  lineHeight,
  fontStyle,
  alignItems,
  justifyContent,
  textAlign,
  flex,
  opacity,
  borderWidth,
}) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.container,
        alignItems,
        justifyContent,
        flex,
        borderWidth,
        paddingHorizontal: borderWidth > 0 ? 2 : 0,
      }}>
      <TextElement
        style={{
          fontSize,
          fontWeight,
          color,
          lineHeight,
          fontStyle,
          textAlign,
          opacity,
        }}>
        {children}
      </TextElement>
    </View>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.number,
  fontStyle: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  textAlign: PropTypes.string,
  flex: PropTypes.number,
  borderWidth: PropTypes.number,
};

Text.defaultProps = {
  fontSize: 18,
  fontWeight: 'normal',
  lineHeight: 20,
  color: colors.black,
  borderWidth: 0,
};
