import React from "react"
import {View, Modal, Image, StyleSheet, Text} from "react-native";
import LottieView from "lottie-react-native";

const Welcome = ({visible}) => {

    return (
        <Modal
            animationType="fade"
            visible={visible}
            transparent={true}
            style={{flex: 1, alignItems: "center"}}
        >
            {/* <Image 
                style={[styles.logo, {height: 100 / 1.42, width: 100} ]}
                source={require("../../assets/images/my-logo.png")}
            /> */}

            <LottieView 
                style={{
                height: 100,
                position: "absolute",
                bottom: "30%",
                }}
                source={require("../../assets/animations/welcome.json")}
                autoPlay
                loop={false}
                speed={1.2}
            />
        </Modal>
    )
};

const styles = StyleSheet.create({

});

export default Welcome;