import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const CTbutton = (props) => {
    return (
        <TouchableOpacity 
        style={styles.button} 
        onPress={props.handlePress}>

        <Text style={styles.text}>
            {props.title}
        </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: 300,
        backgroundColor: "#663300",
        padding: 15,
        marginLeft: 70,
        marginRight: 70,
        marginTop: 50,
    },
    text: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
    },
})

export default CTbutton