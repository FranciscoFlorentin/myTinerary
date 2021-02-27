import React from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Header from "../components/Header";
import Styles from "../components/Styles";

const SignIn=({navigation})=>{
    return(
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={Styles.mainContainer}>
            <Header navigation={navigation}/>
            <View style={[Styles.centeredBox,{width:"100%", flex:1, backgroundColor:"yellow",borderWidth:1}]}>
                {/* <TextInput placeholder="Search city"  */}
                    {/* // onChangeText={(value)=>setFilterValue(value)} style={Styles.inputText} value={filterValue} /> */}
                
            </View>        
        </KeyboardAvoidingView>
    )
}

export default SignIn;