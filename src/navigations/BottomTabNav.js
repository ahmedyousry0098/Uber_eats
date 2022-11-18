import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNav";
import {Browse, Account} from "../screens/index";
import ROUTES from "../constant/routes";
import { Ionicons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
const Tabs = createBottomTabNavigator();

const getRouteName = (route) => {
    let routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === ROUTES.DETAILS || ROUTES.CONTACT) {
        return false;
    } 
    return true;
}

const BottomTabNavigator = (props) => {
    
    return <Tabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                    case ROUTES.HOME_STACK :
                        iconName = focused ? "home" : "home-outline";
                        size = focused ? 26 : 21;
                        break;
                    case ROUTES.BROWSE :
                        iconName = focused ? "globe-sharp" : "globe-outline";
                        size = focused ? 26 : 21;
                        break;
                    case ROUTES.ACCOUNT :
                        iconName =  focused ? "person" : "person-outline"
                        size = focused ? 26 : 21;
                        break;
                } return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
            tabBarStyle: {
                backgroundColor: "rgb(255, 255, 255)",
                height: 75,
                borderRadius: 5,
        }})}
    >
        <Tabs.Screen name={ROUTES.HOME_STACK} component={HomeStackNavigator}  options={({route}) => {
            return {
                tabBarStyle: {display: getRouteName(route) ? "flex" : "none"}
            }
        }} />
        <Tabs.Screen name={ROUTES.BROWSE} component={Browse} />
        <Tabs.Screen name={ROUTES.ACCOUNT} component={Account} />
    </Tabs.Navigator>
};

export default BottomTabNavigator;