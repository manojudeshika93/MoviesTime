import {StyleSheet} from 'react-native';

import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
});
