
const Styles={
    mainContainer:{
        flex: 1,
        justifyContent: "space-evenly",
        backgroundColor: "#fff",
        paddingTop: 30,
        paddingBottom:10,
        paddingLeft:5,
        borderWidth:4,
        paddingRight:5,
        marginTop:10
    },
    // HEADER
    headerContainer:{
        flex: 0.1,
        backgroundColor: "#16c79a",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 30
    },
    // SECTION
    sectionContainer:{
        flex: 1,
        backgroundColor: "beige",
        borderWidth: 1,
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
        borderWidth:1,
        padding: 2,
        height: 90,
        flexDirection:"row"
    },
    citiesList2:{ 
        borderWidth:1,
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
}

export default Styles;