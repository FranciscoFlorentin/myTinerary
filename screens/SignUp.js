import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Header from "../components/Header";
import Styles from "../components/Styles";

const SignIn=({navigation})=>{
    const [newUser,setNewUser] = useState({
        userFirstName:'',
        userLastName:'',
        userName:'',
        userPass:'',
        userImg:'',
        userRol:'',
        userPhone:'', 
        userPayPal:''
    })
    const read_input = (property,value) =>{
        setNewUser({
            ...newUser, 
            [property]:value
        }) 
    }
    
    // const send_data= async (e) =>{
    //     const {userFirstName,userLastName,userName,userPass,userImg,userRol,userPhone,userPayPal} = newUser
    //     const formSignUp= new FormData();
    //     formSignUp.append("userFirstName",userFirstName)
    //     formSignUp.append("userLastName",userLastName)
    //     formSignUp.append("userName",userName)
    //     formSignUp.append("userPass",userPass)
    //     formSignUp.append("imgFile",{
    //         uri: photoUri,
    //         type:"image/jpeg",
    //         name: "photo.jpg"
    //     })
    //     formSignUp.append("userRol",userRol)
    //     formSignUp.append("userPhone",userPhone)
    //     formSignUp.append("userPayPal",userPayPal)
        
    //     if(userFirstName==='' || userLastName===''|| userName ==='' || userPass==='' || userImg==='' ||userRol===''){
    //         setErrors([['All required(*) fields must be completed']])
    //         return false;
    //     }else if(dev===true && (userPhone==='' || userPayPal==='')){
    //         setErrors([['All required(*) fields must be completed']])
    //        return false;
    //     }
    // }
    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={Styles.mainContainer}>
            <Header navigation={navigation}/>
            <View style={[Styles.centeredBox,{width:"100%", flex:1, backgroundColor:"yellow",borderWidth:1}]}>
            <ScrollView style={Styles.inputsScroll}>
                <TextInput placeholder="firstName" onChangeText={(value)=>read_input("firstName",value)} style={Styles.inputNewUser} />
                <TextInput placeholder="lastName" onChangeText={(value)=>read_input("lastName",value)} style={Styles.inputNewUser} />
                <TextInput placeholder="userName" onChangeText={(value)=>read_input("userName",value)} style={Styles.inputNewUser} />
                <TextInput placeholder="password" onChangeText={(value)=>read_input("password",value)} style={Styles.inputNewUser} />
                <TextInput placeholder="userPic" onChangeText={(value)=>read_input("userPic",value)} style={Styles.inputNewUser} />
                <TextInput placeholder="countryName" onChangeText={(value)=>read_input("countryName",value)} style={Styles.inputNewUser} />
            </ScrollView>
            </View>        
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default SignIn;