import React from "react";
import { Text, View } from "react-native";

const Itineraries=({route:{params:{_id}}})=>{
    return(
        <View>
            <Text>${_id}</Text>
        </View>
    )
}

export default Itineraries;