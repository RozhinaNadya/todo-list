import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';

export default function Home({ navigation }) {

    const onPressHandler = () => {
        navigation.navigate('Done');
    }

    const onPressNewTask = () => {
        navigation.navigate('Done');
    }

    return (
        <View style={styles.container}>
        <View style={styles.body}>
            <View style={styles.taskBody}>
                <Text style={styles.titleText}>
                    Title
                    </Text>
                <Text style={styles.taskBodyText}>
                    Text text text
                    </Text>
            </View>
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
        alignItems: 'center'
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    },
    taskBodyText: {
        fontSize: 30,
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