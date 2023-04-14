import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function Info() {
  return (
    <View style={styles.container}>
        <Text>Info Page</Text>
    </View>
  )
}

export default Info;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})