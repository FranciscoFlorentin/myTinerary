import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Header from "../components/Header";
import Itinerary from "../components/Itinerary";
import Loader from "../components/Loader";
import Styles from "../components/Styles";
import itineraryActions from "../redux/actions/itineraryActions";

const Itineraries=({route:{params:{_id}},navigation,getItinerariesByCityId,itinerariesByCity})=>{
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        getItinerariesByCityId(_id)
        .then(response=>setLoading(false))
    }, [])
    if(loading){return (<Loader/>)}
    return(
        <View style={Styles.mainContainer}>
            <Header navigation={navigation} />
            <View style={{width:"100%", flex:1, backgroundColor:"white",borderWidth:1}}>
            {itinerariesByCity.map(itinerary=>{
                return(
                <Itinerary key={itinerary._id} itinerary={itinerary}/>)})}
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