import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import api from '../../../services/api';

export default class UsersScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      products: [],
      providers: [],
    }
  }

  async componentDidMount(){
    const response_products = await api.get('/products');

    const products = response_products.data;

    this.setState({ products: products });


    const response_providers = await api.get('/providers');

    const providers = response_providers.data;

    this.setState({ providers: providers });
  }

  getProvidersName(id){
    const providers = this.state.providers;
    const provider = providers.map(provider => {
      if (provider.id === id){
        return provider.name;
      }
    });
    return provider;
  }

  render(){
    const { products } = this.state;
    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.buttonHeader} onPress={() => this.props.navigation.navigate('ProductCreation')} >
            <Text style={styles.buttonHeaderText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
        {products.map(product => (
            <View style={styles.bodyContainer} key={product.id}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Nome: {product.name}</Text>
              </View>
              <Text style={styles.bodyContainerText}>Quantidade: {product.quantity}</Text>
              <Text style={styles.bodyContainerText}>Preço (un.): R$ {product.price.toFixed(2)}</Text>
              <Text style={styles.bodyContainerText}>Fornecedor: {this.getProvidersName(product.providers_id)}</Text>
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
  headerContainer: {
    height: 60,
  },
  buttonHeader: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: '#da552f',
    marginTop: 10,
    marginEnd: 10,
    borderColor: '#ddd',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  buttonHeaderText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  body: {
    backgroundColor: '#eee',
    height: '90%',
    width: '95%',
    alignSelf: 'center',
    paddingTop: 20,
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