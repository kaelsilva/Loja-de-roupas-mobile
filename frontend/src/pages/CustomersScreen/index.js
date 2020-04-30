import React from 'react';
import { View, Text, Button } from 'react-native';

export default function CustomersScreen({ navigation }){
  function navigateToUsers(){
    navigation.navigate('Users')
  }

  return (
    <View>
      <Text>Customers Screen</Text>
      <Button title="Navegar para usuários" onPress={navigateToUsers} />
    </View>
  );
}