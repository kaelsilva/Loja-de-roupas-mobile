import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import api from '../../../services/api';

export default class CustomersScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      customers: [],
    }
  }

  async componentDidMount(){
    const response = await api.get('/customers');

    const customers = response.data;

    this.setState({ customers: customers });
  }

  formatDate(date){
    let day  = date.getDate().toString(),
    dayF = (day.length == 1) ? '0'+day : day,
    month  = (date.getMonth()+1).toString(),
    monthF = (month.length == 1) ? '0'+month : month,
    yearF = date.getFullYear();
    return dayF+"/"+monthF+"/"+yearF;
  }

  render(){
    const { customers } = this.state;
    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.buttonHeader} onPress={() => this.props.navigation.navigate('CustomerCreation')} >
            <Text style={styles.buttonHeaderText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          {customers.map(customer => (
            <View style={styles.bodyContainer} key={customer.id}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Nome: {customer.name}</Text>
              </View>
            
              <Text style={styles.bodyContainerText}>ID: {customer.id}</Text>
              <Text style={styles.bodyContainerText}>CPF: {customer.cpf}</Text>
              <Text style={styles.bodyContainerText}>E-mail: {customer.email}</Text>
              <Text style={styles.bodyContainerText}>Data de nascimento: {this.formatDate(new Date(customer.birthday))}</Text>
            
              <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('CustomerDetail', { id: customer.id })} >
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