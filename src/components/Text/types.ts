import {TextProps as RnTextProps} from 'react-native';

export type TextProps = {
  type?: 'logo' | 'title' | 'subtitle' | 'text';
  align?: 'center' | 'left';
} & RnTextProps;
