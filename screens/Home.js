import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Pressable,
} from 'react-native';

export default function Home({ navigation }) {

    const onPressNewTask = () => {
        navigation.navigate('Done');
    }

    const [tasks, setTasks] = useState([
        {title: 'Title 1', text: 'Text One Text One Text One'},
        {title: 'Title 2', text: 'Text Two Text Two Text Two Text Two Text Two'}
    ])

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