import React from "react";
import {SafeAreaView, View, Text, StyleSheet, Dimensions} from "react-native";
import ToggleDrawerIcon from "../../components/ToggleDrawerIcon";
// import {useFonts} from "expo-font"

const {width, height} = Dimensions.get("screen");

// const [Rajdhani] = useFonts({
//     "Rajdhani-Regular": require("../../../assets/fonts/Rajdhani-Regular.ttf")
// });

const Wallet = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ToggleDrawerIcon />
            <View style={[styles.moneyContainer, styles.shadow]}>
                <Text style={styles.money}>0.00</Text>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    moneyContainer: {
        width: 0.7 * width,
        height: 0.25 * height,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(230, 230, 230)",
        borderRadius: 30,
        borderColor: "rgb(150, 150, 150)",
        
    },
    money: {
        fontSize: 30,
        fontWeight: "800",
        // fontFamily: "Rajdhani-Regular"
    },
    shadow: {
        shadowOffset: {width: -5, height: 5},
        shadowRadius: 3,
        shadowOpacity: 0.3,
        shadowColor: "gray"
    }
});

export default Wallet;