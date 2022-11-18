import React from "react";
import { TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNav from "./BottomTabNav"
import {Wallet, OrdersHistory, Account} from "../screens/index";
import ROUTES from "../constant/routes";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
    <Drawer.Navigator
        screenOptions={({route}) => ({
            drawerStyle: {width: "50%"},
            swipeEdgeWidth: 150,
            drawerPosition: "right",
            headerPressColor: "red",
            headerShown: false,
            drawerIcon: ({focused, color, size}) => {
                let iconName;
                color = "black";
                switch(route.name) {
                    case ROUTES.BOTTOM_TAB:
                        iconName = "home";
                        size = focused ? 25 : 21;
                        break;
                    case ROUTES.WALLET:
                        iconName = "wallet";
                        size = focused ? 25 : 21;
                        break;
                    case ROUTES.ORDERS_HISTORY:
                        iconName = "shoppingcart"
                        size = focused ? 25 : 21;
                        break;
                    case ROUTES.ACCOUNT:
                        iconName = "logout"
                }
                return <AntDesign name={iconName} size={size} color={color} />
            },
            drawerLabelStyle: {
                marginLeft: -15,
                fontWeight: "bold"
            },
            drawerActiveBackgroundColor: "rgb(220, 220, 220)",
            drawerActiveTintColor: "black",
        })
    }
    >
        <Drawer.Screen name={ROUTES.BOTTOM_TAB} component={BottomTabNav} options={{title: "Home"}}/>
        <Drawer.Screen name={ROUTES.WALLET} component={Wallet} />
        <Drawer.Screen name={ROUTES.ORDERS_HISTORY} component={OrdersHistory} />
        <Drawer.Screen name={ROUTES.ACCOUNT} component={Account} />
    </Drawer.Navigator>
);

export default DrawerNavigator;