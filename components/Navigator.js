import 'react-native-gesture-handler';
import React from "react"
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Cities from "../screens/Cities";
import Itineraries from "../screens/Itineraries";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import { connect} from 'react-redux';
import userActions from '../redux/actions/userActions';
import { Button, ToastAndroid, Touchable } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer= createDrawerNavigator();
const Stack= createStackNavigator();

const Navigator = ({loggedUser,logInLS})=>{
    const CitiesNavigator=()=>(
      <Stack.Navigator screenOptions={{headerShown:false }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="cities" component={Cities}/>
        <Stack.Screen name="itineraries" component={Itineraries}/>
      </Stack.Navigator>
    )
    if(!loggedUser){ 
      AsyncStorage.getItem("token")
      .then(tokenLS=>{if(tokenLS){
        logInLS(tokenLS)
        .then(response=>
          ToastAndroid.show(`Welcome ${response.name}`,ToastAndroid.LONG))}})
    }
    return(
        <NavigationContainer styles={{backgroundColor:"black"}} screenOptions={{headerShown:false }}>
        <Drawer.Navigator >
          <Drawer.Screen name="Home"  children={CitiesNavigator}/>
          {!loggedUser && <>
          <Drawer.Screen name="SignIn" component={SignIn}/>
          <Drawer.Screen name="SignUp" component={SignUp}/>
          </>}
        </Drawer.Navigator>
       </NavigationContainer>
    )
}
const mapStateToProps=(state)=>{
    return {
      loggedUser:state.userReducer.loggedUser
    }
  }
  const mapDispatchToProps={
    logInLS: userActions.logInLS
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Navigator);