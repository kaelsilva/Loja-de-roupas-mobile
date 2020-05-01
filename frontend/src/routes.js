import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


import Users from './pages/UsersScreen';
import Customers from './pages/CustomersScreen';

export default function Routes(){
  return(
    <Stack.Navigator>
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="Customers" component={Customers} />
    </Stack.Navigator>
  );
}