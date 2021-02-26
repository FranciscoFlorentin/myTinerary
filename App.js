import 'react-native-gesture-handler';
import React from "react"
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Cities from "./screens/Cities";
import Itineraries from "./screens/Itineraries";
import Itinerary from "./components/Itinerary";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import mainReducer from "./redux/reducers/mainReducer";
import { applyMiddleware, createStore } from 'redux';

const Drawer= createDrawerNavigator();
const store=createStore(mainReducer,applyMiddleware(thunk));
const Stack= createStackNavigator();

const CitiesNavigator=()=>(
  <Stack.Navigator screenOptions={{headerShown:false }}>
    <Stack.Screen name="cities" component={Cities}/>
    <Stack.Screen name="itineraries" component={Itineraries}/>
    <Stack.Screen name="itinerary" component={Itinerary} />
  </Stack.Navigator>
)

const App= () =>{
  return (
    <Provider store={store}>
      <NavigationContainer styles={{backgroundColor:"black"}} screenOptions={{headerShown:false }}>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="Cities" children={CitiesNavigator}/>
          <Drawer.Screen name="SignIn" component={SignIn}/>
          <Drawer.Screen name="SignUp" component={SignUp}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;