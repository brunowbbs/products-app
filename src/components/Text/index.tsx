import React from 'react';
import {Text as RnText} from 'react-native';

import {TextProps} from './types';

import styles from './styles';

const Text = ({
  children,
  type = 'text',
  align = 'left',
  style,
  ...rest
}: TextProps) => {
  if (type === 'logo') {
    return (
      <RnText style={[style, {textAlign: align}, styles.logo]} {...rest}>
        {children}
      </RnText>
    );
  }

  if (type === 'title') {
    return (
      <RnText style={[style, {textAlign: align}, styles.title]} {...rest}>
        {children}
      </RnText>
    );
  }

  if (type === 'subtitle') {
    return (
      <RnText style={[style, {textAlign: align}, styles.subtitle]} {...rest}>
        {children}
      </RnText>
    );
  }

  return (
    <RnText style={[style, {textAlign: align}, styles.text]} {...rest}>
      {children}
    </RnText>
  );
};

export default Text;
