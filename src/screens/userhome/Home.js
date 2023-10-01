import styles from '../../css/auth/home';
import MapboxGL, { Logger } from '@rnmapbox/maps';
import themeContext from '../../Toggle/themeContext';
import { useNavigation } from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import React, { useEffect, useState, useContext } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { StatusBar, Text, Image, TouchableOpacity, View, PermissionsAndroid } from 'react-native';


Logger.setLogCallback(log => {
  const { message } = log;

  if (
    console.log('Request Failed due to a permanent error : Cancelled') ||
    console.log('Request Failed due to a permanent error : Socket Closed')
  ) {
    return true;
  }
  return false;
});

const Home = () => {

  const [mlat, setMLat] = useState(0);
  const [mlon, setMLon] = useState(0);

  useEffect(() => {
    requestLocationPermission()
  }, [])

  const navigation = useNavigation()
  const theme = useContext(themeContext)


  MapboxGL.setAccessToken("pk.eyJ1IjoicGF0aGFuNzciLCJhIjoiY2xsZGxvczFxMGF2ZjNub2J2MWV6OTN3bSJ9.zc3KSbSdatAKULUPFnWk3A")
  MapboxGL.setConnected(true);
  MapboxGL.setTelemetryEnabled(false);
  MapboxGL.setWellKnownTileServer('Mapbox')

  /*  */
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Location Permission',
          message:
            'App needs access to your Location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        GeoLctin()
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const GeoLctin = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setMLat(position.coords.latitude)
        setMLon(position.coords.longitude)
        console.log(mlat)
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }
  /*  */

  return (
    <>
      <StatusBar backgroundColor={theme.theme == 'dark' ? '#1b1b1b' : '#eee'} barStyle={theme.theme == 'dark' ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>

        <View style={styles.arrow_area}>
          <View style={styles.nav_notifi}>
            <TouchableOpacity style={styles.btn_align} activeOpacity={0.6} onPress={() => navigation.goBack()}>
              <MaterialIcons name='keyboard-arrow-left' style={[styles.name, { backgroundColor: theme.lightblack, color: theme.colorblue }]} />
            </TouchableOpacity>
            <Text style={[styles.categories, { color: theme.colorwhite }]}></Text>
          </View>
        </View>

        <MapboxGL.MapView
          style={styles.map_container}
          zoomEnabled={true}
          // styleURL="mapbox://styles/pathan77/clldng5yv00zc01pb8tpr3nuo"
          styleURL="mapbox://styles/pathan77/clldy8vi000zz01pl3wi886k5"
          // styleURL="mapbox://styles/pathan77/clldo1oom00zw01qs5anj5w73"
          // styleURL='mapbox://styles/pathan77/clldnsavu00zv01qs35ot5yk0'
          rotateEnabled={true}>
          <MapboxGL.Camera
            zoomLevel={15}
            // centerCoordinate={[10.181667, 36.806389]}
            centerCoordinate={[mlat, mlon]}
            pitch={40}
            animationMode={'flyTo'}
            animationDuration={6000}
          />
          <MapboxGL.PointAnnotation
            id="marker"
            coordinate={[mlat, mlon]}
          // coordinate={[10.181667, 36.806389]}
          >
            <View />
          </MapboxGL.PointAnnotation>
        </MapboxGL.MapView>
      </View >
    </>
  )
}

export default Home
