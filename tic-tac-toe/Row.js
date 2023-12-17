import { View, Text, StyleSheet } from 'react-native';

import Cell from './Cell';

export default function Row(props) {
    
    return (
        <View style={styles.container}>
            {props.row.map((cell, index) => <Cell key={index+'Cell'} cell={cell}/>)}
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