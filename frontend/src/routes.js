import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import AdminIndex from './pages/AdminIndex';
import Users from './pages/UsersScreen';
import Customers from './pages/CustomersScreen';
import Products from './pages/ProductsScreen';

import AdminHeader from './components/Admin/TitleStyle';
import customerHeader from './components/Customer/TitleStyle';
import usersHeader from './components/Users/TitleStyle';
import productsHeader from './components/Products/TitleStyle';

export default function Routes(){
  return(
    <Stack.Navigator>
        <Stack.Screen name="AdminIndex" component={AdminIndex} options={AdminHeader} />
        <Stack.Screen name="Customers" component={Customers} options={customerHeader} />
        <Stack.Screen name="Users" component={Users} options={usersHeader} />
        <Stack.Screen name='Products' component={Products} options={productsHeader} />
    </Stack.Navigator>
  );
}