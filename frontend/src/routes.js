import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import AdminIndex from './pages/AdminIndex';
import Users from './pages/Users/UsersScreen';
import Customers from './pages/Customers/CustomersScreen';
import Products from './pages/Products/ProductsScreen';
import Providers from './pages/Providers/ProvidersScreen';
import CustomerCreation from './pages/Customers/CustomerCreation';


import adminHeader from './components/Admin/TitleStyle';
import customerHeader from './components/Customer/TitleStyle/CustomersIndex';
import usersHeader from './components/Users/TitleStyle';
import productsHeader from './components/Products/TitleStyle';
import providersHeader from './components/Providers/TitleStyle';
import customerDetailHeader from './components/Customer/TitleStyle/CustomerDetail';
import customerCreationHeader from './components/Customer/TitleStyle/CustomerCreation';

import customerDetail from './pages/Customers/CustomerDetail';

export default function Routes(){
  return(
    <Stack.Navigator>
        <Stack.Screen name="AdminIndex" component={AdminIndex} options={adminHeader} />
        <Stack.Screen name="Customers" component={Customers} options={customerHeader} />
        <Stack.Screen name="Users" component={Users} options={usersHeader} />
        <Stack.Screen name='Products' component={Products} options={productsHeader} />
        <Stack.Screen name='Providers' component={Providers} options={providersHeader} />
        <Stack.Screen name='CustomerDetail' component={customerDetail} options={customerDetailHeader}/>
        <Stack.Screen name='CustomerCreation' component={CustomerCreation} options={customerCreationHeader}/>
    </Stack.Navigator>
  );
}