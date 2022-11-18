import React, {useContext} from "react";
import {SafeAreaView, View, Text, StyleSheet} from "react-native";
import ToggleDrawerIcon from "../../components/ToggleDrawerIcon";
import OrdersContext from "../../context/OrdersContext";
import Menu from "../../components/Menu";

const Setting = () => {

    const {orderState: {completedOrders}} = useContext(OrdersContext);

    return (
        <SafeAreaView style={styles.container}>
            <ToggleDrawerIcon />
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Completed Orders: </Text>
            </View>
            <Menu 
                constantFoods={completedOrders}
                showCheckBox={false}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    headerContainer: {
        marginHorizontal: 10,
        marginVertical: 10
    },
    header: {
        fontSize: 30,
        fontWeight: "bold"
    }
});

export default Setting;