import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';

import store from './src/redux';

import StackRoutes from './src/routes/stack.routes';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <StackRoutes />
      </Fragment>
      <Toast />
    </Provider>
  );
};

export default App;
