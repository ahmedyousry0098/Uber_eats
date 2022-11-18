import React, {useState, useContext, useEffect} from "react";
import {View, Text, TouchableOpacity, Modal, StyleSheet} from "react-native";
import {useNavigation, useIsFocused} from "@react-navigation/native";
import OrdersContext from "../context/OrdersContext"
import { Divider } from "@rneui/themed";
import LottieView from "lottie-react-native";
import ROUTES from "../constant/routes";
import { Ionicons } from '@expo/vector-icons';

const CheckOut = ({cardItems, payment, setcheckoutVisable, loadingVisible, handleCheckOutBtn}) => {

    const [loadingScreen, setLoadingScreen] = useState(false);
    const {addCompletedOrders,removeCardItems} = useContext(OrdersContext);

    const navigation = useNavigation();
    const isFocused = useIsFocused();

    return <>
            { loadingVisible ?
                <Modal
                    animationType="fade"
                    visible={loadingVisible}
                    transparent={true}
                >
                    <View style={{flex: 1, alignItems: "center", backgroundColor: "rgba(0,0,0,0.7)"}}>
                        <LottieView 
                            style={{height: 250, position: "absolute", bottom: 80}}
                            source={require("../../assets/animations/scanner.json")}
                            autoPlay
                            loop={true}
                            speed={1.5}
                        />
                    </View>
                </Modal> :
                <View style={styles.conteiner}>
                    <View style={styles.entireContainer}>
                        <TouchableOpacity style={styles.closeCircleContainer} onPress={() => setcheckoutVisable(false)}>
                            <Ionicons name="close-circle" style={styles.closeCircle} />
                        </TouchableOpacity>
                        <View style={{alignItems: "center", marginVertical: 10}}>
                            <Text style={{fontSize: 22, fontWeight: "bold"}}>RESET</Text>
                        </View>
                        <>
                            {
                                cardItems.map((item, index) => {
                                    return <View key={index}>
                                        <View style={styles.itemContainer}>
                                            <Text style={styles.headerTxt}>{item.title}</Text>
                                            <Text style={styles.normalTxt}>{item.price}</Text>
                                        </View>
                                        <Divider width={0.7}/>
                                    </View>
                                })
                            }
                            <View style={[styles.itemContainer, {marginHorizontal: 20}]}>
                                <Text style={[styles.headerTxt, {fontWeight: "800", fontSize: 19}]}>subtotal</Text>
                                <Text style={[styles.normalTxt, {fontWeight: "800"}]}>{`$${payment}`}</Text>
                            </View>
                        </>
                    </View>

                    <TouchableOpacity onPress={() => handleCheckOutBtn()} >
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonTitle}>Check Out</Text>
                            <Text style={styles.paymentText}> {`$${payment}`} </Text>
                        </View>
                    </TouchableOpacity>
                </View>   
        }    
    </>   
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0 ,0 ,0, 0.7)"
    },
    entireContainer: {
        backgroundColor: "white",
        height: "50%",
        opacity: 0.95
    },  
    itemContainer: {
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10,
    },
    closeCircleContainer: {
        position: "absolute",
        right: 8,
        top: 8,
        zIndex: 888
    },
    closeCircle: {
        fontSize: "25"
    }, 
    headerTxt: {
        fontWeight: "bold"
    },
    buttonContainer: {
        backgroundColor: "rgb(10, 10, 10)",
        position: "absolute",
        bottom: 50,
        alignSelf: "center",
        width: "60%",
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center"
    },
    buttonTitle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    paymentText: {
        position: "absolute",
        right: 3,
        color: "white",
        fontWeight: "bold"
    },
});

export default CheckOut;