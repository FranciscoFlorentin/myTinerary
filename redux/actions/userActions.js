import axios from "axios";
import { ToastAndroid } from "react-native";
const userActions={
    userRegister:(newUser)=>{
        return async (dispatch,getState)=>{
            const response=await axios.post("https://mytinerary-florentin.herokuapp.com/api/user/register",newUser)
            if(response && !response.data.sucess){
                return response.data
            }
            else {
                dispatch({type:"LOG_IN", payload: response.data})
            }
        }
    },
    logIn:(userRegistred)=>{
        return async (dispatch,getState)=>{
            const response = await axios.post("https://mytinerary-florentin.herokuapp.com/api/user/login",userRegistred)
            if(response && response.data.sucess){
                dispatch({type:"LOG_IN",payload:response.data})
                return response.data
            }
            else {
                return response.data
            }   
        }  
    },
    logInLS:(token)=>{
        return async (dispatch,getState)=>{
            try{ 
                const response= await axios.post("https://mytinerary-florentin.herokuapp.com/api/user/loginLS",{token},{
                headers:{
                    Authorization: `Bearer ${token}` 
                }})
                if(response.data.sucess){
                    dispatch({type:"LOG_IN", payload: {
                        response:{...response.data.response}
                    }})
                    return response.data.response
                }
            }catch(error){
                if(error.response.status===401){
                    alert("Access denied")
                    localStorage.clear()
                }
            }
        }
    },
    logOut:()=>{
        return (dispatch, getState)=>{
            
            {ToastAndroid.show(`Goodbye ${getState().userReducer.loggedUser.name}`,ToastAndroid.LONG)}
            dispatch({type:"LOG_OUT"})
        }
    }
}
export default userActions;