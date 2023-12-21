import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useReducer } from 'react';

import make2DArray from './make2DArray';
import Board from './Board';

function copyBoard(board) {
  return board.map(row => [...row]);
};

function isValidMove(board, rowIndex, colIndex) {
  isValid = false;
  if (board[rowIndex][colIndex] == null) {
    isValid = true;
  }
  return isValid;
}

function reducer(state, action) {
  switch (action.type) {
    case 'player-move': {
      if (isValidMove(state.board, action.rowIndex, action.colIndex)) {
        const newBoard = copyBoard(state.board);
        newBoard[action.rowIndex][action.colIndex] = state.moveCount % 2 === 0 ? 'X' : 'O';
        return {...state, board: newBoard, moveCount: state.moveCount + 1 };
      }
      return state;
    }
    case 'reset-game': {
      return makeInitialState();
    }
  }
  return state;
};

function makeInitialState() {
  return { board: make2DArray(3,3,null), moveCount: 0 };
}

export default function App() {  //Array Destructuring
  const [state, dispatch] = useReducer(reducer, undefined, makeInitialState);
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text></Text>
      <Board board={state.board} dispatch={dispatch}/>
      {
        state.moveCount === 9 ? <Button title='Reset Game' onPress={() => dispatch({type: 'reset-game'})}></Button> : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
