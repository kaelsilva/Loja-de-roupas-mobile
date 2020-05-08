import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import api from '../../../services/api';
import { Input } from 'react-native-elements';

export default class CustomerDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      customer: {
        id: '',
        cpf: '',
        name: '',
        email: '',
        birthday: '',
        createdAt: '',
        updatedAt: '',
      }
    };
  }

  async componentDidMount(){
    const { id } = this.props.route.params;

    const response = await api.get(`/customers/${id}`);

    this.setState({ customer: response.data });
  }

  formatDate(date){
    let day  = date.getDate().toString(),
    dayF = (day.length == 1) ? '0'+day : day,
    month  = (date.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
    monthF = (month.length == 1) ? '0'+month : month,
    yearF = date.getFullYear();
    return dayF+"/"+monthF+"/"+yearF;
  }

  render(){
    const customer = this.state.customer;
    return(
      <ScrollView>
        <View style={styles.body}>
            <View style={styles.bodyContainer} key={customer.id}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Dados do cliente</Text>
              </View>

              <Text style={styles.bodyContainerText}>Nome:</Text>
              <Input placeholder="Nome" value={customer.name}/>

              <Text style={styles.bodyContainerText}>CPF:</Text>
              <Input placeholder="CPF" value={customer.cpf}/>

              <Text style={styles.bodyContainerText}>E-mail:</Text>
              <Input placeholder="E-mail" value={customer.email}/>
              
              <Text style={styles.bodyContainerText}>Data de nascimento:</Text>
              <Input placeholder="Data de nascimento" value={this.formatDate(new Date(customer.birthday))}/>

              <Text style={styles.bodyContainerText}>Criado em:</Text>
              <Input placeholder="Data de criação" value={this.formatDate(new Date(customer.createdAt))} setEditable="false" />

              <Text style={styles.bodyContainerText}>Atualizado em:</Text>
              <Input placeholder="Data de criação" value={this.formatDate(new Date(customer.updatedAt))} setEditable="false" />
            </View>
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