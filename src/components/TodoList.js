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
import { deleteTodo, toggleTodo } from '../actions';
import { connect } from 'react-redux';

const {width, height} = Dimensions.get('window');

const TodoList = (props) => {

    // const{ todos, toggleTodo, deleteTodo } = props

    console.log("Todo item in todolist = ", props.todos.length)
    // console.log("toggleTodo in todolist = ", toggleTodo)
    return(  
        <View>
            {props.todos.length > 0 ?
            <ScrollView style={{ width:'100%', height:'90%', marginTop: 10 }}>
                    { props.todos.map((todo) => 
                        <View style={styles.listContainer} key={todo.id}>
                            <View style={{ width: width*0.7}}>
                                <TouchableOpacity key={todo.id} onPress={() => props.toggleTodo(todo.id)}>
                                    <Text style={[ styles.listItem,
                                        {textDecorationLine: todo.complete ? 'line-through' : 'none'}
                                    ]}>{todo.text}</Text>
                                </TouchableOpacity>
                            </View>
                            
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={styles.addButtonView} onPress={() => props.deleteTodo(todo.id)}>
                                    <AntDesign name='delete' size={20} style={{ color: '#de9595', padding: 10}} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.addButtonView}>
                                    <AntDesign name='edit' size={20} style={{ color: '#de9595', padding: 10}} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}   
            </ScrollView> 
            :
            <View style={{marginTop: height/3}}> 
                <Text style={{ fontSize: 20 , padding: 10, textAlign: 'center'}}>No todo record found. {"\n"} Please press {'\"+\"'} sign to add new todo.</Text>
            </View>
            }
        </View>
        )
    
    }

const mapStateToProps = state => ({
    todos: state.todosReducer
})
    
export default connect(mapStateToProps, { deleteTodo, toggleTodo })(TodoList);

const styles = StyleSheet.create({
	listContainer: {
		marginTop: '2%',
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

