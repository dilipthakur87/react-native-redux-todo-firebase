const todosReducer = (state=[], action) => {
    /*
        Actions here are : 
        1) Add todos
        2) Toggle todos status -> either completed or incomplete
    */
    switch(action.type) {
        case 'ADD_TODO':
            console.log("I am called = ", action)
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    complete: false
                }
            ]

        case 'RETRIEVE_TODO':
            console.log("retrived todos = ", action.todos)
            return action.todos

        case 'TOGGLE_TODO':
            return state.map(todo => 
                (todo.id === action.id) ? { ...todo, complete: !todo.complete} : { ...todo, complete: todo.complete}
            )

        default:
            return state
        
    }
}

export default todosReducer;