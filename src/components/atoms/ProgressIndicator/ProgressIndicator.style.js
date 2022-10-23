import {StyleSheet} from 'react-native';

import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: colors.darkBlue,
    padding: 2.5,
    borderRadius: 28,
  },
  text: {
    fontSize: 10,
    color: colors.white,
  },
});
