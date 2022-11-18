import React, {useState} from "react";
import {View, Text, Image, Dimensions, StyleSheet, ScrollView, Linking, Platform, Alert} from "react-native";
import {useNavigation} from "@react-navigation/native";
import ROUTES from "../constant/routes"
import { Button, Icon } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const About = ({restaurant, details}) => {

    const navigation = useNavigation();
    const [activeImg, setActiveImg] = useState(0);

    const onChange = (nativeEvent, scrollEventThrottle) => {
        console.log(scrollEventThrottle)
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != activeImg) {
                setActiveImg(slide);
            }
        }
    };

    const handleCall = () => {
        let phoneNumber;
        if (Platform.OS === "ios") {
            phoneNumber = `tel:${details.phone}`;
        } else if (Platform.OS === "android") {
            phoneNumber = `telprompet: ${details.phone}`;
        }
        console.log(Linking.canOpenURL(phoneNumber))
        Linking.canOpenURL(phoneNumber)
        .then(supported => {
            supported ? 
            Linking.openURL(phoneNumber) :
            Alert.alert("Phone number is not supported")
        })
    };

    return (
            <View style={styles.container}>
            <View style={styles.imgContainer}>
                <ScrollView 
                    style={styles.imgScroller}
                    horizontal
                    onScroll={({nativeEvent,scrollEventThrottle}) => onChange(nativeEvent,scrollEventThrottle)}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        details?.photos?.map((e) => {
                            return <Image 
                                key={e}
                                source={{uri: e}}
                                resizeMode="cover"
                                style={styles.img}
                            />
                        })
                    }
                </ScrollView>
                <View style={styles.dotContainer}>
                    {
                        details?.photos?.map((e, index) => {
                            return <Text
                                key={e}
                                style={index === activeImg ? styles.dotActive : styles.dot}
                            >
                                &#x2022;
                            </Text>
                        })
                    }
                </View>
            </View>
            
            <View style={styles.textContainer}>
                <Text style={styles.headerText}>{`${restaurant.name} Restaurant`}</Text>
                <Text style={styles.text}>{`${details?.categories?.map(i => i.title).join(` • `) || '...'} • ${details?.price || '...'}💸 • ${details?.rating || '...'} ⭐`}</Text>
                <View style={{
                    flexDirection: "row", 
                    alignItems: "center", 
                    justifyContent: "space-between",
                    marginTop: 5
                }}>
                    {
                        details?.is_closed 
                            ? <Text style={[{color: "rgb(200, 20, 20)"}, styles.text]}> Closed </Text>
                            : <Text style={[{color: "rgb(20, 200, 20)"}, styles.text]}> Open Now </Text>
                    }
                    <View style={styles.contactButtons}>
                        <Button
                            title=""
                            buttonStyle={{ backgroundColor: 'rgba(10, 10, 10, 1)' }}
                            containerStyle={{
                                width: 45,
                                alignSelf: "center",
                                borderRadius: 20,
                            }}
                            titleStyle={{ color: 'white', marginHorizontal:1 }}
                            onPress={() => navigation.navigate(ROUTES.RESTAURANT_LOCATION, {"coords": details.coordinates})}
                        >
                            <Ionicons name="location" size={24} color="white" style={{alignSelf: "center"}} />
                        </Button>
                        <Button
                            title=""
                            buttonStyle={{ backgroundColor: 'rgba(10, 10, 10, 1)' }}
                            containerStyle={{
                                width: 40,
                                alignSelf: "center",
                                alignItems: "center",
                                borderRadius: 20,
                            }}
                            titleStyle={{ color: 'white', marginHorizontal:1 }}
                            onPress={() => handleCall()}
                        >
                            <Icon name="call" color="white" />
                        </Button>
                    </View>
                </View>
            </View>
                
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        
    },  
    imgContainer: {
        width: WIDTH,
        height: HEIGHT * 0.25
    },
    img: {
        height: HEIGHT * 0.25,
        width: WIDTH
    },
    dotContainer: {
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
        fontSize: 21
    },
    dot: {
        color: "#FFF",
        fontSize: 35
    },
    dotActive: {
        color: "black",
        fontSize: 35
    },
    textContainer: {
        marginHorizontal: 10,
        marginVertical: 10
    },
    headerText: {
        fontSize: 28,
        fontWeight: "bold",
    },
    text: {
        marginHorizontal: 0,
        marginVertical: 3,
        fontWeight: "500",
        fontSize: 16
    },
    contactButtons: {
        flexDirection: "row",
        width: 95,
        justifyContent: "space-between"
    }
});

export default About;