let nextId = 0;
const todosReducer = (state=[], action) => {
    /*
        Actions here are : 
        1) Add todos
        2) Toggle todos status -> either completed or incomplete
    */
    switch(action.type) {
        case 'ADD_TODO':
            console.log("i am add todo = ", action);
            return [
                ...state, {
                    id: nextId++,
                    text: action.text,
                    completed: false
                }
            ]

        case 'TOGGLE_TODO':
            console.log("i am toggle todo = ", action);
            return state.map(todo => 
                (todo.id === action.id) ? { ...todo, completed: !todo.completed} : todo
            )

        default:
            return state
        
    }
}

export default todosReducer;