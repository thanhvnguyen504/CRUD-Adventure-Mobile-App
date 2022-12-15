import React, {useReducer} from "react";
import createDataContext from "./createDataContext";


const heroReducer = (state, action) => {
    switch(action.type){
        
        case 'add_hero':
            return [...state, { 
                     id: Math.floor(Math.random() * 999999), 
                     name: action.payload.hero.name,
                     level: action.payload.hero.level,
                     power: action.payload.hero.power,
                     maxHealth: action.payload.hero.maxHealth,
                     currentHealth: action.payload.hero.currentHealth,
                     gold: action.payload.hero.gold,
                }
            ]
        case 'delete_hero':
            return state.filter((hero) => {
                return hero.id !== action.payload
            });
        case 'send_hero':
            return state.map((hero) => {
                if (hero.id === action.payload.id) {
                    return action.payload;
                }
                else{
                    return hero;
                }
            })

        case 'edit_hero':
            return state.map((hero) => {
                if (hero.id === action.payload.id) {
                    return action.payload;
                }
                else{
                    return hero;
                }
            })
        default:
            return state;
    }
}



const addHero = (dispatch) => {
    return (hero, callback) => {
        dispatch({ type: 'add_hero', payload: { hero } })
        if(callback){
            callback();
        }
        
    }
}

const sendHero = (dispatch) => {
    return (hero, callback) => {
        dispatch({type: 'send_hero', payload: {hero}})
        if(callback){
            callback();
        }
    }
}

const deleteHero = (dispatch) => {
    return (id) => {
        
        dispatch({ type: 'delete_hero', payload: id  })
    }
}

const editHero = (dispatch) => {
    return (id, name, level, power, gold, maxHealth, currentHealth, callback) => {
        dispatch({type: 'edit_hero', payload: { id: id, name:name,level:level, power:power, gold:gold, maxHealth:maxHealth, currentHealth:currentHealth}})
        if(callback){
            callback();
        }
    }
}

export const {Context, Provider} = createDataContext(heroReducer, 
                                    {addHero: addHero, deleteHero: deleteHero, editHero:editHero, sendHero: sendHero}, 
                                    [ ]
                                );