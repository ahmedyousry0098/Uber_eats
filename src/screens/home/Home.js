import React, {useState, useContext, useEffect} from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import RestaurantsContext from "../../context/RestaurantsContext";

import HeaderTaps from "../../components/HeaderTaps";
import Delivary from "./Delivary";
import PickUp from "./PickUp";
import ToggleDrawerIcon from "../../components/ToggleDrawerIcon";
import ROUTES from "../../constant/routes";
import COLORS from "../../constant/colors"

const Home = () => {

    const [currentPage, setCurrentPage] = useState(ROUTES.DELIVERY);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("")
    const {fetchRestaurants} = useContext(RestaurantsContext);

    useEffect(() => {
        fetchRestaurants(searchTerm, activeCategory);
    }, [searchTerm, activeCategory])

    return <SafeAreaView style={styles.container}>

        <HeaderTaps 
            navigate={setCurrentPage}
            active={currentPage}
        />

        <ToggleDrawerIcon />

        {
            currentPage === ROUTES.DELIVERY ? 
                <Delivary 
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                /> 
            : currentPage === ROUTES.PICK_UP ? 
                <PickUp 
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                /> 
            : null
        }

    </SafeAreaView>
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.GRAY.ONE,
        flex: 1,
    }
});

export default Home;