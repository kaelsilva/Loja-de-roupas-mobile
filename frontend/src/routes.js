import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Users from './pages/UserIndex';
import Customers from './pages/CustomersScreen';

import userHeader from './components/User/TitleStyle';
import customerHeader from './components/Customer/TitleStyle';

export default function Routes(){
  return(
    <Stack.Navigator>
        <Stack.Screen name="Users" component={Users} options={userHeader} />
        <Stack.Screen name="Customers" component={Customers} options={customerHeader} />
    </Stack.Navigator>
  );
}