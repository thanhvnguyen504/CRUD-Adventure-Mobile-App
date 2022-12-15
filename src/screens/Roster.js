import React, {useContext} from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import RosterComponent from '../components/RosterComponent';
import { Context } from '../context/HeroContext';

const Roster = (props) =>{
    
    const {addHero, state} = useContext(Context);

    const generateNewHero = () =>{
        let hero ={};
        hero.level = 1;

        let firstNameList = ["Mark", "Sally", "Bob", "Daniel", "David", "Kevin", "Jane", "Sam", "Jill", "Kelly", 
            "Betty", "Greg", "Jeff", "Ben", "Jay", "Ted", "Matt", "Lisa" ];

        let lastNameList = ["Fitzimmons", "Smith", "Thrillseeker", "Bonwcrusher", "Mindblaster", "Knucklebuster", "Kite-flyer" ];

        hero.name = firstNameList[Math.floor(Math.random() * firstNameList.length)] + " " +
            lastNameList[Math.floor(Math.random() * lastNameList.length)]

        hero.gold = 100;
        hero.power = Math.floor(Math.random() * 5) + 1;
        hero.maxHealth = Math.floor(Math.random() * 7) + 3;
        hero.currentHealth = hero.maxHealth;
        return hero;
    }


    return(<View style={styles.background}>
         <Text style={styles.Title}>Roster</Text> 
         <FlatList 
            data={state}
            keyExtractor={(hero) => {return hero.id}}
            renderItem={({item}) => {return <TouchableOpacity 
            onPress={()=>{props.navigation.navigate("Detail", {id: item.id})}}>
                <View style={styles.RosterList}>
                    <Text style={styles.character}>Name: {item.name} Level: {item.level} Health: {item.currentHealth}/{item.maxHealth} Power: {item.power} --- Gold: {item.gold}</Text>
                </View>
            </TouchableOpacity>
            }}
        />
         <Button title="Add New Hero" onPress={() => {
            addHero(generateNewHero()) 
            }}/>

        <RosterComponent navigation={props.navigation}/>

    </View>
       
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        overflow: 'scroll',
    },
    RosterList:{
        borderWidth:1,
        margin:2
    },
    character:{
        //alignSelf: 'left'
    },
    Title: {
        fontSize: 20, 
        alignSelf: "center"
    }
});

export default Roster;