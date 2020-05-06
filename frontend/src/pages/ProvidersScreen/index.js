import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import api from '../../services/api';

export default class ProvidersScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      providers: []
    }
  }

  async componentDidMount(){
    const response = await api.get('/providers');

    const providers = response.data;

    this.setState({ providers: providers });
  }

  render(){
    const { providers } = this.state;
    return (
      <ScrollView>
        <View style={styles.body}>
        {providers.map(provider => (
            <View style={styles.bodyContainer} key={provider.id}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Nome: {provider.name}</Text>
              </View>
              <Text style={styles.bodyContainerText}>ID: {provider.id}</Text>
              <Text style={styles.bodyContainerText}>E-mail: {provider.email}</Text>
              <Text style={styles.bodyContainerText}>Telefone: {provider.phone}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Detalhar</Text>
              </TouchableOpacity>
            </View>
        ))}
        </View>
      </ScrollView>
    )
  };
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