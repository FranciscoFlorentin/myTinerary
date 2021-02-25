import 'react-native-gesture-handler';
import React from "react"
import Home from "./screens/Home";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Cities from "./screens/Cities";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import mainReducer from "./redux/reducers/mainReducer";
import { applyMiddleware, createStore } from 'redux';

const Drawer= createDrawerNavigator();
const store=createStore(mainReducer,applyMiddleware(thunk));

const App= () =>{
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} options={{headerShown:false }}/>
          <Drawer.Screen name="Cities" component={Cities} options={{ headerShown:false }}/>
          <Drawer.Screen name="SignIn" component={SignIn} options={{ headerShown:false }}/>
          <Drawer.Screen name="SignUp" component={SignUp} options={{ headerShown:false }}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;