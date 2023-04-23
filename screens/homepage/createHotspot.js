import React, { useEffect, useState, } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Geolocation from '@react-native-community/geolocation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MapLibreGL from '@rnmapbox/maps';

export default function CreateHotspot() {
    MapLibreGL.setWellKnownTileServer(MapLibreGL.TileServers.MapLibre);
    MapLibreGL.setAccessToken(null);

    const [coords, setCoords] = useState([0, 0]);
    const [isFetched, setIsFetched] = useState(false);

    function fetchLocation() {
        Geolocation.getCurrentPosition(info => {
            console.log("info: ", info); //{"coords": {"accuracy": 899.9990234375, "alt": 0, "heading": 0, "lat": 37.4226711, "long": -122.0849872, "speed": 0}, "extras": {"networkLocationType": "cell"}, "mocked": false, "timestamp": 1679938635639}
            setCoords([info.coords.longitude, info.coords.latitude]);
            console.log("Coords: ", coords);
            setIsFetched(true);
        }, err => {
            if (err.message === "No location provider available.") {
                Alert.alert('Cannot fetch Location', 'Turn on Location', [
                    {
                        text: 'OK', onPress: () => {
                            console.log('alert clossed');
                            fetchLocation();
                        }
                    }
                ]);
            }
        });
    }

    useEffect(() => {
        fetchLocation();
    }, [])


    return (
        <View style={styles.Container}>
            <TouchableOpacity style={styles.search}>
                <FontAwesomeIcon icon={faSearch} color={'#434242'} size={22} />
                <Text style={{ color: '#434242' }}> Search</Text>
            </TouchableOpacity>
            <View style={styles.imgContainer}>
                {isFetched && <MapLibreGL.MapView
                    style={{ flex: 1 }}
                    styleURL={"https://api.maptiler.com/maps/streets-v2/style.json?key=rN4C1NoyCAA7EaM8knBS"}
                    logoEnabled={false}
                    attributionPosition={{ bottom: 5, right: 5 }}>
                    <MapLibreGL.Camera
                        defaultSettings={{ centerCoordinate: coords, zoomLevel: 13 }}
                    />
                </MapLibreGL.MapView>}
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
        flex: 1,
        paddingTop: '7%',
        height: '80%',
        width: '100%',
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
