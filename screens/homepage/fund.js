import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function Fund() {
  return (
    <View style={styles.container}>
        <Text>Fund Page</Text>
    </View>
  )
}

export default Fund;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})