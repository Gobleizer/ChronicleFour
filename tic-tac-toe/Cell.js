import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Cell(props) {
    console.log(props.colIndex," ", props.rowIndex)
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.dispatch({rowIndex: props.rowIndex, colIndex: props.colIndex, type: 'player-move'})}>
            <Text style={styles.text}>{props.cell}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        aspectRatio: 1,
        gap: 20,
        borderRadius: 15,
    },
    text: {
        fontSize: 60,
        color: 'white',
    },
});