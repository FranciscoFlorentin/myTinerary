import { combineReducers } from "redux";
import cityReducer from "../reducers/cityReducer";
import itineraryReducer from "../reducers/itineraryReducer";

const mainReducer=combineReducers({
    cityReducer,
    itineraryReducer
})

export default mainReducer;