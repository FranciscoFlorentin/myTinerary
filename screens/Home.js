import React from "react";
import { Text, View } from "react-native";
import Styles from "../components/Styles";

const Home=()=>{
    return(
        <View style={Styles.mainView}>
            <View >
                <Text style={Styles.textTitle}>Hola</Text>
            </View>
        </View>
    )
}

export default Home;