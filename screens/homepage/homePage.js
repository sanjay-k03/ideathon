import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Dimensions, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Carousel } from 'react-native-auto-carousel';
import Title from '../title';

const ScreenWidth = Dimensions.get('screen').width;


function App({ navigation }) {

  const data = [
    { id: 1, source: 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600', text: 'Sasthamkotta' },
    { id: 2, source: 'https://images.pexels.com/photos/133682/pexels-photo-133682.jpeg?auto=compress&cs=tinysrgb&w=600', text: 'Kuttanad Lake' },
    { id: 3, source: 'https://images.pexels.com/photos/2108172/pexels-photo-2108172.jpeg?auto=compress&cs=tinysrgb&w=600', text: 'Ulsoor Lake' },
    { id: 4, source: 'https://images.pexels.com/photos/1126380/pexels-photo-1126380.jpeg?auto=compress&cs=tinysrgb&w=600', text: 'Shivsagar' },
    { id: 5, source: 'https://images.pexels.com/photos/105170/pexels-photo-105170.jpeg?auto=compress&cs=tinysrgb&w=600', text: 'Wular Lake' },
  ];


  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor={'#009DF7'} />
      <Title titleText={"Welcome"} />
      <View style={styles.carouselContainer}>
        <Carousel
          data={data}
          renderItem={item => (
            <TouchableOpacity key={item.id} style={styles.itemContainer}>
              <Image source={{ uri: item.source }} resizeMode='cover' style={styles.image} />
              <Text style={{
                color: '#000',
                fontFamily: 'Poppins-Regular',
                fontSize: 22,
                fontWeight: "500",
              }}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
        {/* <Button
          title="Go"
          onPress={() => navigation.navigate('Database')}
        /> */}
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.gridRow}>
          <TouchableOpacity style={styles.icon} onPress={()=>{navigation.navigate('Info')}}>
            <Image source={require('D:/Projects/ideathon/assets/icons/info.png')} style={styles.iconStyle} />
            <Text style={styles.iconTxt}>Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('D:/Projects/ideathon/assets/icons/account.png')} style={styles.iconStyle} />
            <Text style={styles.iconTxt}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('D:/Projects/ideathon/assets/icons/tuning.png')} style={styles.iconStyle} />
            <Text style={styles.iconTxt}>Tuning</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gridRow}>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('D:/Projects/ideathon/assets/icons/fund.png')} style={styles.iconStyle} />
            <Text style={styles.iconTxt}>Fund</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('D:/Projects/ideathon/assets/icons/report.png')} style={styles.iconStyle} />
            <Text style={styles.iconTxt}>Report</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('D:/Projects/ideathon/assets/icons/help.png')} style={styles.iconStyle} />
            <Text style={styles.iconTxt}>Help</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.announcementContainer}>
        <Text>Announcements Here!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  itemContainer: {
    justifyContent: 'center',
    height: '80%',
    alignItems: 'center',
    width: ScreenWidth,
  },
  carouselContainer: {
    width: '100%',
    height: '35%',
    marginTop:'1%',
  },
  image: {
    height: '90%',
    width: ScreenWidth * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: '5%',
  },
  bodyContainer: {
    height: '45%',
    width: '100%',
    marginTop: '2%',
    //borderTopLeftRadius: 30,
    //borderTopRightRadius: 30,
    //backgroundColor: '#009DF7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridRow: {
    flex: 1,
    //backgroundColor:'grey',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#fff',
    //padding:'1%',
    margin: '5%',
    borderRadius:20,
    width: ScreenWidth * 0.2,
  },
  announcementContainer: {
    height: '10%',
    width: '100%',
    backgroundColor: 'yellow',
  },
  iconStyle: {
    width: '50%',
    height: '30%',
    display: 'flex',
    resizeMode: 'contain'
  },
  iconTxt: {
    color: '#000',
    margin: '5%',
    fontSize: 14,
  }
});

export default App;
