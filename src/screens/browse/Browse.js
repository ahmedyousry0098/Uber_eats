import React from "react";
import {View, Text, StyleSheet} from "react-native";
import ToggleDrawerIcon from "../../components/ToggleDrawerIcon";

const Browse = () => {
    return (
        <View style={styles.container}>
            <ToggleDrawerIcon />
            <Text>Browse</Text>
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