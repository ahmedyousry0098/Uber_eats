import React, {useReducer} from "react";
import { useQuery } from "react-query";
import yelpApi from "../yelpApi/api";

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case "fetch_restaurants": 
            return {restaurants: action.payload};

        case "fetch_details":
            return {...state, details: action.payload};

        case "remove_details":
            return {...state, details: []};
            
        default: 
            return state
    }
}

export const Provider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {restaurants: [], details: []});

    const fetchRestaurants = async (term="food", category="") => {
        try {
            const response = await yelpApi.get("/search", {
                params: {
                    location: "New York City",
                    limit: 15,
                    term,
                    categories: category,
                }
            })
            dispatch({type: "fetch_restaurants", payload: response.data.businesses});
        } catch (error) {
            console.log(`error is ${error}`);
        }
    };

    const fetchRestaurantsDetails = async (id) => {
        try {
            const restaurantsDetails = await yelpApi.get(`/${id}`);
            dispatch({type: "fetch_details", payload: restaurantsDetails.data});
        } catch (e) {
            throw Error
        }
    };

    const removeRestaurantsDetails = () => {
        dispatch({type: "remove_details"})
    }

    return <Context.Provider value={{state, fetchRestaurants, fetchRestaurantsDetails, removeRestaurantsDetails}}>
        {children}
    </Context.Provider>
};

export default Context;