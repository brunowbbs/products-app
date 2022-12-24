import React, {ReactElement} from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../components/Header';

type BasicHeaderTemplateProps = {
  children: ReactElement;
  title: string;
};

const BasicHeaderTemplate = ({children, title}: BasicHeaderTemplateProps) => {
  return (
    <SafeAreaView>
      <Header title={title} />
      {children}
    </SafeAreaView>
  );
};

export default BasicHeaderTemplate;
