import React, { Component } from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet
    } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import {addTodo, retrieveTodos} from '../actions';
import { dbRef } from '../config';

class AddTodo extends Component {

    state = {
        text: ''
    }

    componentDidMount() {
        dbRef.ref('/todos').once('value', snapshot => {
          let data = snapshot.val();
          let items = Object.values(data);
        //   console.log("items = ", items)
          this.props.dispatch(retrieveTodos(items))
        });
    }

    addTodo = (text) => {
        /* update redux store here 
           by easily dispatching action 
           as this component is connected to the store
        */
        console.log("addtodo < conatainer = ", text)
        if(text) {
            this.props.dispatch(addTodo(text))
            this.setState({ text: '' })
        } else {
            alert("Please enter todo to add")
        }
    }

    render(){
        return (
            <SafeAreaView>
                <View style={{ flexDirection: 'row', marginHorizontal: 20, margin: 5 }}>
                    <TextInput 
                        placeholder="Eg. Go to the hospital"
                        value = {this.state.text}
                        onChangeText = {(value) => this.setState({ text: value })}
                        style={styles.inputText}
                    />

                    <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                        <View style={styles.addButtonView}>
                            <Ionicons name='md-add' size={30} style={{ color: '#de9595', padding: 10 }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputText: {
        borderWidth: 1,
        borderColor: '#f2f2e1',
        backgroundColor: '#eaeaea',
        height: 50,
        flex: 1,
        padding: 5,
        borderRadius: 10
    },
    addButtonView: {
        alignItems: 'center',
        marginLeft: 5,
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#eaeaea'
    }
});