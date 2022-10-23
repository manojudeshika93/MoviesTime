import {StyleSheet} from 'react-native';

import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  topContainer: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: colors.darkBlue,
    padding: 10,
    marginBottom: 15,
  },
  highlight: {
    fontWeight: '400',
    color: colors.black,
  },
});
