import React from "react";
import { createStackNavigator} from "@react-navigation/stack";
import {Home, Details, RestaurantLocation} from "../screens/index";
import ROUTES from "../constant/routes";

const Stack = createStackNavigator();

const HomeStackNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name={ROUTES.HOME} component={Home} />
        <Stack.Screen name={ROUTES.DETAILS} component={Details} />
        <Stack.Screen name={ROUTES.RESTAURANT_LOCATION} component={RestaurantLocation} />
    </Stack.Navigator>
);

export default HomeStackNavigator;