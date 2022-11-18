import React from "react";
import {View, StyleSheet} from "react-native";

const Spacer = ({children}) => {

    return <View style={styles.container}>
        {children}
    </View>
};

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
})

export default Spacer;
