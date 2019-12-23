import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render(){
    return (
      <View>
        <View style={styles.head}>
          <Text style={styles.headText}>LOJA DE ROUPAS</Text>
        </View>

        <View style={styles.body}>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Funcionários</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Fornecedores</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Clientes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Produtos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Vendas</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
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
});