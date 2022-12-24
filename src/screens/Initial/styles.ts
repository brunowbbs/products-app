import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.secondary,
    flex: 1,
  },
  full: {
    flex: 1,
  },
  containerText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.white,
    textAlign: 'center',
  },
  orange: {
    color: COLORS.primary,
  },
  containerButtons: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },

  dividerButton: {
    width: 20,
  },
});

export default styles;
