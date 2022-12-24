import {StyleSheet} from 'react-native';
import {SIZES} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SIZES.spacings.small,
  },

  right: {
    width: 30,
  },
});

export default styles;
