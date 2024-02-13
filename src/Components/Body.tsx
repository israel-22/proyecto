import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native'

export const Body = (props:any) => {
 const {height}=useWindowDimensions();

    return (
    <View style={{height:height*0.88,...style.container}}>
    {props.children}
    </View>
  )
}
const style=StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        paddingHorizontal:30,
        paddingVertical:30

    },
})