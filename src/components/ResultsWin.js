import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Adventure from '../screens/Adventure';
import { Context } from '../context/HeroContext';


const ResultsWin = (props) => {
    const {state, addHero, editHero} = useContext(Context);
    
    const hero = state.find((hero) => {
        return props.id === hero.id;
    })
    
    return <View>
        <Text>Piece of cake!! You only lost {hero.maxHealth - hero.currentHealth} health and gained a whopping {hero.gold} gold! {"\n"} </Text>
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
        // position: 'absolute',
        margin: 5,
        flexDirection:'row',
        alignContent: 'center',        

    },
    texts: {
        fontSize: 15,
        alignSelf: 'center'
    },
    name:{
        fontSize: 20,
        alignSelf: 'center'
    },
});

export default ResultsWin;