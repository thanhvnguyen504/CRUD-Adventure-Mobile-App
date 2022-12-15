import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import RosterComponent from "../components/RosterComponent";
import { Context } from '../context/HeroContext';

const Adventure = (props) => {

    const generateAdventure = () => {
        let adventure = {};

        const adjectives = ["spooky", 
            "scary", "dire", "awful", "miserable", "dangerous", "deadly", "stinky", 
            "tasteless", "grim", "irritating", "tedious", "annoying", "hopeless", "mysterious"]
        const locations = ["caves", "forest", "depths", "grove", "fields", "desert", "tundra", "university", 
            "back alley", "animal den"]
        const qualifiers = ["no hope", "no return", "death", "hatred", "evil", "sorrow", "heartbreak" ]
        
        adventure.challengeLevel = Math.floor(Math.random() * 10) +1;

        adventure.name = "The " + adjectives[Math.floor(Math.random() * adjectives.length)] + " " +
            locations[Math.floor(Math.random() * locations.length)] + " of " +
            qualifiers[Math.floor(Math.random() * qualifiers.length)]

        return adventure;
        }

        const {state, editHero} = useContext(Context);

        const adventure = generateAdventure();
        const checkWinner = () => {
            if (adventure>hero.power) {
                editHero(heroID, hero.name, hero.level,
                    hero.power, hero.gold+100,
                    hero.maxHealth, hero.currentHealth-5);
                    return false;
            } else{
                editHero(heroID, hero.name, hero.level+1,
                    hero.power, hero.gold+10,
                    hero.maxHealth, hero.currentHealth-10);
                    return true;
            }
                
        }
        

        return(<View style={styles.background}>
             <Text style={styles.Title}>Current Adventure</Text> 
            <Text style={styles.adventureTitle}>{adventure.name}</Text>
            <Text style={styles.adventureChallenge}>Challenge Level:{adventure.challengeLevel}</Text>

            <Text>Who do you send?</Text>
             <FlatList 
                data={state}
                keyExtractor={(hero) => {return hero.id}}
                renderItem={({item}) => {return <TouchableOpacity 
                onPress={()=>{props.navigation.navigate("Results", {id: item.id, challengeLevel: adventure.challengeLevel, adventurename: adventure.name})}}>
                    <View style={styles.RosterList}>
                        <Text style={styles.character}>Name: {item.name} Level: {item.level} Health: {item.currentHealth}/{item.maxHealth} Power: {item.power} --- Gold: {item.gold}</Text>
                    </View>
                    </TouchableOpacity>
                    }}
            />
        
        <RosterComponent navigation={props.navigation}/>
    </View>
        )}

const styles=StyleSheet.create({
    background: {
        flex: 1,
        overflow: 'scroll',
    },
    RosterList:{
        borderWidth:1,
        margin: 2

    },
    adventureTitle:{
        fontSize: 30,
        borderWidth:2,
        alignSelf:'center'

    },
    adventureChallenge:{
        fontSize: 20,
        alignSelf:'center'
    },
    character:{
        //alignSelf: 'center'
    },
    Title: {
        fontSize: 20, 
        alignSelf: "center"
    }
});

export default Adventure;