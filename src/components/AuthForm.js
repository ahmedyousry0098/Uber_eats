import React, {useState, useRef, useEffect} from "react";
import {View, Text, TextInput, StyleSheet, Keyboard} from "react-native";
import {Button} from "@rneui/themed"
import { FontAwesome5 } from '@expo/vector-icons';

const AuthForm = ({signIn}) => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={[styles.container, styles.shadow]}>

            <View style={styles.inputContainer}>
                <FontAwesome5 name="user-alt" style={styles.inputIcon} />
                <TextInput 
                    style={styles.usernameInput}
                    placeholder="User name .."
                    placeholderTextColor={"gray"}
                    value={userName}
                    onChangeText={setUserName}
                    textContentType="emailAddress"
                />
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome5 name="key" style={[styles.inputIcon, {fontSize: 22}]} />
                <TextInput 
                    style={styles.usernameInput}
                    placeholder="Password.."
                    placeholderTextColor={"gray"}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    onEndEditing
                />
            </View>

            <Button
                title={"Sign in"}
                icon={{
                    name: 'user',
                    type: 'font-awesome',
                    size: 15,
                    color: 'white',
                }}
                iconRight
                iconContainerStyle={{ marginLeft: 10 }}
                titleStyle={{ fontWeight: '600', fontSize: 21 }}
                buttonStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 1)',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 30,
                }}
                containerStyle={{
                    width: 220,
                    marginVertical: 10,
                    alignSelf: "center"
                }}
                onPress={signIn}
                />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: "40%",
        justifyContent: "center",
        marginTop: 20,
        zIndex: 999
    },
    inputContainer: {
        flexDirection: "row",
        height: "25%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "black",
        marginBottom: 30,
        paddingLeft: 10,
        borderStartWidth: 10,
        borderTopStartRadius: 70,
    },
    inputIcon: {
        marginHorizontal: 5,
        fontSize: 24,
        color: "black"
    },
    usernameInput: {
        flex: 1,
        height: "80%",
        fontSize: 22,
        padding: 2
    },
    shadow: {
        shadowColor: "black",
        shadowOffset: {width: -10, height: 20},
        shadowOpacity: 0.002,
        shadowRadius: 5,
    }
});

export default AuthForm;