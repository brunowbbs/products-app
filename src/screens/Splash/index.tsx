import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {IAppState} from '../../redux';

import {replaceNavigateTo} from '../../services/navigation';

const Splash = () => {
  const token = useSelector<IAppState>(state => state.auth.user.token);

  useEffect(() => {
    console.log(token);
    const times = setTimeout(() => {
      if (token) {
        replaceNavigateTo('Home');
      } else {
        replaceNavigateTo('Initial');
      }
    }, 3000);

    return () => clearTimeout(times);
  }, [token]);

  return (
    <SafeAreaView>
      <ActivityIndicator size={80} />
    </SafeAreaView>
  );
};

export default Splash;
