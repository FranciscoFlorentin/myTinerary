
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
        width:"25%"
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
    }
}

export default Styles;