import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function Help() {
  return (
    <View style={styles.container}>
        <Text>Help Page</Text>
    </View>
  )
}

export default Help;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})