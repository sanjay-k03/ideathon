import React, { useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import MainNavigator from './screens/route';

function App() {
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Needed',
          message: 'App needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permission Accessed');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn("Warning Error: ", err);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, [])
  
  return (
    <MainNavigator />
  );
}

export default App;