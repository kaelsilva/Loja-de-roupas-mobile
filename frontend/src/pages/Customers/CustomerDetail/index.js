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

  render(){
    const customer = this.state.customer;
    return(
      <ScrollView>
        <View style={styles.body}>
            <View style={styles.bodyContainer} key={customer.id}>
              <Input placeholder="Nome" />
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