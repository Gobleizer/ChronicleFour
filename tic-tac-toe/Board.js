import { View, Text, StyleSheet } from 'react-native';

import Row from './Row';

export default function Board(props) {
    
    return (
        <View style={styles.container}>
            {
                props.board.map((row, index) => <Row key={index+'row'} row={row} />)
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "cornflowerblue",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        padding: 20,
        borderRadius: 15,
    }
});