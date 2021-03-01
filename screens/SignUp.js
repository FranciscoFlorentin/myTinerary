import React, { useState, useEffect } from "react";
import { ImageBackground, Keyboard, KeyboardAvoidingView, Text, ToastAndroid, TouchableWithoutFeedback, View } from "react-native";
import { ScrollView, TextInput, TouchableHighlight } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Header from "../components/Header";
import Styles from "../components/Styles";
import userActions from "../redux/actions/userActions";
import axios from "axios";
import RNPickerSelect from 'react-native-picker-select';
import Loader from "../components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUp=({navigation,userRegister})=>{
    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all")
        .then(data=>setCountries(data.data))
        .catch(error=>console.log('Something went wrong, try later!'
        ))
        setNewUser({})
    }, [])
    const[countries,setCountries]=useState([]);
    const[errors,setErrors]=useState([]);
    const [newUser,setNewUser] = useState({firstName:'',lastName:'',userName:'',password:'',userPic:'',countryName:'',countryPic:'',googleUser:false})
    const sendNewUser= async (newUser) =>{
        if(newUser.userName===""|| newUser.password==="" || newUser.firstName==="" || newUser.lastName==="" ){
            setErrors([`Fill all the fields`])
            return false;
        }
        newUser.countryPic="https://www.ecestaticos.com/image/clipping/eea961a7672032a226a4aeaec011a6b1/brad-pitt-y-nicole-poturalski-han-puesto-punto-y-final-a-su-relacion.jpg",
        newUser.userPic="https://www.ecestaticos.com/image/clipping/eea961a7672032a226a4aeaec011a6b1/brad-pitt-y-nicole-poturalski-han-puesto-punto-y-final-a-su-relacion.jpg"
        setErrors([]);
        
        const response = await userRegister(newUser);
        if (response && !response.sucess){
            setErrors([response.errors])
            return false;
        }else{
            ToastAndroid.show(`Welcome ${response.response.name}`,ToastAndroid.LONG)
        }
    }
    if(countries.length===0){return <Loader/>}
    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={Styles.mainContainer}>
                <ImageBackground source={require("../assets/login1.jpg")} style={[Styles.image]}>
                <Header navigation={navigation}/>
                <View style={[Styles.centeredBox,{width:"100%", flex:0.9,borderWidth:1,justifyContent:"flex-start"}]}>
                    <View style={{width:"80%",height:"20%",justifyContent:"flex-end"}}>
                        {errors && errors.map(error=>(<Text key={error} style={{backgroundColor:"white", color:"red",fontSize:20}}>* {error}</Text>))}
                    </View>
                {/* <ScrollView style={Styles.inputsScroll}> */}
                    <TextInput placeholderTextColor="black" placeholder="firstname" onChangeText={(firstName)=>setNewUser({...newUser,firstName})} style={Styles.inputNewUser} value={newUser.firstName} />
                    <TextInput placeholderTextColor="black" placeholder="lastname" onChangeText={(lastName)=>setNewUser({...newUser,lastName})} style={Styles.inputNewUser} value={newUser.lastName}/>
                    <TextInput placeholderTextColor="black" placeholder="username" onChangeText={(userName)=>setNewUser({...newUser,userName})} style={Styles.inputNewUser} value={newUser.userName}/>
                    <TextInput placeholderTextColor="black" placeholder="password" onChangeText={(password)=>setNewUser({...newUser,password})} style={Styles.inputNewUser} secureTextEntry={true} value={newUser.password}/>
                    <View style={[Styles.inputNewUser,{borderWidth:1,width:"80%",height:30,placeholderTextColor:"black"}]}>
                        <RNPickerSelect
                            placeholder={{}}
                            useNativeAndroidPickerStyle={false}
                            items={countries.map(country=>(                            
                                {
                                    key: country.name,
                                    label:country.name,
                                    value:country.name,
                                    placeholder: country.name,
                                    selectedValue:country.name
                                }))
                            }
                            onValueChange={(countryName) => setNewUser({...newUser,countryName})}
                        />
                    </View>
                    <TouchableHighlight
                        style={{borderWidth:1,margin:20,width:100,alignItems:"center",backgroundColor:"#00BFFF"}}
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => sendNewUser(newUser)}>
                    <Text style={{fontSize:20}}>Sign Up</Text>
                    </TouchableHighlight>
                {/* </ScrollView> */}
                </View>        
                </ImageBackground>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

const mapDispatchToProps={
    userRegister: userActions.userRegister
}
export default connect(null,mapDispatchToProps)(SignUp);