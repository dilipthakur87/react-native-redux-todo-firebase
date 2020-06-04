import {ADD_TODO, TOGGLE_TODO, RETRIEVE_TODO, DELETE_TODO, UPDATE_TODO} from './actionTypes';
import { dbRef } from '../config';

export const retrieveTodos = () => async dispatch => {
    try{
        await dbRef.ref('/todos').once('value', snapshot => {
            let data = snapshot.val();
            if(data) {
              let items = Object.values(data);
              console.log("items = ", items)
              dispatch({
                  type: RETRIEVE_TODO,
                  todos: items
              })
            } 
        });
    }catch(err) {
        alert(`Error retrieving Todos.`)
        console.log(`Error retrieving Todos. Error Message: ${err}`);
    }
}

export const deleteTodo = ( id ) => async dispatch => {
    console.log("Delete = ", id)
    try{
        dbRef.ref('/todos/' +id).remove().then(() => {
            dispatch({
                type: DELETE_TODO,
                id: id
            })
        }).catch((err) => {
            alert(`Error deleting Todo.`)
            console.log(`Error deleting Todo. Error Message: ${err}`);
        })

    } catch(err){
        alert(`Error deleting Todo.`)
        console.log(`Error deleting Todo. Error Message: ${err}`);
    }
}

export const addTodo = ( text ) => async dispatch =>{
    console.log("actions/index = ", text)
    let nextID = Date.now();
    try{
        dbRef.ref('/todos').child(nextID).set({
            id: nextID,
            text: text,
            complete: false
        }).then(() => {
            dispatch({
                type: ADD_TODO,
                id: nextID,
                complete: false,
                text
            })
        }).catch((err) => {
            alert(`Error adding Todo.`)
            console.log(`Error adding Todo. Error Message: ${err}`);
        })

    } catch(err){
        alert(`Error adding Todo.`)
        console.log(`Error adding Todo. Error Message: ${err}`);
    }
}

export const updateTodo = ( text, id ) => async dispatch => {
    try{

        dbRef.ref('/todos/' +id).update({ text: text }).then((val) => {
            console.log("updated success = ", val)
            dispatch({
                type: UPDATE_TODO,
                text: text,
                id: id
            })
        }).catch((err) => {
            alert(`Error updating todo`)
            console.log(`Error updating todo. Error Message: ${err}`);
        })
        
    }catch(err){
        alert(`Error updating todo`)
        console.log(`Error updating todo. Error Message: ${err}`);
    }
}

export const toggleTodo = (id) => async dispatch => {
    try{

        dbRef.ref('/todos/').child(id).once("value", (snapshot) => {
            try{
                dbRef.ref().child('/todos/' +id).update({complete: !snapshot.val().complete}).then(() => {
                    dispatch({
                        type: TOGGLE_TODO,
                        id
                    })
                })
            }catch(err){
                alert(`Error marking completed.`)
                console.log(`Error marking completed. Error Message: ${err}`);
            }
            
        })
        
    }catch(err){
        alert(`Error marking completed.`)
        console.log(`Error marking completed. Error Message: ${err}`);
    }
}
