import React from "react";
import {View, Button, StyleSheet} from "react-native";

const NavLink = () => {
    
    return (
        <View style={styles.container}>
            <Button 
                title="haven't account? Sign up first"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 25,
        alignSelf: "flex-start"
    }
});

export default NavLink;