import React from 'react';
import {View} from 'react-native';
import {Button, Text} from '../../components';

import BasicTemplate from '../../templates/Basic';

import styles from './styles';

const InitialScreen = () => {
  return (
    <View style={styles.wrapper}>
      <BasicTemplate>
        <View style={styles.full}>
          <View style={styles.full}>
            <View style={styles.containerText}>
              <Text style={styles.text} type="title">
                <Text style={styles.orange} type="title">
                  e
                </Text>
                Shop
              </Text>
            </View>
          </View>

          <View style={styles.containerText}>
            <Text style={styles.text} type="title">
              Comece sua jornada com o{' '}
              <Text style={styles.orange} type="title">
                e
              </Text>
              Shop
            </Text>
          </View>

          <View style={styles.containerButtons}>
            <Button style={styles.full} title="Entrar" background="primary" />
            <View style={styles.dividerButton} />
            <Button
              style={styles.full}
              title="Cadastrar"
              background="white"
              color="primary"
            />
          </View>
        </View>
      </BasicTemplate>
    </View>
  );
};
export default InitialScreen;
