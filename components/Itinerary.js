import { Button, Image, Text, View } from "react-native";
import React from "react"
import Styles from "../components/Styles"
import { useState } from "react/cjs/react.development";

const Itinerary=({itinerary})=>{
    console.log(itinerary)
    return(
        <View style={[Styles.itineraryBox,{flexDirection:"row",justifyContent:"space-evenly",backgroundColor:"#B0E0E6"}]}>
            <View style={{height:"100%",width:"33.3%",padding:10}}>
                <Image style={[Styles.image,{borderRadius:40}]} imageStyle={{resizeMode: "cover"}} source={{uri:itinerary.userPicName}}/>
                <Text >{itinerary.userName}</Text>
            </View>
            <View style={{height:"100%",width:"33.3%"}} >
                <Text style={{height:"30%",textAlign:"center",textAlignVertical:"center",borderWidth:1,borderRadius:10,backgroundColor:"#00BFFF35"}}>{itinerary.itineraryName}</Text>
                <View style={{height:"70%",alignItems:"center",justifyContent:"center"}}>
                    {itinerary.hashtag.map((hashtag,index)=>(<Text key={index}>{hashtag}</Text>))}
                </View>
                
            </View>
            <View style={{height:"100%",width:"33.3%",justifyContent:"space-around",alignItems:"center"}}>
                <Text>♥️ {itinerary.likes}</Text>
                <Text>⏰ {itinerary.duration}</Text>
                <Text>{Array(itinerary.price).fill("💸")}</Text>
            </View>
        </View>
    )
}
export default Itinerary;