import React, { useState, useEffect } from "react";
import { Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from "react-native";
import { ScrollView, TextInput, TouchableHighlight } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Header from "../components/Header";
import Styles from "../components/Styles";
import userActions from "../redux/actions/userActions";
import axios from "axios";
import RNPickerSelect from 'react-native-picker-select';
import Loader from "../components/Loader";

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
        setNewUser({
            ...newUser,
            userPic:"https://cdn1.iconfinder.com/data/icons/web-ui-2/16/UI_Icons_Outline-38-512.png"
        })
        console.log(newUser)
        if(newUser.userName===""|| newUser.password==="" || newUser.firstName==="" 
        || newUser.lastName==="" ){
            console.log(`Fill all the fields`)
            return false;
        }
        var countryPic1= countries.find(country=>country.name===newUser.countryName).flag;
        newUser.countryPic=countryPic1;
        setErrors([]);
        
        const response = await userRegister(newUser);
        if (response && !response.sucess){
            setErrors([response.errors])
        }else{
            console.warn(`Welcome ${newUser.firstName}`)
            navigator.navigate("Home")
        }
    }
    if(countries.length===0){return <Loader/>}
    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={Styles.mainContainer}>
                <Header navigation={navigation}/>
                <View style={[Styles.centeredBox,{width:"100%", flex:1, backgroundColor:"yellow",borderWidth:1}]}>
                <ScrollView style={Styles.inputsScroll}>
                    <TextInput placeholder="firstName" onChangeText={(firstName)=>setNewUser({...newUser,firstName})} style={Styles.inputNewUser} value={newUser.firstName} />
                    <TextInput placeholder="lastName" onChangeText={(lastName)=>setNewUser({...newUser,lastName})} style={Styles.inputNewUser} value={newUser.lastName}/>
                    <TextInput placeholder="userName" onChangeText={(userName)=>setNewUser({...newUser,userName})} style={Styles.inputNewUser} value={newUser.userName}/>
                    <TextInput placeholder="password" onChangeText={(password)=>setNewUser({...newUser,password})} style={Styles.inputNewUser} secureTextEntry={true} value={newUser.password}/>
                    <RNPickerSelect
                        placeholder={{}}
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
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={()=> sendNewUser(newUser)}>
                    <Text>SEND</Text>
                    </TouchableHighlight>
                </ScrollView>
                </View>        
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

const mapDispatchToProps={
    userRegister: userActions.userRegister
}
export default connect(null,mapDispatchToProps)(SignUp);