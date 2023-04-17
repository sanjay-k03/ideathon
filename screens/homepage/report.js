import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function Report() {
  return (
    <View style={styles.container}>
        <Text>Report Page</Text>
    </View>
  )
}

export default Report;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})