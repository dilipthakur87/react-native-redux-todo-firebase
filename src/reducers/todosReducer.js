import {ADD_TODO, TOGGLE_TODO, RETRIEVE_TODO, DELETE_TODO, UPDATE_TODO} from '../actions/actionTypes';

const todosReducer = (state=[], action) => {
    /*
        Actions here are : 
        1) Add todos
        2) Toggle todos status -> either completed or incomplete
        3) Retrieve todos
        4) Updata todo
    */
    switch(action.type) {
        case ADD_TODO:
            console.log("I am called = ", action)
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    complete: action.complete
                }
            ]

        case RETRIEVE_TODO:
            console.log("retrived todos = ", action.todos)
            return action.todos

        case UPDATE_TODO:
            return state.map(todo => 
                (todo.id === action.id) ? { ...todo, text: action.text} : todo
            )

        case DELETE_TODO:
            return state.filter(todo => {if(todo.id !== action.id) return true} ) 

        case TOGGLE_TODO:
            return state.map(todo => 
                (todo.id === action.id) ? { ...todo, complete: !todo.complete} : todo
            )

        default:
            return state
        
    }
}

export default todosReducer;