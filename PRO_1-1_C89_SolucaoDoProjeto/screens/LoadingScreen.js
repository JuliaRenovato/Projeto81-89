//importações
import React, { Component } from "react";
import {
    View,
    ActivityIndicator
} from "react-native";
import firebase from "firebase";

//tela de carregamento
export default class LoadingScreen extends Component {

    //confirma se você já está logado
    componentDidMount() {
        this.checkIfLoggedIn()
    }

    //confirma se você já está logado
    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate('DashboardScreen')
            } else {
                this.props.navigation.navigate('LoginScreen')
            }
        })
    }

    //layout
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <ActivityIndicator size="large" />
            </View>
        )
    }
}
