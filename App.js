import React, {useState, useEffect, useContext} from "react"
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {Provider as RestaurantsProvider} from "./src/context/RestaurantsContext";
import {Provider as OrdersProvider} from "./src/context/OrdersContext";
import {Provider as AuthProvider} from "./src/context/AuthContext";
import AuthContext from "./src/context/AuthContext";
import DrawerNavigator from "./src/navigations/DrawerNav";
import { AuthScreen, Welcome } from "./src/screens";

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const {authState: {Authenticated}} = useContext(AuthContext);
  LogBox.ignoreLogs(['Sending']);

  useEffect(() => {
    setModalVisible(true)
    setTimeout(() => {
      setModalVisible(false)
    }, 2500);
  }, [])

  return <>
  {
    modalVisible ? <Welcome visible={modalVisible} /> 
    : <NavigationContainer>
      <>
      {
        !Authenticated ? <AuthScreen /> : <DrawerNavigator />
      }
      </>
    </NavigationContainer>
  }
  </>
}

export default () => ( 
  <AuthProvider>
    <RestaurantsProvider>
      <OrdersProvider>
        <App />
      </OrdersProvider>
    </RestaurantsProvider>
  </AuthProvider>
);