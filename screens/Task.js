import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import CustomButton from "../utils/CustomButton";

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
            <CustomButton
                title='Save'
                color='#4E1C8E'
                style={{ width: '100%' }}
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