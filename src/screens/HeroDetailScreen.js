import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import RosterComponent from '../components/RosterComponent';
import { Context } from '../context/HeroContext';

const HeroDetailScreen = (props) =>{
    
    const {state, editHero} = useContext(Context);
    const heroID = props.navigation.getParam("id");
    const hero = state.find((hero) => {
        return heroID === hero.id;
    })

    

    return <View style={styles.FullStyle}>
        
         <Text style={styles.name}>{"\n"}{hero.name}{"\n"}{"\n"}</Text>
         <Text>Level: {hero.level}</Text>
         <Text>Health: {hero.currentHealth}/{hero.maxHealth}</Text>
         <Text>Power: {hero.power}</Text>
         <Text>Gold: {hero.gold} {"\n"}{"\n"}</Text>
        
        <TouchableOpacity style={styles.container} onPress={() => {editHero(heroID, hero.name, hero.level+1,
            hero.power+5, hero.gold-(hero.level*10),
            hero.maxHealth+5, hero.currentHealth)}}>
             
            <Text style={styles.button}>LEVEL UP! ({10*hero.level} GOLD)</Text>    
        </TouchableOpacity>
        <Text>{"\n"}{"\n"}</Text>
         <RosterComponent navigation={props.navigation}/>
    </View>
}


const styles = StyleSheet.create({
    FullStyle:{
        //justifyContent: "space-around",
        flex: 1,
        overflow: 'scroll',
    },
    name:{
        fontSize: 20,
        alignSelf: 'center'
    },
    container:{
        alignContent: 'center',
        //borderWidth: 2,
        backgroundColor: 'blue',
    },
    button: {
        fontSize: 15,
        alignSelf: 'center',
        color: 'white',
    }
});  

export default HeroDetailScreen;  