import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions
    } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { deleteTodo } from '../actions';

const width = Dimensions.get('window').width;

const TodoList = ({ todos, toggleTodo }) => {
    console.log("Todo item in todolist = ", todos)
    // console.log("toggleTodo in todolist = ", toggleTodo)
    return(   
        <ScrollView style={{ width:'100%', height:'90%', marginTop: 10 }}>
                { todos.map((todo) => 
                    <View style={styles.listContainer} key={todo.id}>
                        <View style={{ width: width*0.7}}>
                            <TouchableOpacity onPress={() => toggleTodo(todo.id)}>
                                <Text style={[ styles.listItem,
                                    {textDecorationLine: todo.complete ? 'line-through' : 'none'}
                                ]}>{todo.text}</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.addButtonView} onPress={() => deleteTodo(todo.id)}>
                                <AntDesign name='delete' size={20} style={{ color: '#de9595', padding: 10}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.addButtonView}>
                                <AntDesign name='edit' size={20} style={{ color: '#de9595', padding: 10}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}   
        </ScrollView>
        )
    
    }

export default TodoList;

const styles = StyleSheet.create({
	listContainer: {
		marginTop: '5%',
		flexDirection: 'row',
		borderColor: '#aaaaaa',
		borderBottomWidth: 1.5,
		width: '100%',
        alignItems: 'center',
		minHeight: 40
    },
    addButtonView: {
        height: 40,
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#eaeaea'
    },
	listItem: {
		paddingLeft: 10,
		marginTop: 6,
		borderColor: 'black',
		borderBottomWidth: 1,
		fontSize: 17,
		fontWeight: '500',
		color: 'black'
    }
});

