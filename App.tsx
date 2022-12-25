import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';

import store, {persistor} from './src/redux';

import StackRoutes from './src/routes/stack.routes';
import {PersistGate} from 'redux-persist/integration/react';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Fragment>
          <StatusBar barStyle="dark-content" />
          <StackRoutes />
        </Fragment>
        <Toast />
      </PersistGate>
    </Provider>
  );
};

export default App;
