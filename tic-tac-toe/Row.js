import { View, Text, StyleSheet } from 'react-native';

import Cell from './Cell';

export default function Row({ row, rowIndex, dispatch }) {
    
    return (
        <View style={styles.container}>
            {row.map((cell, index) => <Cell key={index} colIndex={index} rowIndex={rowIndex} cell={cell} dispatch={dispatch}/>)}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    }
});