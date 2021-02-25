import React from "react";
import { Image, Text, View } from "react-native";
import Styles from "../components/Styles";
import Header from "../components/Header";
import { TextInput } from "react-native-gesture-handler";

const Cities=({navigation})=>{
    return(
        <View style={Styles.mainContainer}>
            <Header navigation={navigation}/>
            <View style={[Styles.centeredBox,{width:"100%", flex:0.3, backgroundColor:"yellow"}]}>
                <TextInput placeholder="Search city"/>
            </View>
            <View style={{width:"100%", flex:1, backgroundColor:"blue"}}>

            </View>
        </View>
    )
}

export default Cities;