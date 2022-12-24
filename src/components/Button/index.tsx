import React from 'react';
import {TouchableHighlight, View} from 'react-native';
import {darken} from 'react-native-color-toolkit';

import {COLORS} from '../../theme';
import Text from '../Text';
import {ButtonProps} from './types';

import styles from './styles';

const Button = ({
  background = 'transparent',
  title,
  style,
  color = 'white',
  icon,
  ...rest
}: ButtonProps) => {
  const bgColor = COLORS[background];
  const txtcolor = COLORS[color];

  return (
    <TouchableHighlight
      underlayColor={darken(bgColor, 0.2)}
      onPress={() => console.log('ok')}
      style={[style, styles.container, {backgroundColor: bgColor}]}
      {...rest}>
      <View style={styles.wrapper}>
        {icon && <View style={styles.containerIcon}>{icon}</View>}
        <Text type="subtitle" style={[styles.text, {color: txtcolor}]}>
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default Button;
