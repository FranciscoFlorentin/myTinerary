import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { connect } from "react-redux";
import Styles from "./Styles";
import cityActions from "../redux/actions/citiyActions";

const Section=({getCities})=>{
    
    useEffect(() => {
        getCities();
    }, [])

    return(
        <View style={Styles.sectionContainer}>
            <View style={[Styles.centeredBox,styles.box]}>
                <Text>Texto 1</Text>
                <Text>Texto 2</Text>
            </View>
            <View style={[Styles.centeredBox,styles.box]}>
            <Image
                style={styles.images}
                source={require("../assets/amsterdam.jpg")}/>
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