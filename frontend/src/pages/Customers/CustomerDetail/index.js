import React from 'react';

export default class Customer extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     customer: {
  //       id: '',
  //       cpf: '',
  //       name: '',
  //       email: '',
  //       birthday: '',
  //       createdAt: '',
  //       updatedAt: '',
  //     }
  //   };
  // }

  // async componentDidMount(){
  //   const { id } = this.props.match.params;

  //   const response = await api.get(`/customers/${id}`);

  //   this.setState({ funcionario: response.data });
  // }

  render(){
    return(
      <View>
        <Text>Tela de cliente individual</Text>
      </View>
    );
  }
}