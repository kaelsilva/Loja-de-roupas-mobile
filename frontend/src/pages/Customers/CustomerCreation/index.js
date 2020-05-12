import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import api from '../../../services/api';
import { Input } from 'react-native-elements';

export default class CustomerCreation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      customer: {
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name, value) {
    this.setState({ customer: { ...this.state.customer,
                                [name]: value }});
  }

  handleSubmit = async event => {
    event.preventDefault();

    const customer = this.state.customer;

    await api.post(`/customers`, customer);
    console.log('Cliente adicionado com sucesso!');
  }

  render(){
    return(
      <ScrollView>
        <View style={styles.body}>
            <View style={styles.bodyContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Dados do cliente</Text>
              </View>

              <Text style={styles.bodyContainerText}>Nome:</Text>
              <Input placeholder="Nome" onChangeText={(txt) => this.handleChange('name', txt)}/>

              <Text style={styles.bodyContainerText}>CPF:</Text>
              <Input placeholder="CPF" onChangeText={(txt) => this.handleChange('cpf', txt)}/>

              <Text style={styles.bodyContainerText}>E-mail:</Text>
              <Input placeholder="E-mail" onChangeText={(txt) => this.handleChange('email', txt)}/>
              
              <Text style={styles.bodyContainerText}>Data de nascimento:</Text>
              <Input placeholder="Data de nascimento" onChangeText={(txt) => this.handleChange('birthday', txt)}/>

              <View style={styles.footerButtonsContainer}>
                <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                  <Text style={styles.buttonText} >Criar</Text>
                </TouchableOpacity>  
              </View>

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
    justifyContent: 'center'
  },
  buttonText: {
    color: '#da552f',
    alignSelf: 'center',
  },
  footerButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: '80%',
    height: '80%',
    paddingBottom: 18,
  },
});