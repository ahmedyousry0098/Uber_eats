import React, {useState, useContext} from "react";
import {SafeAreaView, Image, TouchableOpacity, StyleSheet} from "react-native";
import AuthContext from "../../context/AuthContext";
import { Dimensions } from "react-native";
import AuthForm from "../../components/AuthForm";
import NavLink from "../../components/NavLink";
import LottieView from "lottie-react-native";

const AuthScreen = () => {

    const {width, height} = Dimensions.get("screen");

    const {authState, setAuthentication} = useContext(AuthContext)
    const [lottie, setLottie] = useState(false);

    const handleSign = () => {
        setLottie(true);
        setTimeout(() => {
            setAuthentication(true);
        }, 2000)
    }

    return (
        <SafeAreaView style={styles.container}>
            
            <AuthForm 
                signIn={handleSign}
            />
            {lottie ? <LottieView 
                source={require("../../../assets/animations/done.json")}
                style={styles.lottie}
                autoPlay
                loop={false}
                speed={0.9}
            /> : <LottieView 
                source={require("../../../assets/animations/Auth.json")}
                style={styles.mainLottie}
                autoPlay
                loop={true}
            />}

            <NavLink />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        justifyContent: "flex-start",
    },
    logo: {
        alignSelf: "flex-end",
        position: "absolute",
        bottom: "2%",
        opacity: 0.8
    },
    mainLottie: {
        height: "60%",
        position: "absolute",
        bottom: 100,
        opacity: 0.6,
        alignSelf: "center",
    },
    lottie: {
        height: 300,
        alignSelf: "center",
        position: "absolute",
        bottom: 20,
    }
});

export default AuthScreen;