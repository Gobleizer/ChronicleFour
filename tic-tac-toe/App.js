import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
        newBoard[action.rowIndex][action.colIndex] = state.currentPlayer;
        const nextPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
        return {...state, board: newBoard, currentPlayer: nextPlayer};
      }
      return state;
    }
  }
  return state;
};

function makeInitialState() {
  return { currentPlayer: 'X', board: make2DArray(3,3,null) };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, makeInitialState);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text></Text>
      <Board board={state.board} dispatch={dispatch}/>
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
