import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.gray,
    height: SIZES.elements.height,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },

  input: {
    color: COLORS.text,
    flex: 1,
    fontFamily: FONTS.family[400],
    fontSize: FONTS.sizes.subtitle,
  },
});

export default styles;
