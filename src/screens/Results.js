import React,{useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, Switch} from 'react-native';
import ResultsLose from '../components/ResultsLose';
import ResultsWin from '../components/ResultsWin';
import RosterComponent from "../components/RosterComponent";
import { Context } from '../context/HeroContext';

const Results = (props) => {

    
    const {state, addHero, editHero} = useContext(Context);
    const heroID = props.navigation.getParam("id");
    const hero = state.find((hero) => {
        return heroID === hero.id;
    })
    const adventure = props.navigation.getParam("challengeLevel");
    const adventurename = props.navigation.getParam("adventurename");
    
    const checkWinner =() => {
        if (adventure>hero.power) {
            editHero(heroID, hero.name, hero.level,
                hero.power, hero.gold+(100),
                hero.maxHealth, hero.currentHealth-(5));
                return false;
        } else{
            editHero(heroID, hero.name, hero.level+1,
                hero.power, hero.gold+(10),
                hero.maxHealth, hero.currentHealth-10);
                return true;
        }
            
    }
    


    return<View style={styles.background}>
        <Text>{"\n"}{"\n"}</Text>
        {/* <TouchableOpacity onPress={()=>editHero()}>
            <Text>Finalize Results</Text>
        </TouchableOpacity> */}
        {checkWinner ? 
            <ResultsWin id={hero.id} adventurename={adventurename} adventure={adventure}/> 
            : <ResultsLose id={hero.id} adventurename={adventurename} adventure={adventure}/>}


        
        <TouchableOpacity style={styles.container} onPress={() => {editHero(heroID, hero.name, hero.level+1,
            hero.power+5, hero.gold-(hero.level*10),
            hero.maxHealth+5, hero.currentHealth)}}>
             

            <Text style={styles.button}>LEVEL UP! ({10*hero.level} GOLD)</Text>    
        </TouchableOpacity>
        <Text>{"\n"}{"\n"}</Text>
        <RosterComponent navigation={props.navigation}/>
    </View>
}

const styles=StyleSheet.create({
    background: {
        flex: 1,
        overflow: 'scroll',
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

export default Results;    