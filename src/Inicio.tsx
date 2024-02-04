import { Image, StyleSheet, Text, View } from "react-native"

export const Inicio = () => {
  return (
    <View style={style.container}>
        <View style={style.boxpurple}>
        <Image style={style.imagen1} source={require('../img/android.png')} />

        </View>
        <View style={style.boxOrange}>
        <Image style={style.imagen} source={require('../img/logo.png')} />
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

    boxpurple:{
        width: 400,
        height:100,
        //backgroundColor:'purple',
        //borderWidth:10,
        //borderColor:'white',
        position:'relative',
        alignItems:'center',
        top:690,
        right:0,
    },
    //oxOrange
    boxOrange:{
        width:280,
        height:280,
        //backgroundColor:'orange',
        //borderWidth:10,
        //borderColor:'white',
        left:0,
        position:'relative',
        top:120,
        alignItems:'center'
    },
imagen:{
  height:280,
  width:280,

},
imagen1:{
  
  height:70,
  width:245,

}

})

// '#239B56 '