import React, {ReactElement} from 'react';
import {SafeAreaView, View} from 'react-native';

import styles from './styles';

type BasicTemplateProps = {
  children: ReactElement | ReactElement[];
};

const BasicTemplate = ({children}: BasicTemplateProps) => {
  return (
    <SafeAreaView style={styles.containerSafe}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default BasicTemplate;
