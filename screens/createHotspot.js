import React, { useEffect, useState, } from "react";
import { View, Text, StyleSheet, TouchableOpacity, PermissionsAndroid, Image } from "react-native";
import Geolocation from '@react-native-community/geolocation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
//import Mapbox, { PointAnnotation } from '@rnmapbox/maps';


//Mapbox.setAccessToken('pk.eyJ1Ijoic2FuamF5azAzIiwiYSI6ImNsZnhrNGJ4MTAxeGEzb21zNnZ2NHVidDMifQ.clgKR1Mv-trQQiSVYjlZdA');

export default function BotOperation() {

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


    const [latitude, setlatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [isFetched, setIsFetched] = useState(false);

    function fetchLocation() {
        Geolocation.getCurrentPosition(info => {
            console.log("info: ", info); //{"coords": {"accuracy": 899.9990234375, "altitude": 0, "heading": 0, "latitude": 37.4226711, "longitude": -122.0849872, "speed": 0}, "extras": {"networkLocationType": "cell"}, "mocked": false, "timestamp": 1679938635639}
            setlatitude(info.coords.latitude);
            setLongitude(info.coords.longitude);
            setIsFetched(true);
        });
    }
    const defaultStyle = {
        version: 8,
        name: 'Land',
        sources: {
            map: {
                type: 'raster',
                tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
                tileSize: 256,
                minzoom: 1,
                maxzoom: 19,
            },
        },
        layers: [
            {
                id: 'background',
                type: 'background',
                paint: {
                    'background-color': '#f2efea',
                },
            },
            {
                id: 'map',
                type: 'raster',
                source: 'map',
                paint: {
                    'raster-fade-duration': 100,
                },
            },
        ],
    };

    useEffect(() => {
        requestLocationPermission();
        fetchLocation();
    }, [])


    return (
        <View style={styles.Container}>
            <TouchableOpacity style={styles.search}>
                <FontAwesomeIcon icon={faSearch} color={'#434242'} size={22} />
                <Text style={{ color: '#434242' }}> Search</Text>
            </TouchableOpacity>
            <View style={styles.imgContainer}>
                {isFetched && <Text style={{ color: '#000' }}>latitude: {latitude} longitude: {longitude}</Text>}
                {/* <Mapbox.MapView 
                    style={{ flex: 1, width: '100%', height: '100%' }}
                    styleJSON={JSON.stringify(defaultStyle)}
                    // zoomEnabled={true}
                    // rotateEnabled={true}
                    // pitchEnabled={true}
                    // compassEnabled={true}
                    logoEnabled={false}
                /> */}
                {/* <MapboxGL.MapViewNative style={styles.image}>
                    <MapboxGL.Camera
                        zoomLevel={6}
                        centerCoordinate={[latitude, longitude]}
                    />
                    <MapboxGL.PointAnnotation
                        id='point'
                        coordinate={[latitude, longitude]}
                    />
                </MapboxGL.MapViewNative> */}
                {/* <Image source={{uri:'https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/609147088669907f652110b0_report-an-issue(about-maps).jpeg'}} style={styles.image} /> */}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#fff' }}>Add Location</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7'
    },
    search: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '90%',
        height: '8%',
        borderRadius: 23,
        paddingLeft: 25,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imgContainer: {
        paddingTop: '7%',
        height: '80%',
        width: '95%',
        backgroundColor: 'grey'
    },
    image: {
        width: "100%",
        height: "100%",

    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '10%'
    },
    button: {
        backgroundColor: '#009DF7',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        height: '80%',
        width: '90%',
    }
});
