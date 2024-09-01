import React, { useState } from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";
import CustomButton from "../utils/CustomButton";
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Task({ navigation }) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const {tasks, taskID} = useSelector(state=>state.taskReducer);
    const dispatch = useDispatch();

    const setTask = () => {
        if (title.length == 0) {
            Alert.alert('Oooops 🙊', 'Seems you forgot about a title')
        } else {
            try {
                var Task = {
                    ID: taskID,
                    Title: title,
                    Text: text
                }
                let newTasks = [...tasks, Task]
                AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
                .then(() => {
                    dispatch(setTasks(newTasks));
                    Alert.alert('Success!💫', 'You just saved a new task');
                    navigation.goBack();
                })
                .catch(err => console.log(err))
            } catch(error) {
                console.log(error)
            }
        }
    }

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
                onPressFunction={setTask}
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