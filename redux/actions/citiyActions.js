const cityActions ={

    getCities: ()=>{
        return async (dispatch,getState)=>{
            fetch("https://mytinerary-florentin.herokuapp.com/api/cities")
            .then((response)=>response.json())
            .then(data=>dispatch({type: "ALL_CITIES",payload: data.response}))
            .catch(error=>console.error(error))
        }
    },
    getFilterCities:(inputValue)=>{
        return async (dispatch,getState)=>dispatch({type: "FILTER_CITIES", payload:inputValue})
    }
}
export default cityActions;