import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Modal, WebView } from 'react-native';
import axios from 'axios';


export default class PayScreen extends React.Component {

pay = async () => { 
console.log('pay');


} 
 
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.name}>pay screen</Text>

          <TouchableHighlight style={styles.button} onPress={this.pay}>
                    <Text style={styles.buttonText}>Betala</Text>
                </TouchableHighlight>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    name: {
        color: 'black',
        fontSize: 25,
    },
    button: {
        height: 40,
        backgroundColor: 'black',
        borderColor: 'white',
        width: '50%',
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
    color: '#a1a6ad',
    }


});