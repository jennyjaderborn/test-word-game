import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


export default class ProfileScreen extends React.Component {

  onPressPay = () => {
    this.props.navigation.navigate('pay')

  }
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.name}>Amanda</Text>
          <Text style={styles.rating}>Rating</Text>
          <Text style={styles.rating}>⭐️ ⭐️ ⭐️ ⭐️ ⭐️ </Text>
          <Text style={styles.rounds}>Antal spelade omgångar: 29</Text>

          <TouchableHighlight style={styles.button} onPress={this.onPressPay}>
                    <Text style={styles.buttonText}>Köp mer mynt!</Text>
                </TouchableHighlight>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(0,21,72,1)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    name: {
        color: 'white',
        fontSize: 25,
    },
    rating: {
        color: 'white',
    },
    rounds: {
        color: 'white',
    },
    button: {
        height: 40,
        backgroundColor: 'white',
        borderColor: '#48BBEC',
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