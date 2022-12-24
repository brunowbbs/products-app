import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Text from '../Text';

import styles from './styles';
import {HeaderProps} from './types';

const Header = ({title}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Icon name="arrow-left" size={30} />
      <Text type="title">{title}</Text>
      <View style={styles.right} />
    </View>
  );
};

export default Header;
