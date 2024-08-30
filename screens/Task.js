import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Task() {
    return(
        <View style={styles.body}>
            <Text>Task</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
})