import { Text, View } from "react-native";
import React from "react"
import Styles from "../components/Styles"

const Itinerary=({itinerary})=>{
    console.log(itinerary)
    return(
        <View style={Styles.itineraryBox}>
            <Text>{itinerary.itineraryName}</Text>
        </View>
    )
}
export default Itinerary;