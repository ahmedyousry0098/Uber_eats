import React, {useReducer} from "react";

const Context = React.createContext();

const reducer = (state, action) => {

    switch (action.type) {

        case "add_to_card": 
            return {...state, cardItems: [...state.cardItems, action.payload]};

        case "remove_from_card":
            let newCardArray = state.cardItems.filter((item) => item.title !== action.payload);
            return {...state, cardItems: newCardArray};

        case "remove_card_items": 
            return {...state, cardItems: []};

        case "calc_payment":
            let cardItemsPrices = state.cardItems.map((i) => {
                return parseFloat(i.price.replace("$", ""))
            }).reduce((acc, curr) => {
                return acc + curr
            }, 0)

            return {...state, totalPayment: cardItemsPrices};

        case "add_to_completed_orders":
            return {...state, completedOrders: [...state.completedOrders, ...state.cardItems]};

        default: 
            return state;
    }
}

export const Provider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {cardItems: [], totalPayment: 0, completedOrders: []});

    const controlCard = (value, item) => {
        if (value) {
            dispatch({type: "add_to_card", payload: item});
        } else {
            dispatch({type: "remove_from_card", payload: item.title})
        }
    };

    const addCompletedOrders = () => {
        dispatch({type: "add_to_completed_orders"})
    };

    const removeCardItems = () => {
        dispatch({type: "remove_card_items"})
    }

    const calcPayment = () => {
        dispatch({type: "calc_payment"});
    };


    return <Context.Provider value={{orderState: state, controlCard, addCompletedOrders, removeCardItems, calcPayment}}>
        {children}
    </Context.Provider>
};

export default Context;