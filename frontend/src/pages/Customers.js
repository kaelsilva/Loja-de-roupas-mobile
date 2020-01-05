import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default class Customers extends Component {
    constructor(props){
        super(props);
        this.state = {
            customer: {},
            nome: '',
            dataDeNascimento: '',
            cpf: '',
            sexo: '',
        }
    }

    render(){
        return (
            <View>
                <Text>Teste</Text>
            </View>
        );
    }
}