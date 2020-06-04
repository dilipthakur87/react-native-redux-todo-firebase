import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = props => {

    const { label, onPress, buttonStyle, textStyle, buttonProps } = props;
    return (
        <TouchableOpacity
            {...buttonProps}
            style={[styles.container, buttonStyle]}
            onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        height: 50
    },
    text: {
        textAlign: "center",
        height: 20,
        fontSize: 16,
    }
});

export default Button;