//importações
import React, { Component } from "react";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase";

//importa a navegação em gavetas
import {
    DrawerContentScrollView,
    DrawerItemList
} from "@react-navigation/drawer";

//mostra a aba da navegação em gavetas
export default class CustomSidebarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            light_theme: true
        };
    }

    //busca tema claro ou escuro
    componentDidMount() {
        let theme;
        firebase
            .database()
            .ref("/users/" + firebase.auth().currentUser.uid)
            .on("value", function (snapshot) {
                theme = snapshot.val().current_theme;
            });
        this.setState({ light_theme: theme === "light" ? true : false });
    }

    //layout do aplicativo
    render() {
        let props = this.props;
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: this.state.light_theme ? "white" : "black"
                }}
            >
                <Image
                    source={require("../assets/logo.png")}
                    style={styles.sideMenuProfileIcon}
                ></Image>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>
            </View>
        );
    }
}

//estilos
const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        width: RFValue(140),
        height: RFValue(140),
        borderRadius: RFValue(70),
        alignSelf: "center",
        marginTop: RFValue(60),
        resizeMode: "contain"
    }
});
