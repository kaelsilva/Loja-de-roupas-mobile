import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import api from '../../services/api';

export default class UsersScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      products: []
    }
  }

  async componentDidMount(){
    const response = await api.get('/products');

    const products = response.data;

    this.setState({ products: products });
  }

  render(){
    const { products } = this.state;
    return (
      <ScrollView>
        <View style={styles.body}>
        {products.map(product => (
            <View style={styles.bodyContainer} key={product.id}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Nome: {product.name}</Text>
              </View>
              <Text style={styles.bodyContainerText}>Quantidade: {product.quantity}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Detalhar</Text>
              </TouchableOpacity>
            </View>
        ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#eee',
    height: '90%',
    width: '95%',
    alignSelf: 'center',
    padding: 1,
    paddingTop: 80,
    justifyContent: 'center',
  },
  nameContainer: {
    backgroundColor: '#da552f',
    borderRadius: 25,
  },
  nameText: {
    textAlign: 'left',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Trebuchet-MS',
    paddingTop: 10,
    textAlignVertical: 'center',
    marginLeft: 12,
    marginBottom: 10,
  },
  bodyContainer: {
    textAlign: 'center',
    paddingBottom: 20,
    backgroundColor: '#ddd',
    marginTop: 20,
    borderRadius: 25
  },
  bodyContainerText: {
    textAlign: 'left',
    color: '#555',
    fontFamily: 'Trebuchet-MS',
    fontSize: 15,
    marginLeft: 19,
  },
  button: {
    height: 42,
    width: 90,
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: 'transparent',
    marginTop: 10,
    borderColor: '#da552f',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    color: '#da552f',
    alignSelf: 'center',
  },
});