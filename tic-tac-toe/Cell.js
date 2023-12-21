import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Cell({ cell, rowIndex, colIndex, dispatch }) {
    const Container = cell == null ? TouchableOpacity : View;
    const onPress = cell == null ? () => dispatch({ rowIndex, colIndex, type: 'player-move' }) : undefined;
    return (
        <Container style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{cell}</Text>
        </Container>
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