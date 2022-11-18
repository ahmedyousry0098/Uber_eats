import React from "react";
import {View, TouchableOpacity, TextInput, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({searchTerm, setSearchTerm}) => {

    return (
        <View style={[styles.container, styles.shadow]}>

            <TouchableOpacity 
                style={{justifyContent: "center"}}
            >
                <Ionicons name="search" style={styles.searchIcon}/> 
            </TouchableOpacity>
            
            <TextInput
                style={styles.input}
                placeholder="Search.."
                placeholderTextColor={"rgb(200,200,200)"}
                value={searchTerm}
                onChangeText={(e) => {
                    setSearchTerm(e);
                }}
                blurOnSubmit
            />
            { searchTerm ?
                <TouchableOpacity onPress={() => setSearchTerm("")}>
                    <View style={styles.rightButtonContainer}>
                        <Ionicons name="close-circle" size={22} color="black" />
                    </View>
                </TouchableOpacity>
                : null
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "rgb(255, 255, 255)",
        borderRadius: 15,
        height: 50,
    },
    searchIcon: {
        fontSize: 25,
        marginHorizontal: 7
    },
    input: {
        flex: 1,
        fontSize: 19,
        fontWeight: "600"
    },
    rightButtonContainer: {
        flexDirection: "row",
        position: "absolute",
        right: 3,
        top: 10,
        padding: 3,
        borderRadius: 10
    },
    rightButtonText: {
        color: "white",
        fontWeight: "bold"
    },
    shadow: {
        shadowColor: "black",
        shadowOffset: {width: -3, height: 5},
        shadowOpacity: 0.08,
        shadowRadius: 3
    },
});

export default SearchBar;

{/* <GooglePlacesAutocomplete 
                getAddressText={(e) => console.log(e)}
                query={{key: "AIzaSyDADi4vLn1OCV1pUoiS9V2DL7gTs9WKNkY"}}
                placeholder="Search.."
                textInputProps={{
                    placeholderTextColor: 'rgb(180,180,180)'
                }}
                styles={{
                    textInputContainer: {
                        backgroundColor: "rgb(255, 255, 255)",
                        flexDirection: "row",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 30,
                        marginHorizontal: 10,
                        height: 60,
                    },
                    textInput: {
                        backgroundColor: "rgb(255, 255, 255)",
                        fontSize: 20,
                        fontWeight: "700",
                        alignSelf: "center",
                        flex: 1
                    }
                }}

                renderLeftButton={() => {
                    return <View style={{marginLeft: 10, justifyContent: "center"}}>
                        { searchTerm? <Ionicons name="location" size={24} color="black" />
                        : <FontAwesome name="search" style={styles.icon} /> }
                    </View>
                }}

                renderRightButton={() => {
                    return <View style={styles.rightButtonStyle}>
                        <TouchableOpacity>
                            <View style={styles.rightButtonContainer}>
                                <AntDesign name="find" style={styles.rightButtonIcon} />
                                <Text style={{fontWeight: "700", color: "white", marginLeft: 3}}>Search</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                }}
            /> */}

