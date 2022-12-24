import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';
import StackRoutes from './src/routes/stack.routes';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <StackRoutes />
    </Fragment>
  );
};

export default App;
