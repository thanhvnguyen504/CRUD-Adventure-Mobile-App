import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Context } from '../context/HeroContext';


const ResultsLose = (props) => {
    const {state, addHero, editHero} = useContext(Context);
    const heroID = props.navigation.getParam("id");
    const hero = state.find((hero) => {
        return heroID === hero.id;
    })
    if (hero.power > hero.level)
    return <View>
        <Text>That was very tough! You lost {hero.maxHealth - hero.currentHealth} and only gained {hero.gold} gold!{"\n"}</Text>
        <Text style={styles.name}>{"\n"}{hero.name}{"\n"}{"\n"}</Text>         
        <Text>Level: {hero.level}</Text>
        <Text>Health: {hero.currentHealth}/{hero.maxHealth}</Text>
        <Text>Power: {hero.power}</Text>
        <Text>Gold: {hero.gold} {"\n"}{"\n"}</Text>

        

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
        flexDirection:'row',
        alignContent: 'center',
        margin: 5,

    },
    texts: {
        fontSize: 15,
        alignSelf: 'center',
        alignItems: 'center',
    },
    name:{
        fontSize: 20,
        alignSelf: 'center'
    },
});

export default ResultsLose;