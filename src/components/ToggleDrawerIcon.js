import React from "react";
import {View, TouchableOpacity, Text, StyleSheet} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const ToggleDrawerIcon = () => {

    const navigation = useNavigation(); 

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Entypo name="list" size={30} color="black" />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: "Center",
        position: "absolute",
        right: 15,
        top: 55,
        zIndex: 888,
    }
});

export default ToggleDrawerIcon;