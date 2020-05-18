import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import AdminIndex from './pages/AdminIndex';
import Users from './pages/Users/UsersScreen';
import Customers from './pages/Customers/CustomersScreen';
import Products from './pages/Products/ProductsScreen';
import Providers from './pages/Providers/ProvidersScreen';
import Sales from './pages/Sales/SalesScreen';

import CustomerCreation from './pages/Customers/CustomerCreation';
import ProductCreation from './pages/Products/ProductCreation';
import ProviderCreation from './pages/Providers/ProviderCreation';
import SaleCreation from './pages/Sales/SaleCreation';

import adminHeader from './components/Admin/TitleStyle';
import customerHeader from './components/Customer/TitleStyle/CustomersIndex';
import usersHeader from './components/Users/TitleStyle';
import productsHeader from './components/Products/TitleStyle/ProductsIndex';
import productDetailHeader from './components/Products/TitleStyle/ProductDetail';
import providersHeader from './components/Providers/TitleStyle/ProvidersIndex';
import customerDetailHeader from './components/Customer/TitleStyle/CustomerDetail';
import customerCreationHeader from './components/Customer/TitleStyle/CustomerCreation';
import productCreationHeader from './components/Products/TitleStyle/ProductCreation';
import providerDetailHeader from './components/Providers/TitleStyle/ProviderDetail';
import salesHeader from './components/Sales/TitleStyle/SalesIndex';
import saleCreationHeader from './components/Sales/TitleStyle/SaleCreation';

import CustomerDetail from './pages/Customers/CustomerDetail';
import ProductDetail from './pages/Products/ProductDetail';
import ProviderDetail from './pages/Providers/ProviderDetail';

export default function Routes(){
  return(
    <Stack.Navigator>
        <Stack.Screen name="AdminIndex" component={AdminIndex} options={adminHeader} />
        <Stack.Screen name="Customers" component={Customers} options={customerHeader} />
        <Stack.Screen name="Users" component={Users} options={usersHeader} />
        <Stack.Screen name='Products' component={Products} options={productsHeader} />
        <Stack.Screen name='Providers' component={Providers} options={providersHeader} />
        <Stack.Screen name='CustomerDetail' component={CustomerDetail} options={customerDetailHeader}/>
        <Stack.Screen name='CustomerCreation' component={CustomerCreation} options={customerCreationHeader}/>
        <Stack.Screen name='ProductDetail' component={ProductDetail} options={productDetailHeader}/>
        <Stack.Screen name='ProductCreation' component={ProductCreation} options={productCreationHeader}/>
        <Stack.Screen name='ProviderDetail' component={ProviderDetail} options={providerDetailHeader}/>
        <Stack.Screen name='ProviderCreation' component={ProviderCreation} options={providerDetailHeader}/>
        <Stack.Screen name='Sales' component={Sales} options={salesHeader} />
        <Stack.Screen name='SaleCreation' component={SaleCreation} options={saleCreationHeader} />
    </Stack.Navigator>
  );
}