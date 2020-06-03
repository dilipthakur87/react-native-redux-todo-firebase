import {ADD_TODO, TOGGLE_TODO, RETRIEVE_TODO} from './actionTypes';
import { dbRef } from '../config';

// export const addTodo = (text) => ({
//     type: ADD_TODO,
//     id: Date.now(),
//     text
// })

export const retrieveTodos = ( todos ) => ({
    type: RETRIEVE_TODO,
    todos
})

export const deleteTodo = ( id ) => async dispatch => {
    console.log("Delete = ", id)
    try{
        dbRef.ref('/todos').child(id).remove().then(() => {
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

// export const toggleTodo = (id) => ({
//     type: TOGGLE_TODO,
//     id
// })