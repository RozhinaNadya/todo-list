import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function Task() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');


    return(
        <View style={styles.body}>
            <TextInput 
            value={title}
            style={styles.textInput}
            placeholder='Title'
            onChangeText={(value) => setTitle(value)}
            />
            <TextInput 
            value={text}
            style={styles.textInput}
            placeholder='Text'
            multiline
            onChangeText={(value) => setText(value)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        width: '100%',
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 10,
        margin: 10
    }
})