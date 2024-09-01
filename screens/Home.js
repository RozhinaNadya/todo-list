import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Pressable,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setTaskID, setTasks } from '../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {
    const { tasks } = useSelector(state=>state.taskReducer);
    const dispatch = useDispatch();

    const onPressNewTask = () => {
        dispatch(setTaskID(tasks.lengh + 1));
        navigation.navigate('Task');
    }

    const getTasks = () => {
        AsyncStorage.getItem('Tasks')
        .then(tasks => {
            const parsedTasks = JSON.parse(tasks);
            if (parsedTasks && typeof parsedTasks === 'object') {
                dispatch(setTasks(parsedTasks))
            }
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <View style={styles.container}>
        <View style={styles.body}>
            <FlatList
            data={tasks}
            renderItem={({ item }) => (
            <View style={styles.taskBody}>
                <Text style={styles.titleText}>
                    {item.title}
                    </Text>
                <Text style={styles.taskBodyText}>
                {item.text}
                    </Text>
            </View>
            )}/>
        </View>
        <Pressable
            onPress={onPressNewTask}
            >
                <View
                style={styles.plusButton}>
                    <Text style={styles.plusText}>+</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 10
    },
    taskBody: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    },
    taskBodyText: {
        fontSize: 20,
        marginBottom: 10,
        marginHorizontal: 10
    },
    plusButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#4E1C8E'
    },
    plusText: {
        fontSize: 30,
        color: 'white'
    }
})