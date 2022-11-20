import React from "react";
import {View, Text, Image, FlatList, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../constant/colors"

const categData = [
    {
        name: "bread",
        image: require('../../assets/images/bread.png'),
    },
    {
        name: "coffee",
        image: require("../../assets/images/coffee.png"),
    },
    {
        name: "deals",
        image: require("../../assets/images/deals.png"),
    },
    {
        name: "desserts",
        image: require("../../assets/images/desserts.png"),
    },
    {
        name: "fast food",
        image: require("../../assets/images/fast-food.png"),
    },
    {
        name: "shopping bag",
        image: require("../../assets/images/shopping-bag.png"),
    },
    {
        name: "soft drink",
        image: require("../../assets/images/soft-drink.png"),
    },
    {
        name: "splash",
        image: require("../../assets/images/splash.png"),
    },
];

const Categories = ({activeCategory, setActiveCategory}) => {

    return <View style={[styles.container, styles.shadow]}>
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categData}
            keyExtractor={(item) => item.name}
            renderItem={({item}) => {

                return <View style={activeCategory === item.name ? styles.activeItemContainer : styles.itemContainer}>
                    <TouchableOpacity 
                        style={{alignItems: "center"}}
                        onPress={() => {
                            activeCategory !== item.name ? setActiveCategory(item.name) : setActiveCategory("");
                        }}
                    >
                        <Image source={item.image} style={[styles.image]}/>
                        <Text style={{fontWeight: "600", textTransform: "capitalize"}}>{item.name}</Text>
                    </TouchableOpacity>
                </View>
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.WHITE,
        marginBottom: 20,
        height: 57,
        marginHorizontal: 5,
        paddingHorizontal: 0,
        borderRadius: 15,
        boxShadow: 5,
        paddingHorizontal: 5
    },
    itemContainer: {
        marginHorizontal: 5,
        marginVertical: 3,
        width: 90,
        backgroundColor: COLORS.WHITE,
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        borderRadius: 15,
    },
    activeItemContainer: {
        marginHorizontal: 5,
        marginVertical: 3,
        width: 90,
        backgroundColor: COLORS.GRAY.ONE,
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#d3d3d3",
    },
    image: {
        height: 30,
        width: 30,
    },
    shadow: {
        shadowColor: "black",
        shadowOffset: {width: -3, height: 5},
        shadowOpacity: 0.1,
        shadowRadius: 3
    },
});

export default Categories