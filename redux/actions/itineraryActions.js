import axios from "axios"

const itineraryActions ={
    getItinerariesByCityId: (cityId)=>{
        return async (dispatch,getState)=>{
            axios.get(`https://mytinerary-florentin.herokuapp.com/api/itineraries/by_city/${cityId}`)
            .then(response=>dispatch({type: "ITINERARIES_BY_CITY",payload: response.data.response}))
            .catch(error=>console.log(error))
        }
    }
}

export default itineraryActions;