import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
    } from 'react-native';

const TodoList = ({ todos, toggleTodo }) => {
    console.log("Todo item in todolist = ", todos)
    // console.log("toggleTodo in todolist = ", toggleTodo)
    return(     
         <View style={{ padding: 20 }}>
                { todos.map((todo) => 
                    <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
                        <Text style={{
                            fontSize: 24,
                            textDecorationLine: todo.complete ? 'line-through' : 'none'
                        }}>{todo.text}</Text>
                    </TouchableOpacity>
                )}
            </View>
        )
    
    }

export default TodoList;
