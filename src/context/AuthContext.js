import React, {useReducer} from "react";

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case "authenticate":
            return {...state, Authenticated: action.payload};
        case "toggle-lottie":
            return {...state, lottie: action.payload}
        default: 
            return state;
    }
}

export const Provider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, {token: "", Authenticated: true});

    const setAuthentication = (value) => {
        dispatch({type: "authenticate", payload: value})
    };

    const toggleLottie = (value) => {
        dispatch({type: "toggle-lottie", payload: value})
    }

    return <Context.Provider value={{authState: state, setAuthentication, toggleLottie}}>
        {children}
    </Context.Provider>
};

export default Context;