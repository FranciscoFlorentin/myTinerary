const initialState={
    allCities:[],
    filteredCities:[]
};

const cityReducer=(state=initialState,action)=>{
    switch(action.type){
        case ("ALL_CITIES"):
        return{
            ...state,
            cities: action.payload,
            filteredCities: action.payload
        }
        case("FILTER_CITIES"):
        return{ 
            ...state,
            filteredCities:state.cities.filter(
                city=>city.cityName.toUpperCase().indexOf(action.payload.toUpperCase().trim())===0
            )
        }
        default:
            return state;
    }
}
export default cityReducer;