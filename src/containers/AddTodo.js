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
import {addTodo} from '../actions';

class AddTodo extends Component {

    state = {
        text: ''
    }

    addTodo = (text) => {
        /* update redux store here 
           by easily dispatching action 
           as this component is connected to the store
        */
        console.log("text in addtodo = ", text)
        this.props.dispatch(addTodo(text))
        this.setState({ text: '' })
    }

    render(){
        return (
            // <SafeAreaView>
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
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
            // </SafeAreaView>
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
        padding: 5
    },
    addButtonView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#eaeaea'
    }
});