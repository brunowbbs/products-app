import {ReactElement} from 'react';
import {TouchableHighlightProps} from 'react-native';

export type ButtonProps = {
  title: string;
  background?: 'primary' | 'secondary' | 'blue' | 'red' | 'transparent';
  icon?: ReactElement;
} & TouchableHighlightProps;
