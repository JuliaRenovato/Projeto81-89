//importações
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

export default class Logout extends Component {
    componentDidMount() {
        firebase.auth().signOut();
    }
    //layout
    render() {
        return (
            <View style={styles.container}>
                <Text>Logout</Text>
            </View>
        );
    }
}

//estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
