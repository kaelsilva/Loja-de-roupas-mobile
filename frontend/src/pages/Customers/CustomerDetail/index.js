import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import api from '../../../services/api';
import { Input } from 'react-native-elements';

export default class CustomerDetail extends React.Component {
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

  async componentDidMount(){
    const { id } = this.props.route.params;

    const response = await api.get(`/customers/${id}`);

    this.setState({ customer: response.data });
  }

  handleSubmit = event => {
    event.preventDefault();

    const customer = this.state.customer;

    const { id } = this.props.route.params;

    api.put(`/customers/${id}`, customer);
    console.log('Cliente alterado com sucesso!');
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
    const customer = this.state.customer;
    return(
      <ScrollView>
        <View style={styles.body}>
            <View style={styles.bodyContainer} key={customer.id}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Dados do cliente</Text>
              </View>

              <Text style={styles.bodyContainerText}>Nome:</Text>
              <Input placeholder="Nome" defaultValue={customer.name} onChangeText={(txt) => this.handleChange('name', txt)}/>

              <Text style={styles.bodyContainerText}>CPF:</Text>
              <Input placeholder="CPF" defaultValue={customer.cpf} onChangeText={(txt) => this.handleChange('cpf', txt)}/>

              <Text style={styles.bodyContainerText}>E-mail:</Text>
              <Input placeholder="E-mail" defaultValue={customer.email} onChangeText={(txt) => this.handleChange('email', txt)}/>
              
              <Text style={styles.bodyContainerText}>Data de nascimento:</Text>
              <Input placeholder="Data de nascimento" defaultValue={this.formatDate(new Date(customer.birthday))} onChangeText={(txt) => this.handleChange('birthday', txt)}/>

              <Text style={styles.bodyContainerText}>Criado em:</Text>
              <Input placeholder="Data de criação" value={this.formatDate(new Date(customer.createdAt))} setEditable="false" />

              <Text style={styles.bodyContainerText}>Atualizado em:</Text>
              <Input placeholder="Data de criação" value={this.formatDate(new Date(customer.updatedAt))} setEditable="false" />

              <View style={styles.footerButtonsContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                  <Text style={styles.buttonText} >Alterar</Text>
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
  },
});