import { Image, StyleSheet, Text, View } from "react-native"

export const Formulario = () => {
  return (
    <View style={style.container}>
        <Text style={style.Text}>Iniciar Sesion</Text>
        {/* <View style={style.boxpurple}></View> */}
        <View style={style.boxgreen}>
        <Image style={style.imagen1} source={require('../img/menu.png')} />

        </View>
        <View style={style.boxOrange}>
        <Image style={style.imagen} source={require('../img/login.jpg')} />
            </View>   
    </View>
  )
}
const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#B2BABB',
        alignItems:'center'
    },

    // boxpurple:{
    //     width:200,
    //     height:100,
    //     backgroundColor:'purple',
    //     borderWidth:10,
    //     borderColor:'white',
    //     position:'relative',
    //     alignItems:'center',
    //     top:'75%',
    //     right:0,
    // },
    //oxOrange
    boxOrange:{
        width:280,
        height:280,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'orange',
        borderWidth:10,
        borderColor:'white',
        left:0,
        position:'relative',
        top:120
    },
boxgreen:{
//backgroundColor:"green",
alignItems:'center',
justifyContent:'center',
top:-40,
bottom:0,
width:'100%',
height:'10%'
},
Text:{
    top:'30%',
    fontSize:35
},
imagen:{
    height:'220%',
    width:'200%',
},
imagen1:{
    height:'100%',
    width:'100%',
}
})

// '#239B56 '