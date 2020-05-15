import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import api from '../../../services/api';
import { Input } from 'react-native-elements';

export default class ProviderCreation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      provider: {
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name, value) {
    this.setState({ provider: { ...this.state.provider,
                                [name]: value }});
  }

  handleSubmit = event => {
    event.preventDefault();

    const provider = this.state.provider;

    api.post('/providers', provider);
    console.log('Fornecedor adicionado com sucesso!');
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
              <Input placeholder="Nome" defaultValue={''} onChangeText={(txt) => this.handleChange('name', txt)}/>

              <Text style={styles.bodyContainerText}>E-mail:</Text>
              <Input placeholder="E-mail" defaultValue={''} onChangeText={(txt) => this.handleChange('email', txt)}/>

              <Text style={styles.bodyContainerText}>Telefone:</Text>
              <Input placeholder="Telefone" defaultValue={''} onChangeText={(txt) => this.handleChange('phone', txt)}/>
              
              <Text style={styles.bodyContainerText}>CNPJ:</Text>
              <Input placeholder="CNPJ" defaultValue={''} onChangeText={(txt) => this.handleChange('cnpj', txt)}/>

              <Text style={styles.bodyContainerText}>Endereço:</Text>
              <Input placeholder="Endereço" defaultValue={''} onChangeText={(txt) => this.handleChange('address', txt)}/>

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