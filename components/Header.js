import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import Styles from "./Styles";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Image, Text, ToastAndroid, View } from "react-native";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";

const Header=({navigation,loggedUser,logOut})=>{
    return(
        <View style={Styles.headerContainer}>
            <View style={[Styles.navHeader,Styles.centeredBox]}>
                <TouchableHighlight onPress={()=>navigation.openDrawer()} underlayColor="none">
                    <SimpleLineIcons name="menu" color={"black"} size={40} />
                </TouchableHighlight>
            </View>
            <View style={[Styles.titleHeader,Styles.centeredBox]}>
                <Text style={Styles.titleText}>MyTinerary</Text>
            </View>
            <View style={[Styles.perfilHeader,Styles.centeredBox]}>
                <View style={[Styles.perfilBorderRadius,Styles.centeredBox,{width:"80%",height:"50%"}]}>
                    {loggedUser 
                    ?<TouchableHighlight onPress={()=> logOut()} underlayColor="none" >
                        <Text>Logout</Text>
                      </TouchableHighlight> 
                    :<TouchableHighlight onPress={()=> navigation.navigate("SignIn")} underlayColor="none" >
                        <Text>Login</Text>
                     </TouchableHighlight>}    
                </View>
            </View>
        </View>
    )
}
const mapStateToProps= state=>{
    return {
        loggedUser:state.userReducer.loggedUser
    }
}
const mapDispatchToProps={
    logOut:userActions.logOut
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);