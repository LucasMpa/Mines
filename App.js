import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Params from './src/Params'
import Field from './src/componentes/Field'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando Mines!</Text>
        <Text style={styles.instructions}> Tamanho da grade:
            {Params.getRowsAmount()} x{Params.getColumnsAmount()}</Text> 
      

        <Field />
        <Field opened />
        <Field opened mined />
        <Field opened exploded />
        <Field opened exploded mined />
        <Field flagged/>
        <Field opened nearMines={1}/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={3}/>
        <Field opened nearMines={4}/>
        <Field opened nearMines={5}/>
        <Field opened nearMines={6}/>
        <Field opened nearMines={7}/>
        <Field opened nearMines={8}/>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     //flexWrap: 'wrap',
     //flexDirection: 'row'
     
   },
   welcome: {
     fontWeight: "bold",
     fontSize: 35,
     color: "black"
   },

});
