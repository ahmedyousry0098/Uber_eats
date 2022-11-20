import React, {useEffect} from "react";
import {View, Text, StyleSheet, Alert} from "react-native";
import ToggleDrawerIcon from "../../components/ToggleDrawerIcon";

const Browse = () => {

    useEffect(() => {
        Alert.alert("This page will be available later..")
    })
    return (
        <View style={styles.container}>
            <ToggleDrawerIcon />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContant: "center"
    }
});

export default Browse;