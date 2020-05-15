import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import api from '../../../services/api';
import { Input } from 'react-native-elements';

export default class ProductDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      product: {
      },
      providers: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getProvidersName = this.getProvidersName.bind(this);
  }

  handleChange(name, value) {
    this.setState({ product: { ...this.state.product,
                                [name]: value }});
  }

  async componentDidMount(){
    const { id } = this.props.route.params;

    const response = await api.get(`/products/${id}`);

    this.setState({ product: response.data });

    const response_providers = await api.get('/providers');

    const providers = response_providers.data;

    this.setState({ providers: providers });
  }

  handleSubmit = event => {
    event.preventDefault();

    const product = this.state.product;

    const { id } = this.props.route.params;

    api.put(`/products/${id}`, product);
    console.log('Produto alterado com sucesso!');
  }

  handleDelete = event => {
    event.preventDefault();

    const { id } = this.props.route.params;

    api.delete(`/products/${id}`);

    console.log('Produto deletado com sucesso!');
  }

  getProvidersName(id){
    const providers = this.state.providers;
    var providerName;
    providers.map(provider => {
      if (provider.id === id){
        providerName = provider.name;
      }
    });
    return providerName;
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
    const product = this.state.product;
    return(
      <ScrollView>
        <View style={styles.body}>
            <View style={styles.bodyContainer} key={product.id}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Dados do produto</Text>
              </View>

              <Text style={styles.bodyContainerText}>Nome:</Text>
              <Input placeholder="Nome" defaultValue={product.name} onChangeText={(txt) => this.handleChange('name', txt)}/>

              <Text style={styles.bodyContainerText}>Quantidade disponível:</Text>
              <Input placeholder="Quantidade" defaultValue={String(product.quantity)} onChangeText={(txt) => this.handleChange('quantity', txt)}/>

              <Text style={styles.bodyContainerText}>Preço unitário:</Text>
              <Input placeholder="Preço" defaultValue={String(product.price)} onChangeText={(txt) => this.handleChange('price', txt)}/>
              
              <Text style={styles.bodyContainerText}>Nome do fornecedor:</Text>
              <Input placeholder="Fornecedor" value={this.getProvidersName(product.providers_id)} setEditable="false"/>

              <Text style={styles.bodyContainerText}>Criado em:</Text>
              <Input placeholder="Data de criação" value={this.formatDate(new Date(product.createdAt))} setEditable="false" />

              <Text style={styles.bodyContainerText}>Atualizado em:</Text>
              <Input placeholder="Data de criação" value={this.formatDate(new Date(product.updatedAt))} setEditable="false" />

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