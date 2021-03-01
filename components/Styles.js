
const Styles={
    mainContainer:{
        flex: 1,
        justifyContent: "space-evenly",
        backgroundColor: "#fff",
        paddingTop: 30,
        paddingBottom:10,
        paddingLeft:5,
        paddingRight:5,
        marginTop:10
    },
    // HEADER
    headerContainer:{
        flex: 0.1,
        backgroundColor: "#00BFFF",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    navHeader:{
        width:"25%"
    },
    titleHeader:{
        width:"50%"
    },
    perfilHeader:{
        width:"25%",
        height: "100%"
    },
    perfilBorderRadius:{
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 30
    },
    

    // FOOTER
   
    textTitle:{
        fontSize:40,
        color: "white",
    },
    // common styles
    centeredBox:{
        justifyContent: "center",
        alignItems: "center"
    },
    titleText:{
        fontSize:23
    },
    inputText:{
        borderWidth:1.5,
        borderColor: "white",
        backgroundColor:"transparent",
        fontSize: 30,
        height: "30%",
        width: "90%",
        textAlign:"center"
    },
    // CITIES
    citiesList1:{
        padding: 2,
        height: 90,
        flexDirection:"row"
    },
    citiesList2:{
        justifyContent:"center",
        alignItems:"center"
    },
    image: {
        flex: 1,
        width:"100%",
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "cover"
    },
    // SIGNUP 
    inputNewUser:{
        borderWidth:1,
        width: "80%",
        marginTop:15,
        backgroundColor:"#F0F8FF",
        textAlign:"center",
        textAlignVertical:"center"
    },
    inputsScroll:{
        width:"100%",
    },
    // Itineraries
    itineraryBox:{
        borderWidth:1,
        flex:0.33
    }
}

export default Styles;