import { Image, StyleSheet, Text, View } from "react-native"

export const Menu = () => {
  return (
    <View style={style.container}>
        
       <View style={style.boxred}> 
       <Image style={style.imagen2} source={require('../img/doc.png')} /></View>
       <View style={style.boxyellow}>
       <Image style={style.imagen2} source={require('../img/factory.png')} />
       </View>
        <View style={style.boxpurple}>
        <Image style={style.imagen2} source={require('../img/mail.png')} />
        </View>
        
        <View style={style.boxgreen}>
        <Image style={style.imagen1} source={require('../img/menu.png')} />
        </View>
        <View style={style.boxOrange}>
    <Image style={style.imagen} source={require('../img/recursosH.jpg')} /></View>   
    </View>
  )
}
const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#B2BABB',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    container1:{
        
        backgroundColor:'#B2BABB',
        alignItems:'center'
    },

    boxpurple:{
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        // backgroundColor:'purple',
        // borderWidth:10,
        // borderColor:'white',
        position:'relative',
        bottom:'-40%',
        right:0,
        
    },
    boxred:{
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        // backgroundColor:'red',
        // borderWidth:10,
        // borderColor:'white',
        position:'relative',
       
     bottom:'-40%',
        right:0,
    },
     boxyellow:{
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        // backgroundColor:'yellow',
        // borderWidth:10,
        // borderColor:'white',
        position:'relative',
        
        bottom:'-40%',
        right:0,
    },
    //oxOrange
    boxOrange:{
        width:380,
        height:380,
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'orange',
        // borderWidth:10,
        // borderColor:'white',
        left:15,
        position:'absolute',
        top:90,
    
    },
boxgreen:{
    alignItems:'center',
justifyContent:'center',
    position:'absolute',
    backgroundColor:"green",
top:0,
bottom:0,
width:'100%',
height:'10%'
},
imagen1:{
    height:'100%',
    width:'100%',
},
imagen:{
height:'100%',
width:'100%',

},
imagen2:{
    height:'90%',
width:'90%',

}

})

// '#239B56 '