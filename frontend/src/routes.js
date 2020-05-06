import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import AdminIndex from './pages/AdminIndex';
import Users from './pages/UsersScreen';
import Customers from './pages/CustomersScreen';
import Products from './pages/ProductsScreen';
import Providers from './pages/ProvidersScreen';

import adminHeader from './components/Admin/TitleStyle';
import customerHeader from './components/Customer/TitleStyle';
import usersHeader from './components/Users/TitleStyle';
import productsHeader from './components/Products/TitleStyle';
import providersHeader from './components/Providers/TitleStyle';

export default function Routes(){
  return(
    <Stack.Navigator>
        <Stack.Screen name="AdminIndex" component={AdminIndex} options={adminHeader} />
        <Stack.Screen name="Customers" component={Customers} options={customerHeader} />
        <Stack.Screen name="Users" component={Users} options={usersHeader} />
        <Stack.Screen name='Products' component={Products} options={productsHeader} />
        <Stack.Screen name='Providers' component={Providers} options={providersHeader} />
    </Stack.Navigator>
  );
}