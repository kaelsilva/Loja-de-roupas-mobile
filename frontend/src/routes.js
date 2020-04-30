import React from 'react';
import { createStackNavigation } from '@react-navigation/stack';

import Customers from './pages/CustomersScreen';
import Users from './pages/UsersScreen';

export default function Routes(){
  return(
    <Stack.Navigator>
        <Stack.Screen name="Customers" component={Customers} />
        <Stack.Screen name="Users" component={Users} />
      </Stack.Navigator>
  );
}