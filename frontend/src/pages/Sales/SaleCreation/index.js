import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import api from '../../../services/api';
import { Input } from 'react-native-elements';

export default class SaleCreation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sale: {
      },
      products: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name, value) {
    this.setState({ sale: { ...this.state.sale,
                                [name]: value }});
  }

  async componentDidMount(){
    const response = await api.get('/products');

    const products = response.data;

    this.setState({ products: products });
  }

  handleSubmit = event => {
    event.preventDefault();

    const sale = this.state.sale;
    const products = this.state.products;

    var product_wanted;
    products.map(product => {
      if (product.id === Number(sale.product_id)){
        product_wanted = product;
      }
    });

    const total_price = sale.quantity * product_wanted.price;

    this.state.sale.total_price = total_price;
    this.state.sale.is_finished = 0;

    api.post('/sales', sale);
    console.log('Venda adicionada com sucesso!');
  }

  render(){
    const sale = this.state.sale;
    return(
      <ScrollView>
        <View style={styles.body}>
            <View style={styles.bodyContainer} key={sale.id}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Dados da venda</Text>
              </View>

              <Text style={styles.bodyContainerText}>ID do cliente:</Text>
              <Input placeholder="ID do cliente" defaultValue={''} onChangeText={(txt) => this.handleChange('customer_id', txt)}/>

              <Text style={styles.bodyContainerText}>ID do produto:</Text>
              <Input placeholder="ID do produto" defaultValue={''} onChangeText={(txt) => this.handleChange('product_id', txt)}/>

              <Text style={styles.bodyContainerText}>Quantidade:</Text>
              <Input placeholder="Quantidade" defaultValue={''} onChangeText={(txt) => this.handleChange('quantity', txt)}/>
              
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