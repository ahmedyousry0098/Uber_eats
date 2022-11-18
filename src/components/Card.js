import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const Card = ({payment, setcheckoutVisable}) => {

    return (
        <>        
            {
                payment ? (
                <View style={styles.mainContainer}>
                    <TouchableOpacity onPress={() => setcheckoutVisable(true)}>
                        <View style={styles.buttonContainer}>
                            <Text style={{color: "white", fontSize: 21, fontWeight: "500"}}> Add Card </Text>
                            <Text style={styles.paymentText}> {`$${payment}`} </Text>
                        </View>
                    </TouchableOpacity>
                </View> ) : null 
            }
        </>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "black",
        position: "absolute",
        bottom: 50,
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 20,
        width: "60%",
        height: "5%"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    paymentText: {
        position: "absolute",
        right: 5,
        color: "white",
        fontWeight: "bold"
    },
    modelContainer: {
        alignItems: "center",
    },
    modalTextContainer: {
        flexDirection: "row",
        
    },
    modelButton: {
        backgroundColor: "rgb(10, 10, 10)",
        width: "60%",
        alignItems: "center",
    }
});

export default Card;