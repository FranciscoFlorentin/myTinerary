import React from "react"
import {Provider } from 'react-redux';
import thunk from "redux-thunk";
import mainReducer from "./redux/reducers/mainReducer";
import { applyMiddleware, createStore } from 'redux';
import Navigator from "./components/Navigator";
import { BrowserRouter} from 'react-router-dom';
const store=createStore(mainReducer,applyMiddleware(thunk));

const App= () =>{
  return (
    <Provider store={store}>
        <Navigator/>
    </Provider>
  )
}

export default App;