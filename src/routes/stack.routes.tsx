import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from './types';

import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import InitialScreen from '../screens/Initial';

import {navigationRef} from './rootNavigation';

const Stack = createStackNavigator<RootStackParamList>();

const StackRoutes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Initial" component={InitialScreen} />
        {/* <Stack.Screen name="Initial" component={InitialScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoutes;
