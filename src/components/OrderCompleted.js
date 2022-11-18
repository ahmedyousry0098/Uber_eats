import React, {useContext, useEffect} from "react";
import {StyleSheet, SafeAreaView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Button} from "@rneui/themed"
import Menu from "./Menu";
import ROUTES from "../constant/routes"
import OrderContext from "../context/OrdersContext";
import Lottie from 'lottie-react-native';

const OrderCompleted = ({setOrderCompletedVisable}) => {

    const {orderState: {cardItems}, removeCardItems} = useContext(OrderContext);
    const navigation = useNavigation()

    useEffect(() => {
        return () => removeCardItems();
    }, [])

    return <SafeAreaView style={{flex: 1}}>
        <Lottie 
            style={styles.lottie}
            source={require("../../assets/animations/check.json")}
            autoPlay
            speed={0.8}
            loop={false}
        />
    
        <Menu
            constantFoods={cardItems}
            showCheckBox={false}
        />

        <Lottie 
            style={[styles.lottie, {height: 300, position: "absolute", bottom: 10, opacity: 0.5}]}
            source={require("../../assets/animations/delivery.json")}
            autoPlay
            loop={true}
        />
        <Button
            title="Done !"
            buttonStyle={{
              backgroundColor: 'black',
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 30,
            }}
            containerStyle={{
              width: 200,
              alignSelf: "center",
              position: "absolute",
              bottom: "10%"
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
            onPress={() => {
                setOrderCompletedVisable(false);
                navigation.navigate(ROUTES.HOME)
            }}
          />
    </SafeAreaView>
};

const styles = StyleSheet.create({
    lottie: {
        height: 200,
        alignSelf: "center",
    }
});

export default OrderCompleted;