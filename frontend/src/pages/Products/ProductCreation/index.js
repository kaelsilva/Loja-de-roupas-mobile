import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import api from '../../../services/api';
import { Input } from 'react-native-elements';

export default class ProductCreation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      product: {
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name, value) {
    this.setState({ product: { ...this.state.product,
                                [name]: value }});
  }

  handleSubmit = event => {
    event.preventDefault();

    const product = this.state.product;

    api.post('/products', product);
    console.log('Produto adicionado com sucesso!');
  }

  render(){
    const product = this.state.product;
    return(
      <ScrollView>
        <View style={styles.body}>
            <View style={styles.bodyContainer} key={product.id}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Dados do produto</Text>
              </View>

              <Text style={styles.bodyContainerText}>Nome:</Text>
              <Input placeholder="Nome" defaultValue={''} onChangeText={(txt) => this.handleChange('name', txt)}/>

              <Text style={styles.bodyContainerText}>Quantidade disponível:</Text>
              <Input placeholder="Quantidade" defaultValue={''} onChangeText={(txt) => this.handleChange('quantity', txt)}/>

              <Text style={styles.bodyContainerText}>Preço unitário:</Text>
              <Input placeholder="Preço" defaultValue={''} onChangeText={(txt) => this.handleChange('price', txt)}/>
              
              <Text style={styles.bodyContainerText}>ID do fornecedor:</Text>
              <Input placeholder="ID" defaultValue={''} onChangeText={(txt) => this.handleChange('providers_id', txt)}/>

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