import React, {useState, useContext, useEffect} from "react";
import {View, Image, Modal, StyleSheet} from "react-native";
import {useRoute} from "@react-navigation/native"
import RestaurantsContext from "../../context/RestaurantsContext";
import OrderContext from '../../context/OrdersContext';
import About from "../../components/About";
import Menu from "../../components/Menu";
import Card from "../../components/Card";
import CheckOut from "../../components/CheckOut";
import OrderCompleted from "../../components/OrderCompleted";
import { Divider } from "@rneui/base";
import ToggleDrawerIcon from "../../components/ToggleDrawerIcon";


const RestaurantDetails = () => {

    const foods = [
        {
          title: "Lasagna",
          description: "With butter lettuce, tomato and sauce bechamel",
          price: "$13.50",
          image:
            "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
        },
        {
          title: "Tandoori Chicken",
          description:
            "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
          price: "$19.20",
          image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
        },
        {
          title: "Chilaquiles",
          description:
            "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
          price: "$14.50",
          image:
            "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
        },
        {
          title: "Chicken Caesar Salad",
          description:
            "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
          price: "$21.50",
          image:
            "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
        },
        {
          title: "Lasagna",
          description: "With butter lettuce, tomato and sauce bechamel",
          price: "$13.50",
          image:
            "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
        },
      ];
    
    const [orderCompletedVisable, setOrderCompletedVisable] = useState(false);
    const [checkoutVisable, setcheckoutVisable] = useState(false);
    const [loadingVisible, setLoadingVisible] = useState(false);
    const route = useRoute();
    const id = route.params.id;
    const {state: {restaurants, details}, fetchRestaurantsDetails, removeRestaurantsDetails} = useContext(RestaurantsContext);
    const {orderState: {totalPayment, cardItems}, addCompletedOrders} = useContext(OrderContext);
    const currentRestaurant = restaurants.find((item) => item.id === id);

    const handleCheckOutBtn = () => {
      setLoadingVisible(true)
      setTimeout(() => {
        setLoadingVisible(false);
        setcheckoutVisable(false)
      }, 2500);
      setTimeout(() => {
        setOrderCompletedVisable(true)
        addCompletedOrders()
      }, 3000)
  };

    useEffect(() => {
        fetchRestaurantsDetails(id);

        return () => {
            removeRestaurantsDetails()
        }
    }, [])

    return <View style={styles.container}>
        <About 
            restaurant={currentRestaurant}
            details={details}
        />

        <Divider width={1}/>

        <Menu 
            constantFoods={foods}
            showCheckBox={true}
        />
        <Card 
          payment = {totalPayment}
          setcheckoutVisable = {setcheckoutVisable}
        />

        <Modal
            animationType="fade"
            visible={checkoutVisable}
            transparent={true}
        >
            <CheckOut 
                cardItems={cardItems}
                payment={totalPayment}
                loadingVisible = {loadingVisible}
                handleCheckOutBtn = {handleCheckOutBtn}
            />
        </Modal>

        <Modal
          animationType="fade"
          visible={orderCompletedVisable}
          transparent={false}
          style={{flex:1, backgroundColor: "white", }}
        >
          <OrderCompleted 
            setOrderCompletedVisable = {setOrderCompletedVisable}
          />
        </Modal>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default RestaurantDetails;