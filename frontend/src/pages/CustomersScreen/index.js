import React from 'react';
import { View, Text, Button } from 'react-native';
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
      <View>
        {customers.map(customer => (
            <View>
              <Text>Nome do cliente: {customer.name}</Text>
              <Text>ID: {customer.id}</Text>
              <Text>CPF: {customer.cpf}</Text>
              <Text>E-mail: {customer.email}</Text>
              {/* <Text>Data de nascimento: {customer.birthday}</Text> */}
            </View>
        ))}
      </View>
      // <View>
      //   <Text>Customers Screen</Text>
      //   <Button title="Navegar para usuários" onPress={navigateToUsers} />
      // </View>
    )
  };
}