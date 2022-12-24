import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  colorOrange: {
    color: COLORS.primary,
  },
  title: {
    marginTop: 20,
  },
  description: {
    marginTop: 20,
  },
  input: {
    marginTop: 10,
  },
  containerRegister: {
    alignItems: 'center',
  },
  textWeight: {
    fontWeight: '600',
    color: COLORS.primary,
  },
  divider: {
    borderBottomWidth: 0.7,
    borderBottomColor: COLORS.gray,
    marginHorizontal: '20%',
  },
  socialButtons: {
    alignItems: 'center',
    width: '100%',
  },
  containerButtons: {
    flexDirection: 'row',
  },
  socialButton: {
    flex: 1,
  },
  dividerButtons: {
    width: 10,
  },
});

export default styles;
