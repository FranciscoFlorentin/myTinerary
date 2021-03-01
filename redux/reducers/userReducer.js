import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState={
    loggedUser:null
}
const userReducer=(state=initialState,action)=>{

    switch (action.type) {
        case ("LOG_IN"):
            AsyncStorage.setItem('name', action.payload.response.name)
            AsyncStorage.setItem('token', action.payload.response.token)
            AsyncStorage.setItem('id', action.payload.response.id)
            AsyncStorage.setItem('pic', action.payload.response.pic)

            return{
                ...state,
                loggedUser: action.payload.response
            }
            break;
        case ("LOG_OUT"):
            AsyncStorage.clear();
            return{
                ...state,
                loggedUser:null
            }
                break;    
        default:
            return state;
    }

}
export default userReducer;