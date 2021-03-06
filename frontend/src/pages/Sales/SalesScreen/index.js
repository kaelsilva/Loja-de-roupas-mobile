import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import api from '../../../services/api';

export default class SalesScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sales: [],
      customers: [],
      products: [],
    }
  }

  async componentDidMount(){
    const response_sales = await api.get('/sales');

    const sales = response_sales.data;

    this.setState({ sales: sales });


    const response_customers = await api.get('/customers');

    const customers = response_customers.data;

    this.setState({ customers: customers });


    const response_products = await api.get('/products');

    const products = response_products.data;

    this.setState({ products: products });
  }

  getSaleStatus(status){
    if (!status){
      return 'Pendente';
    }
    return 'Finalizado';
  }

  getCustomerName(id){
    const customers = this.state.customers;
    var customerName;
    customers.map(customer => {
      if (customer.id === id){
        customerName = customer.name;
      }
    });

    return customerName;
  }

  getProductName(id){
    const products = this.state.products;
    var productName;
    products.map(product => {
      if (product.id === id){
        productName = product.name;
      }
    });

    return productName;
  }

  render(){
    const { sales } = this.state;
    return (
      <ScrollView>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.buttonHeader} onPress={() => this.props.navigation.navigate('SaleCreation')} >
            <Text style={styles.buttonHeaderText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
        {sales.map(sale => (
            <View style={styles.bodyContainer} key={sale.id}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>ID da venda: {sale.id}</Text>
              </View>
              <Text style={styles.bodyContainerText}>ID do cliente: {sale.customer_id}</Text>
              <Text style={styles.bodyContainerText}>Cliente: {this.getCustomerName(sale.customer_id)}</Text>
              <Text style={styles.bodyContainerText}>ID do produto: {sale.product_id}</Text>
              <Text style={styles.bodyContainerText}>Produto: {this.getProductName(sale.product_id)}</Text>
              <Text style={styles.bodyContainerText}>Quantidade: {sale.quantity}</Text>
              <Text style={styles.bodyContainerText}>Preço total: R$ {sale.total_price}</Text>
              <Text style={styles.bodyContainerText}>Pagamento: {this.getSaleStatus(sale.is_finished)}</Text>
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SaleDetail', { id: sale.id } )}>
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