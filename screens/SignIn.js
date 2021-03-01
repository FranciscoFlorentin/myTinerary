import React, { useState } from "react";
import { ImageBackground, Keyboard, KeyboardAvoidingView, Text, ToastAndroid, TouchableWithoutFeedback, View } from "react-native";
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
            setErrors([`Fill all the fields`]);
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
                <ImageBackground source={require("../assets/login.png")} style={[Styles.image]}>
                
                <Header navigation={navigation}/>
                <View style={[Styles.centeredBox,{width:"100%",flex:0.9,borderWidth:1,justifyContent:"flex-start"}]}>
                    <View style={{width:"80%",height:"40%",justifyContent:"flex-end"}}>
                        
                    {errors && errors.map(error=>(<Text style={{backgroundColor:"white", color:"red",fontSize:20}}>* {error}</Text>))}
                    </View>
                    <TextInput  placeholderTextColor="black" placeholder="username" onChangeText={(value)=>inputValues("userName",value)} style={Styles.inputNewUser} />
                    <TextInput placeholderTextColor="black" placeholder="password" onChangeText={(value)=>inputValues("password",value)} style={Styles.inputNewUser} secureTextEntry={true}/>
                    <TouchableHighlight
                        style={{borderWidth:1,margin:20,width:100,alignItems:"center",backgroundColor:"#00BFFF"}}
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => sendLogin(userRegistred)}>
                    <Text style={{fontSize:20}}>Login</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>navigation.navigate("SignUp")} style={{color:"#0000CD",backgroundColor:"#7FFFD4"}}>
                        <Text style={{fontSize:15}}>Don´t have an account? Create one!</Text>
                    </TouchableHighlight>
                </View>        
                </ImageBackground>
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