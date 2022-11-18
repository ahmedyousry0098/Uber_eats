import React, {useContext, useEffect} from "react";
import {View, ScrollView, Text, Image, StyleSheet} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import OrderContext from "../context/OrdersContext";
import COLORS from "../constant/colors"

const Menu = ({constantFoods, showCheckBox}) => {

    const {orderState: {cardItems}, controlCard, calcPayment} = useContext(OrderContext);

    const isFoodInCard = (food) => (
        Boolean(cardItems.find((item) => item.title === food.title))
    );

    useEffect(() => {
        calcPayment();
    }, [cardItems])

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {constantFoods.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                    {
                        showCheckBox ? <BouncyCheckbox 
                            fillColor="green"
                            iconStyle={{borderColor: "lightgray"}}
                            onPress={(value) => controlCard(value, item)}
                            isChecked={isFoodInCard(item)}
                        /> : null
                    }
                    <View style={styles.infoContainer}>
                        <Text style={styles.itemHeader}>{item.title}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                        <Text style={styles.itemPrice}>{item.price}</Text>
                    </View>
                    <View style={styles.imgContainer}>
                        <Image source={{uri: item.image}} style={styles.img}/>
                    </View>
                </View>
            ))}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        flex: 1
    },
    itemContainer: {
        height: 130,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: COLORS.GRAY.TWO,
        marginVertical: 10,
        padding: 5,
        borderRadius: 10,
    },
    infoContainer: {
        flex: 2
    },
    imgContainer: {
        flex: 1,
        alignItems: "center",
    },
    itemHeader: {
        fontSize: 22,
        fontWeight: "bold"
    },
    itemDescription: {
        marginVertical: 5,
        fontWeight: "500"
    },
    itemPrice: {
        fontWeight: "700",
        color: "green",
    },
    img: {
        height: 110,
        width: 110,
        borderRadius: 10
    }
});

export default Menu;