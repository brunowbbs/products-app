import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import InitialScreen from '../screens/Initial';
// import SignInScreen from '../screens/SignIn';

import {RootStackParamList} from './types';
import SignUpScreen from '../screens/SignUp';

const Stack = createStackNavigator<RootStackParamList>();

const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="SignIn" component={SignInScreen} /> */}
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        {/* <Stack.Screen name="Initial" component={InitialScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoutes;
