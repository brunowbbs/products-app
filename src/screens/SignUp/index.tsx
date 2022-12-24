import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Button, Input, Text} from '../../components';
import BasicTemplate from '../../templates/Basic';
import {COLORS} from '../../theme';
import styles from './styles';

const SignUp = () => {
  function header() {
    return (
      <>
        <View style={styles.containerLogo}>
          <Text type="logo" style={styles.colorOrange}>
            e
          </Text>
          <Text type="logo">Shop</Text>
        </View>

        <Text type="title" style={styles.title}>
          Criar nova conta
        </Text>

        <Text style={styles.description}>
          Por favor, insira suas informações para criar uma nova conta e
          utilizar o app.
        </Text>
      </>
    );
  }

  function formLogin() {
    return (
      <>
        <Input placeholder="Nome completo" style={styles.input} />
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          style={styles.input}
          autoCapitalize="none"
        />
        <Input
          placeholder="Senha"
          password
          style={styles.input}
          autoCapitalize="none"
        />

        <Button background="primary" title="Cadastrar" />

        <View style={styles.containerRegister}>
          <Text>
            Já possui cadastro?{' '}
            <Text style={styles.textWeight}>Faça login</Text>
          </Text>
        </View>
      </>
    );
  }

  function divider() {
    return <View style={styles.divider} />;
  }

  function SocialButtons() {
    return (
      <View style={styles.socialButtons}>
        <Text>ou cadastre-se com</Text>
        <View style={styles.containerButtons}>
          <Button
            style={styles.socialButton}
            title="Facebook"
            background="blue"
            icon={<Icon size={18} name="facebook" color={COLORS.white} />}
          />
          <View style={styles.dividerButtons} />
          <Button
            style={styles.socialButton}
            title="Gmail"
            background="red"
            icon={<Icon size={18} name="google" color={COLORS.white} />}
          />
        </View>
      </View>
    );
  }

  return (
    <BasicTemplate>
      <View style={styles.container}>
        {header()}
        {formLogin()}
        {divider()}
        {SocialButtons()}
      </View>
    </BasicTemplate>
  );
};
export default SignUp;
