import React, { useEffect, useState } from "react";
import { ImageBackground, KeyboardAvoidingView, Text, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Header from "../components/Header";
import Itinerary from "../components/Itinerary";
import Styles from "../components/Styles";
import itineraryActions from "../redux/actions/itineraryActions";

const Itineraries=({route:{params:{_id,cityName,cityPic}},navigation,getItinerariesByCityId,itinerariesByCity,allCities,getCities})=>{
    
    useEffect(() => {
        getItinerariesByCityId(_id)
    }, [])

    return(
        <View style={Styles.mainContainer}> 
        <Header navigation={navigation} />
        <View style={{flex:0.3}}>
            <ImageBackground source={{uri:cityPic}} style={Styles.image}>
                <Text style={{backgroundColor:"white",opacity:0.8,color:"black",width:"100%",textAlign:"center",fontSize:30}}>{cityName}</Text>
            </ImageBackground>
        </View>
        <View style={{flex:0.6}}>
            {itinerariesByCity.map(itinerary=>(<Itinerary key={itinerary._id} itinerary={itinerary}/>))}
            {itinerariesByCity.length===0 
            && <ImageBackground source={require("../assets/notItineraries.png")} style={[Styles.image,{height:"90%"}]} >
                <Text style={{fontSize:30, textAlign:"center",paddingTop:20}}>We don't have itineraries for this city yet</Text>
                </ImageBackground>}
        </View>
        </View>
    )
}
const mapStateToProps=state=>{
    return {
        itinerariesByCity: state.itineraryReducer.itinerariesByCity
    }
}
const mapDispatchToProps={
    getItinerariesByCityId: itineraryActions.getItinerariesByCityId
}
export default connect(mapStateToProps,mapDispatchToProps)(Itineraries);