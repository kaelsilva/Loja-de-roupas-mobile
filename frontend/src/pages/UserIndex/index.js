import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function UserIndex( { navigation } ){
  function navigateToCustomers(){
    navigation.navigate('Customers');
  }

  return (
    <View style={styles.body}>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Funcionários</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Fornecedores</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateToCustomers}>
          <Text style={styles.buttonText}>Clientes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Vendas</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#da552f',
    justifyContent: 'center',
    height: '10%',
  },
  headText: {
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  body: {
    backgroundColor: '#eeeeee',
    height: '90%',
    width: '95%',
    alignSelf: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  button: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: 'transparent',
    marginTop: 10,
    borderColor: '#da552f',
    display: 'flex',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#da552f',
    alignSelf: 'center',
  },
  footer: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
