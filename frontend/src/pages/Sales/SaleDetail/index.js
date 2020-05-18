import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import api from '../../../services/api';
import { Input } from 'react-native-elements';

export default class SaleDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sale: {
      },
      customers: [],
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
    const { id } = this.props.route.params;

    const response = await api.get(`/sales/${id}`);

    this.setState({ sale: response.data });


    const response_products = await api.get('/products');

    const products = response_products.data;

    this.setState({ products: products });


    const response_customers = await api.get('/customers');

    const customers = response_customers.data;

    this.setState({ customers: customers });
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

    const { id } = this.props.route.params;

    api.put(`/sales/${id}`, sale);
    console.log('Venda alterada com sucesso!');
  }

  handleDelete = event => {
    event.preventDefault();

    const { id } = this.props.route.params;

    api.delete(`/sales/${id}`);

    console.log('Venda deletada com sucesso!');
  }

  formatDate(date){
    let day  = date.getDate().toString(),
    dayF = (day.length == 1) ? '0'+day : day,
    month  = (date.getMonth()+1).toString(),
    monthF = (month.length == 1) ? '0'+month : month,
    yearF = date.getFullYear();
    return dayF+"/"+monthF+"/"+yearF;
  }

  getCustomerName(id){
    const customers = this.state.customers;
    let customer_name;
    customers.map(customer => {
      if (Number(customer.id) === Number(id)){
        customer_name = customer.name;
      }
    });

    return customer_name;
  }

  getProductName(id){
    const products = this.state.products;
    let product_name;
    products.map(product => {
      if (Number(product.id) === Number(id)){
        product_name =  product.name;
      }
    });
    console.log(product_name);

    return product_name;
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
              <Input placeholder="ID do cliente" defaultValue={String(sale.customer_id)} onChangeText={(txt) => this.handleChange('customer_id', txt)}/>

              <Text style={styles.bodyContainerText}>ID do produto:</Text>
              <Input placeholder="ID do produto" defaultValue={String(sale.product_id)} onChangeText={(txt) => this.handleChange('product_id', txt)}/>

              <Text style={styles.bodyContainerText}>Quantidade:</Text>
              <Input placeholder="Quantidade" defaultValue={String(sale.quantity)} onChangeText={(txt) => this.handleChange('quantity', txt)}/>

              <Text style={styles.bodyContainerText}>Produto:</Text>
              <Input placeholder="Produto" defaultValue={this.getProductName(sale.product_id)} setEditable="false" />

              <Text style={styles.bodyContainerText}>Cliente:</Text>
              <Input placeholder="Cliente" defaultValue={this.getCustomerName(sale.customer_id)} setEditable="false" />

              <Text style={styles.bodyContainerText}>Criado em:</Text>
              <Input placeholder="Data de criação" value={this.formatDate(new Date(sale.createdAt))} setEditable="false" />

              <Text style={styles.bodyContainerText}>Atualizado em:</Text>
              <Input placeholder="Data de criação" value={this.formatDate(new Date(sale.updatedAt))} setEditable="false" />

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