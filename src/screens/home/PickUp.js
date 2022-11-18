import React, {useContext, useEffect} from "react";
import {View, ScrollView, StyleSheet} from "react-native";
import SearchBar from "../../components/SearchBar";
import Categories from "../../components/Categories";
import Restaurants from "../../components/Restaurants";
import RestaurantsContext from "../../context/RestaurantsContext";

const PickUp = ({searchTerm, setSearchTerm, activeCategory, setActiveCategory}) => {

    const {state: {restaurants}} = useContext(RestaurantsContext);

    const PickUpRestaurants = restaurants.filter((item) => {
        return item.transactions.includes("pickup");
    });

    return (
        <View style={styles.container}>
            <SearchBar 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories 
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
                <Restaurants items={PickUpRestaurants}/>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default PickUp;