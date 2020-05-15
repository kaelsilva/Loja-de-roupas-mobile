import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import api from '../../../services/api';
import { Input } from 'react-native-elements';

export default class ProviderDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      provider: {
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name, value) {
    this.setState({ provider: { ...this.state.provider,
                                [name]: value }});
  }

  async componentDidMount(){
    const { id } = this.props.route.params;

    const response = await api.get(`/providers/${id}`);

    this.setState({ provider: response.data });
  }

  handleSubmit = event => {
    event.preventDefault();

    const provider = this.state.provider;

    const { id } = this.props.route.params;

    api.put(`/providers/${id}`, provider);
    console.log('Fornecedor alterado com sucesso!');
  }

  handleDelete = event => {
    event.preventDefault();

    const { id } = this.props.route.params;

    api.delete(`/providers/${id}`);

    console.log('Fornecedor deletado com sucesso!');
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
    const provider = this.state.provider;
    return(
      <ScrollView>
        <View style={styles.body}>
            <View style={styles.bodyContainer} key={provider.id}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Dados do fornecedor</Text>
              </View>

              <Text style={styles.bodyContainerText}>Nome:</Text>
              <Input placeholder="Nome" defaultValue={provider.name} onChangeText={(txt) => this.handleChange('name', txt)}/>

              <Text style={styles.bodyContainerText}>CNPJ:</Text>
              <Input placeholder="CNPJ" defaultValue={provider.cnpj} onChangeText={(txt) => this.handleChange('cnpj', txt)}/>

              <Text style={styles.bodyContainerText}>E-mail:</Text>
              <Input placeholder="E-mail" defaultValue={provider.email} onChangeText={(txt) => this.handleChange('email', txt)}/>
              
              <Text style={styles.bodyContainerText}>Telefone:</Text>
              <Input placeholder="Telefone" value={provider.phone} onChangeText={(txt) => this.handleChange('phone', txt)} />

              <Text style={styles.bodyContainerText}>Endereço:</Text>
              <Input placeholder="Endereço" value={provider.address} onChangeText={(txt) => this.handleChange('address', txt)} />

              <Text style={styles.bodyContainerText}>Criado em:</Text>
              <Input placeholder="Data de criação" value={this.formatDate(new Date(provider.createdAt))} setEditable="false" />

              <Text style={styles.bodyContainerText}>Atualizado em:</Text>
              <Input placeholder="Data de criação" value={this.formatDate(new Date(provider.updatedAt))} setEditable="false" />

              <View style={styles.footerButtonsContainer}>
                <TouchableOpacity style={styles.button} onPress={this.handleDelete}>
                  <Text style={styles.buttonText} >Deletar</Text>
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
    paddingBottom: 18,
  },
});