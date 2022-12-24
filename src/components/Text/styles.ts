import {StyleSheet} from 'react-native';
import {FONTS} from '../../theme';

const styles = StyleSheet.create({
  logo: {
    fontSize: FONTS.sizes.logo,
    fontFamily: FONTS.family[800],
  },
  title: {
    fontSize: FONTS.sizes.title,
    fontFamily: FONTS.family[800],
  },
  subtitle: {
    fontSize: FONTS.sizes.subtitle,
    fontFamily: FONTS.family[600],
  },
  text: {
    fontSize: FONTS.sizes.text,
    fontFamily: FONTS.family[400],
  },
});

export default styles;
