import React, { useEffect } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { connect } from "react-redux";
import Styles from "./Styles";
import cityActions from "../redux/actions/citiyActions";
import { TouchableHighlight } from "react-native-gesture-handler";

const Section=({getCities,navigation})=>{
    
    useEffect(() => {
        getCities();
    }, [])

    return(
        <View style={{flex:1}}>
            <View style={[Styles.centeredBox,styles.box]}>
                <ImageBackground source={{uri:"https://res.cloudinary.com/roombonus/image/upload/v1587380326/production/FirstPage/twm_img_hero1.jpg"}} style={Styles.image}>
                    <Text style={[Styles.textTitle,{color:"white",textAlign:"center",height:"35%"}]}>Become part of our world</Text>
                    <Text style={{fontSize:20,color:"white",textAlign:"center",alignContent:"center",textAlignVertical:"center",width:"100%",height:"20%"}}>Planning your next trip?</Text>
                    <TouchableHighlight underlayColor="none" style={{height:"40%",width:"100%"}} onPress={()=>navigation.navigate("cities")}>
                        <View style={{height:"100%",width:200,alignItems:"center",borderWidth:1,borderColor:"white",borderRadius:20}}>
                            <Text style={{color:"white",fontSize:30,padding:3}}>Explore cities</Text>
                        </View>
                    </TouchableHighlight>
                </ImageBackground>
            </View>
            <View style={[Styles.centeredBox,{width:"100%",height:"50%"}]}>
            <Image
                style={styles.images}
                source={require("../assets/login.jpg")}/>
            </View>
        </View>

    )
}
const styles={
    box:{
        width:"100%",
        height: "50%",
    },
    images:{
        width: "100%",
        height: "100%"
    }
}
const mapStateToProps=(state)=>{
    return{
        allCities:state.cityReducer.allCities
    }
}
const mapDispatchToProps={
    getCities: cityActions.getCities
}
export default connect(mapStateToProps,mapDispatchToProps)(Section);