import {ReactElement} from 'react';
import {TouchableHighlightProps} from 'react-native';

export type ButtonProps = {
  title: string;
  background?:
    | 'primary'
    | 'secondary'
    | 'blue'
    | 'red'
    | 'transparent'
    | 'white';
  color?: 'white' | 'primary';
  icon?: ReactElement;
} & TouchableHighlightProps;
