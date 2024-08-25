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
            <Text style={styles.text}>
                Screen Home
        </Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
            >
                <Text style={styles.text}>
                    Go to Screen Done
          </Text>
            </Pressable>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
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