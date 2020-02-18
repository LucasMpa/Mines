import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert} from 'react-native';
import MineField from './src/componentes/MineField'
import Params from './src/Params';
import params from './src/Params';
import Header from './src/componentes/Header'
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './src/Logic'
import Field from './src/componentes/Field';

export default class App extends Component {
  
  
  constructor(props) { 
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }
  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
    }
  }
  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Oh, you lost!')
    } 
    if (won) {
      Alert.alert('Congratulations, you win')
    }

    this.setState({ board, lost, won})
  }

  onSelectedField = (row,column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board,row,column)
    const won = wonGame(board)

    if(won) {
      Alert.alert('Congratulations, you win')
    }
    
    this.setState({ board, won })

  }
  
  
  render() {
    return (
      <View style={styles.container}>
        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)} 
        onNewGame={() => this.setState(this.createState())} />
        <View style={styles.board}></View>
        <MineField board={this.state.board}
          onOpenField={this.onOpenField}
          onSelectedField={this.onSelectedField}/>
        </View>     
    );
  }
}


const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "flex-end",
    },
    board:{
      alignItems: 'center',
      backgroundColor: '#AAA'
    },


});
