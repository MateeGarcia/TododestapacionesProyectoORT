import React from 'react';
import { StyleSheet, Text, View, Navigator, TouchableHighlight, ScrollView, Image} from 'react-native';

class appAdmin extends React.Component {

  static navigationOptions = {

    title: "               Turnos",

    headerStyle: {
      backgroundColor: "orange",
    }
  };
  
  /*constructor(props){
    super(props)

    this.state ={

    }
  } */





 componentDidMount() {

} 



    constructor(props) {
      super(props);
      this.state = {};
      this.arrayholder = [];

    }
    componentWillMount() {



    } 


    render(){
      fetch(`http://192.168.0.196:8000/api/Turnos/`)
      .then((response) => response.json())
      .then((responseJson) => {
    global.nuevaLista= responseJson;
    console.log(global.nuevaLista)
      })
      .catch((error) => {
        console.error(error);
      });
    
      this.props.navigation.navigate('appAdmin2');
      return( 

        <View style={styles.turnoGuardado}>
        <Text></Text>

                  </View>
      );
  } 




} 

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    flexDirection: "column",
  },

  turnoGuardado: {

  }
})

module.exports = appAdmin;

        /* 
        array1=[];
                    for (i = 0; i <= responseJson.length-1;i++){
                      array1.push(JSON.stringify(responseJson[i]));
                    } 
                    */