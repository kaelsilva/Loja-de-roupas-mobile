import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import api from '../../services/api';

export default class CustomersScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      customers: [],
      // id: '',
      // cpf: '',
      // name: '',
      // email: '',
      // birthday: '',
      // createdAt: '',
      // updatedAt: '',
    }
  }

  async componentDidMount(){
    const response = await api.get('/customers');

    const customers = response.data;

    this.setState({ customers: customers });
  }

  // navigateToUsers(){
  //   navigation.navigate('Users')
  // }


  render(){
    const { customers } = this.state;
    return (
      <ScrollView>
        <View style={styles.body}>
        {customers.map(customer => (
            <View style={styles.bodyContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Nome: {customer.name}</Text>
              </View>
              <Text style={styles.bodyContainerText}>ID: {customer.id}</Text>
              <Text style={styles.bodyContainerText}>CPF: {customer.cpf}</Text>
              <Text style={styles.bodyContainerText}>E-mail: {customer.email}</Text>
              <Text style={styles.bodyContainerText}>Data de nascimento: {new Date(customer.birthday).toLocaleDateString()}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Detalhar</Text>
              </TouchableOpacity>
            </View>
        ))}
        </View>
      </ScrollView>
      // <View>
      //   <Text>Customers Screen</Text>
      //   <Button title="Navegar para usuários" onPress={navigateToUsers} />
      // </View>
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
    color: '#ddd',
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