const initialState={
    itinerariesByCity:[]
}
const itineraryReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ("ITINERARIES_BY_CITY"):
            return{
                ...state,
                itinerariesByCity: action.payload
            }
        case ("UPDATE_ITINERARIES"):
            const aux=updateItinerary(state.itinerariesByCity,action.payload);
            return {
                ...state,
                itinerariesByCity:aux
            }
        default:
            return state;
    }
}
export default itineraryReducer;