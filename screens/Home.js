import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import {View} from "react-native";
import Styles from "../components/Styles";

const Home=({navigation})=>{
    return(
        <View style={Styles.mainContainer}>
            <Header navigation={navigation}/>
            <Section navigation={navigation}/>
            <View style={Styles.footerContainer}></View>
        </View>
    )
}
export default Home;