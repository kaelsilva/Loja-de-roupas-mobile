import React from 'react';
import { View, Text, Button } from 'react-native';

export default function UsersScreen( { navigation } ){
  function navigateToCustomers(){
    navigation.navigate('Users');
  }

  return (
    <View>
      <Text>Users Screen</Text>
      <Button title="Navegar para clientes" onPress={navigateToCustomers} />
    </View>
  );
}