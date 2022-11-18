import React, {useContext} from "react";
import {SafeAreaView, Text, StyleSheet} from "react-native";
import {Button} from "@rneui/themed"
import AuthContext from "../../context/AuthContext"
import ToggleDrawerIcon from "../../components/ToggleDrawerIcon";

const Account = ({}) => {

  const {setAuthentication} = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
          <ToggleDrawerIcon />
          <Button
            title="Log out"
            buttonStyle={{
              backgroundColor: 'black',
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 30,
            }}
            containerStyle={{
              width: 200,
              alignSelf: "center",
              position: "absolute",
              bottom: "10%"
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
            onPress={() => {setAuthentication(false)}}
          />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Account;