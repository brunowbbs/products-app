// import {useNavigation} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Input, Text} from '../../components';

import {RootState} from '../../redux';
import {authUserRequest} from '../../redux/modules/auth/actions';
//import {RootStackParamList} from '../../routes/types';
import BasicTemplate from '../../templates/Basic';
import {COLORS} from '../../theme';
import styles from './styles';

//type SignInScreenProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

const SignIn = () => {
  const dispatch = useDispatch();
  // const {navigate} = useNavigation<SignInScreenProp>();

  // const error = useSelector<RootState, boolean>(state => state.auth.error);
  const loading = useSelector<RootState, boolean>(state => state.auth.loading);
  const user = useSelector<RootState, any>(state => state.auth.user);

  function handleAuth() {
    const userAuth = {
      email: 'engwesley@gmail.com',
      password: '123456',
    };
    dispatch(authUserRequest(userAuth));
    // navigate('SignUp');
  }

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
          Bem vindo ao{' '}
          <Text type="title" style={styles.colorOrange}>
            e
          </Text>
          Shop
        </Text>

        <Text style={styles.description}>
          Por favor, Utilize seu e-mail e senha para acessar o app.
        </Text>
      </>
    );
  }

  function formLogin() {
    return (
      <>
        <Input placeholder="E-mail" style={styles.input} />
        <Input placeholder="Senha" password style={styles.input} />

        <Button background="primary" title="Entrar" onPress={handleAuth} />

        <View style={styles.containerRegister}>
          <Text>
            Não é membro? <Text style={styles.textWeight}> Cadastre-se</Text>
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
        <Text>ou entre com</Text>
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
        {loading ? <Text>Carregando...</Text> : <Text />}
        {!loading ? <Text>{JSON.stringify(user)}</Text> : <Text />}
        {header()}
        {formLogin()}
        {divider()}
        {SocialButtons()}
      </View>
    </BasicTemplate>
  );
};
export default SignIn;
