import React, {useState} from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import ROUTES from "../constant/routes";

const Restaurants = ({items}) => {

    const navigation = useNavigation();
    let empLove = <AntDesign name="hearto" size={30} color="white"/>;
    let fullLove = <AntDesign name="heart" size={30} color="red"/>

    return (
        <View style={styles.container}>
            {
                items ? items.map((item) => {
                    return  <TouchableOpacity key={item.id} onPress={() => navigation.navigate(ROUTES.DETAILS, {"id": item.id})} >
                        <View style={[styles.elementContainer, styles.shadow]}>
                            <Image 
                                source={{uri:`${item.image_url}`}}
                                style={styles.image}    
                            />

                            <TouchableOpacity 
                                style={styles.loveIcon}
                            >
                                {empLove}
                            </TouchableOpacity>

                            <View style={styles.textContainer}>
                                <View>
                                    <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.name}</Text>
                                    <Text>{`reviews: ${item.review_count}`}</Text>
                                </View>
                                <View style={{
                                    backgroundColor: "rgb(240, 240, 240)", 
                                    alignContent: "center",
                                    borderRadius: 10,
                                    padding: 3,
                                    marginBottom: 5,
                                    marginRight: 3
                                }}>
                                    <Text style={{color: "rgb(150, 150, 150)", fontWeight: "700"}}>{item.rating}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                }) : null
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    elementContainer: {
        backgroundColor: "rgb(255, 255, 255)",
        marginBottom: 10,
        padding: 8,
        borderRadius: 10,
    },
    image: {
        height: 200,
        borderRadius: 10,
        marginBottom: 5
    },
    loveIcon: {
        position: "absolute",
        right: 20,
        top: 20,
    },
    textContainer: {
        alignItems: "space-between",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    shadow: {
        shadowColor: "black",
        shadowOffset: {width: -2, height: 3},
        shadowOpacity: 0.1,
        shadowRadius: 3
    }
});

export default Restaurants;