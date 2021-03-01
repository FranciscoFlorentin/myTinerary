import React, { useState, useEffect} from "react";
import {Image, ImageBackground, KeyboardAvoidingView, Text, View } from "react-native";
import Styles from "../components/Styles";
import Header from "../components/Header";
import { FlatList, TextInput, TouchableHighlight } from "react-native-gesture-handler";
import { connect } from "react-redux";
import cityActions from "../redux/actions/citiyActions";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Loader from "../components/Loader";

const Cities=({navigation,getFilterCities,filteredCities})=>{
    const [filterValue,setFilterValue]=useState("");
    const [loaderStatus,setLoaderStatus]=useState(true);
    useEffect(() => {
        if(!filteredCities){getCities()}
    }, [])
    useEffect(() => {
        getFilterCities(filterValue)
        .then(response=>{if(response){setLoaderStatus(false)}})
    }, [filterValue])
    if(loaderStatus){return <Loader/>}

    return(
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={Styles.mainContainer}>
            <Header navigation={navigation}/>
            <View style={[Styles.centeredBox,{width:"100%", flex:0.3, backgroundColor:"yellow"}]}>
                <ImageBackground source={{uri:"https://static-wc.arcux.net/uploads/20200330104038/usa.jpg"}} style={Styles.image}>
                <TextInput placeholder="Search city" 
                    onChangeText={(value)=>setFilterValue(value)} placeholderTextColor="white" style={[Styles.inputText,{fontSize:30,backgroundColor:"#c7cacd59"}]} value={filterValue} />
                </ImageBackground>
            </View>
            <View style={{width:"100%", flex:0.7, backgroundColor:"white",borderWidth:1}}>
            {filteredCities.length===0 
            && <ImageBackground source={require("../assets/city404.jpg")} style={[Styles.image],{height:"90%"}} >
                <Text style={{fontSize:25, textAlign:"center",paddingTop:20}}>City not found, try another.</Text>
                </ImageBackground>}
            <FlatList
                data={filteredCities}
                keyExtractor={({ _id},index) => _id}
                renderItem={({ item }) => (
                    <View style={Styles.citiesList1}>
                        <View style={ [Styles.citiesList2,{width:"30%",borderRadius:40,padding:2}]}>
                            <Image source={{uri:item.cityPic}} style={[Styles.image,{borderRadius:40}]} imageStyle={{resizeMode: "cover"}}></Image>
                        </View>
                        <View style={ [Styles.citiesList2,{width:"50%"}]}>
                            <Text style={{fontSize:20}}>{item.cityName}</Text>
                        </View>
                        <View style={[Styles.citiesList2,{width:"20%"}]}>
                            <TouchableHighlight underlayColor="none" onPress={()=>navigation.navigate("itineraries",{_id: item._id,cityPic:item.cityPic,cityName:item.cityName})}>
                                <AntDesign name="right" color={"black"} size={40} />
                            </TouchableHighlight>
                        </View>
                    </View>
                )}
            />
            </View>          
    </KeyboardAvoidingView>
    )
}
const mapStateToProps=(state)=>{
    return{
        filteredCities:state.cityReducer.filteredCities
    }
}
const mapDispatchToProps={
    getCities: cityActions.getCities,
    getFilterCities:cityActions.getFilterCities
}


export default connect(mapStateToProps,mapDispatchToProps)(Cities);