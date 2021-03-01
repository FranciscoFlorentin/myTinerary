import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Text, ToastAndroid, TouchableWithoutFeedback, View } from "react-native";
import { ScrollView, TextInput, TouchableHighlight } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Header from "../components/Header";
import Styles from "../components/Styles";
import userActions from "../redux/actions/userActions";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn=({navigation,logIn,loggedUser})=>{
    const [userRegistred,setUser]=useState({userName:"",password:""})
    const [errors,setErrors]=useState([]);

    const inputValues=(property,value)=>{
        setUser({
            ...userRegistred,
            [property]:value
        })
    }
    const sendLogin= async (userRegistred)=>{
        if(userRegistred.userName==="" || userRegistred.password===""){
            console.log(`Fill all the fields`);
            return false;
        }
        setErrors([]);
        logIn(userRegistred)
        .then(response=>{
            if (response && !response.sucess){setErrors([response.response])}
            else{
                console.log(response)
                ToastAndroid.show(`Welcome ${response.response.name}`,ToastAndroid.LONG)
            }})
        console.log(errors) 
    }
    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={Styles.mainContainer}>
                <Header navigation={navigation}/>
                <View style={[Styles.centeredBox,{width:"100%", flex:1, backgroundColor:"yellow",borderWidth:1}]}>
                <ScrollView style={Styles.inputsScroll}>
                    <TextInput placeholder="userName" onChangeText={(value)=>inputValues("userName",value)} style={Styles.inputNewUser} />
                    <TextInput placeholder="password" onChangeText={(value)=>inputValues("password",value)} style={Styles.inputNewUser} secureTextEntry={true}/>
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => sendLogin(userRegistred)}>
                    <Text>SEND</Text>
                    </TouchableHighlight>
                </ScrollView>
                </View>        
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}
const mapStateToProps=(state)=>{
    return{
        loggedUser: state.userReducer.loggedUser
    }
}
const mapDispatchToProps={
    logIn:userActions.logIn
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);