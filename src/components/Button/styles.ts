import {StyleSheet} from 'react-native';
import {SIZES} from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 30,
    height: SIZES.elements.height,

    borderRadius: SIZES.radius,
  },
  text: {
    color: '#FFF',
  },

  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  containerIcon: {
    marginRight: 10,
  },
});

export default styles;
