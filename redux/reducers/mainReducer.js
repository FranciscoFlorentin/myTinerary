import { combineReducers } from "redux";
import cityReducer from "../reducers/cityReducer";
import itineraryReducer from "../reducers/itineraryReducer";
import userReducer from "../reducers/userReducer";
const mainReducer=combineReducers({
    cityReducer,
    userReducer,
    itineraryReducer
})

export default mainReducer;