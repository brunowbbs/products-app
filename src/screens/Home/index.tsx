import React from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from '../../components';
import {authUserEmpty} from '../../redux/modules/auth/actions';
import {replaceNavigateTo} from '../../services/navigation';

const Home = () => {
  const dispatch = useDispatch();

  function logout() {
    dispatch(authUserEmpty());
    replaceNavigateTo('Initial');
  }

  return (
    <View>
      <Text>Hello Home</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};
export default Home;
