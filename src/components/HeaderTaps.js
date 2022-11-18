import React from "react";
import {View, Text, StyleSheet, SafeAreaView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ROUTES from "../constant/routes"

const HeaderTaps = ({active, navigate}) => {

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity
                onPress={() => navigate(ROUTES.DELIVERY)}
            >
                <View style={
                    {
                        width: 100,
                        backgroundColor: active === ROUTES.DELIVERY ? "black": "white",
                        alignItems: "center",
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 10,
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 10
                    }
                }>
                    <Text style={{
                        color: active === ROUTES.DELIVERY ? "white" : "black",
                        fontSize: 20,
                        fontWeight: "bold",
                        paddingVertical: 5,
                    }}> Delivary </Text>

                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigate(ROUTES.PICK_UP)}
            >
                <View style={
                    {
                        width: 100,
                        backgroundColor: active === ROUTES.PICK_UP ? "black": "white",
                        alignItems: "center",
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 5,
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 20,
                    }
                }>
                    <Text style={{
                        color: active === ROUTES.PICK_UP ? "white" : "black",
                        fontSize: 20,
                        fontWeight: "bold",
                        paddingVertical: 5,
                    }}> Pick Up </Text>

                </View>
            </TouchableOpacity>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: "row",
        alignSelf: "center",
    }
});

export default HeaderTaps;
