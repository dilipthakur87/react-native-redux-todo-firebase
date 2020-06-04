import React, { useState, useEffect } from "react";
import { TextInput, Text, View, TouchableOpacity, Modal, Dimensions, Image, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import Button from './Button';
import { verticalScale } from 'react-native-size-matters';
import { updateTodo } from '../actions';
import { connect } from 'react-redux';
const window = Dimensions.get('window');
const ratio = window.width / 421;

const UpdateTodo = (props) => {
    const [todo, setTodo] = useState('');

    useEffect(() => {
        console.log("Props in update todo = ", props)
        setTodo(props.text)
    }, [props.newRequestStamp])

    const submitChanges = async () => {
        props.updateTodo(todo, props.id)
        props.onClose(false);
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.isVisible}
        >
        <KeyboardAvoidingView style={{ height: '100%' }} behavior={"padding"} >

            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 22
            }}>
                <View style={{
                    margin: 20,
                    backgroundColor: "#fff",
                    borderRadius: 7,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    width: 388 * ratio,
                    height: 200 * ratio,
                }}>
                    { /** heading */}
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 23 * window.width / 421,
                        width: '100%',
                        justifyContent: 'center'
                    }}>
                        <Text style={{ color: '#1469AF', fontSize: 20 * ratio, alignSelf: 'center' }}>{'Update Todo'}</Text>
                        <TouchableOpacity
                            style={{ position: 'absolute', right: 21}}
                            onPress={() => props.onClose(false)}
                        >
                            <Image
                                style={{ width: 20 * ratio, height: 20 * ratio, resizeMode: 'contain', tintColor: "#000", }}
                                source={require('../../assets/icon-close.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flexDirection: 'column',
                        flex: 1,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',

                    }}>
                        <InputText
                            onChangeText={(value) => setTodo(value)}
                            value={todo}
                        />

                        { /** update changes button */}
                        <Button label={"Update Changes"} onPress={() => submitChanges()}
                            buttonStyle={{
                                backgroundColor: "transparent",
                                marginBottom: 12,
                                paddingVertical: 12,
                                borderWidth: StyleSheet.hairlineWidth,
                                borderColor: '#89AECC',
                                width: 212 * ratio,
                                height: 51 * ratio,
                                alignSelf: 'center'
                            }}
                            textStyle={{ color: '#1469AF', fontSize: 16 }}
                        />
                    </View>
                </View>
            </View>

        </KeyboardAvoidingView>
        </Modal>

    );
}

export default connect(null, { updateTodo })(UpdateTodo);

const InputText = ({ onChangeText, value }) => (
    <View style={{ margin: verticalScale(20), width: '80%' }}>
      <TextInput
        editable={true}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        style={{
            padding: 5,
            fontSize: 18,
            color: '#1b3964',
            backgroundColor: 'white',
            borderColor: '#9ea7be',
            borderWidth: 1,
            borderRadius: 5,
        }}
      />
    </View>
  );
