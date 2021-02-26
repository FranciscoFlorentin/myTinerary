import React, { useState, useEffect} from "react";
import {Image, ImageBackground, KeyboardAvoidingView, Text, View } from "react-native";
import Styles from "../components/Styles";
import Header from "../components/Header";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { connect } from "react-redux";
import cityActions from "../redux/actions/citiyActions";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Loader from "../components/Loader";

const Cities=({navigation,getFilterCities,filteredCities})=>{
    const [filterValue,setFilterValue]=useState("");
    const [loaderStatus,setLoaderStatus]=useState(true);
    
    useEffect(() => {
        getFilterCities(filterValue)
        .then(response=>setLoaderStatus(false))
    }, [filterValue])
    
    if(loaderStatus){return <Loader/>}

    return(
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={Styles.mainContainer}>
            <Header navigation={navigation}/>
            <View style={[Styles.centeredBox,{width:"100%", flex:0.3, backgroundColor:"yellow",borderWidth:1}]}>
                <ImageBackground source={{uri:"https://static-wc.arcux.net/uploads/20200330104038/usa.jpg"}} style={Styles.image}>
                <TextInput placeholder="Search city" 
                    onChangeText={(value)=>setFilterValue(value)} style={Styles.inputText} value={filterValue} />
                </ImageBackground>
            </View>
            <View style={{width:"100%", flex:0.7, backgroundColor:"white",borderWidth:1}}>
            <FlatList
                data={filteredCities}
                keyExtractor={({ _id},index) => _id}
                renderItem={({ item }) => (
                    <View style={Styles.citiesList1}>
                        <View style={ [Styles.citiesList2,{width:"30%"}]}>
                            <Image source={{uri:item.cityPic}} style={Styles.image} imageStyle={{resizeMode: "cover"}}></Image>
                        </View>
                        <View style={ [Styles.citiesList2,{width:"50%"}]}>
                            <Text>{item.cityName}</Text>
                        </View>
                        <View style={[Styles.citiesList2,{width:"20%"}]}>
                            <AntDesign name="right" color={"black"} size={40} />
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