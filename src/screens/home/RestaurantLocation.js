import React from "react";
import {SafeAreaView, View, Text, StyleSheet, Alert} from "react-native";
import MapView, {Circle} from "react-native-maps";
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

const RestaurantLocation = ({route}) => {

    const coords = route.params.coords;

    return (
        <SafeAreaView style={{flex: 1}}>
            <MapView 
                style={styles.map}
                initialRegion={{
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                    ...coords
                }}
            >
                {/* <Circle 
                    center={coords}
                    radius={30}
                    fillColor="rgba(100, 30, 200, 0.2)"
                    strokeColor="rgb(255, 255, 255)"
                /> */}
            </MapView>
            
            <View style={[styles.buttonContainer, styles.shadow]}>
                <TouchableOpacity style={{flexDirection: "row"}} onPress={() => Alert.alert("this service will be available soon")}>
                    <MaterialIcons name="directions" size={24} color="white" />
                    <Text style={styles.text}>Direction</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    map: {
        height: "70%",
        width: "100%"
    },
    buttonContainer: {
        backgroundColor: "rgb(10, 10, 10)",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        position: "absolute",
        bottom: 50,
        width: 150,
        borderRadius: 20,
        padding: 15
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginLeft: 3
    },
    shadow: {
        shadowColor: "black",
        shadowOffset: {width: -3, height: 3},
        shadowRadius: 3,
        shadowOpacity: 0.3
    }
});

export default RestaurantLocation;