import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from './types';

import {navigationRef} from '../services/navigation';

import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import InitialScreen from '../screens/Initial';
import HomeScreen from '../screens/Home';
import SplashScreen from '../screens/Splash';

const Stack = createStackNavigator<RootStackParamList>();

const StackRoutes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* <Stack.Screen name="Initial" component={InitialScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoutes;
