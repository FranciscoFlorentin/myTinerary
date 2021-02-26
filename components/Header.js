import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import Styles from "./Styles";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Text, View } from "react-native";

const Header=({navigation})=>{
    return(
        <View style={Styles.headerContainer}>
            <View style={[Styles.navHeader,Styles.centeredBox]}>
                <TouchableHighlight onPress={()=>navigation.openDrawer()} underlayColor="none">
                    <SimpleLineIcons name="menu" color={"black"} size={40} />
                </TouchableHighlight>
            </View>
            <View style={[Styles.titleHeader,Styles.centeredBox]}>
                <Text style={Styles.titleText}>MyTinerary1</Text>
            </View>
            <View style={[Styles.perfilHeader,Styles.centeredBox]}>
                <View style={[Styles.perfilBorderRadius,Styles.centeredBox,{width:"80%",height:"90%"}]}>
                    <TouchableHighlight onPress={()=> navigation.navigate('Cities')} underlayColor="none" >
                        <SimpleLineIcons name="user" color={"black"} size={40} />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}
export default Header;