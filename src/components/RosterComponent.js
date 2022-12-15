import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const RosterComponent = (props) => {
    return <View style={styles.container}>

        <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate("Roster")}}>
            <Text style={styles.texts}>Roster</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate("Adventure")}}>
            <Text style={styles.texts}>Adventure</Text>
        </TouchableOpacity>

    </View>
}

const styles=StyleSheet.create({
    button: {     
        width: "50%", 
        height: 30, 
        borderColor: "black", 
        borderRadius: 10, 
        backgroundColor: "darkgrey", 
        justifyContent: "center"
    },
    container:{
        // position: 'absolute',
        margin: 5,
        // bottom: 0,
        // left: 0,
        flexDirection:'row',
        alignContent: 'center',
        //borderColor: "black",

    },
    texts: {
        alignSelf: 'center',
        fontSize: 15,
        alignSelf: 'center',
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    }
});

export default RosterComponent;