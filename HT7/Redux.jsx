import React from 'react';
import { Reducer, createStore } from 'redux';

export default function ReduxTest() {
    const addHotel = (hotel)=>({type:"ADD", payload:{hotel}})
    const removeHotel = (id)=>({type:"REMOVE", payload:{id}})
    const changeHotel = (id,changedRooms)=>({type:"CHANGE", payload:{id,changedRooms}})
    
    let initialState = {hotels:[]}
    let reducerHotel = ( state = initialState, action) =>{
      switch (action.type){
        case "ADD":{
          const hotel = action.payload.hotel;  
          return {...state,hotels:[...state.hotels, hotel]};
        }
        case "REMOVE":{
          const id = action.payload.id;
          return {...state,hotels:[...state.hotels.filter((h) => h.id!== id)]};
        }
        case "CHANGE":{
        const changedRooms = action.payload.changedRooms;
        const id = action.payload.id;
        return {...state,hotels:[...state.hotels.map((h) => h.id == id ? {...h, roomsCount: changedRooms} : h)]}
        }
        default:
          return state;
      }
    }
    const hotel1 = {id:"1",name:"hotel1",roomsCount:100, address:"Minsk"};
    const hotel2 = {id:"2",name:"hotel2",roomsCount:200, address:"Kiev"};
    const hotel3 = {id:"3",name:"hotel3",roomsCount:300, address:"Moscov"};
    const hotel4 = {id:"4",name:"hotel4",roomsCount:700, address:"Egypt"};
    const hotel5 = {id:"5",name:"hotel5",roomsCount:500, address:"Montenegro"};
    
    let store = createStore(reducerHotel);
    console.log("Store",store.getState());
    store.dispatch(addHotel(hotel1));
    store.dispatch(addHotel(hotel2));
    store.dispatch(addHotel(hotel3));
    store.dispatch(addHotel(hotel4));
    store.dispatch(addHotel(hotel5));
    console.log("Add to store",store.getState());
    store.dispatch(removeHotel("2"));
    console.log("Remove from store",store.getState());
    store.dispatch(changeHotel("1",777));
    console.log("Change store",store.getState());
}