import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Platform,
  Text,
  View,
  PermissionsAndroid,
  Alert,
  Pressable,
  Image,
  ImageBackground,
} from 'react-native';
import { WebView } from 'react-native-webview';
import * as Location from 'expo-location';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import Estilos from '../assets/Estilos/Estilos';
import { useFocusEffect } from '@react-navigation/native';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [permissionRequested, setPermissionRequested] = useState(false);
  const [webviewKey, setWebviewKey] = useState(0);
  const webViewRef = useRef(null);

  const requestLocationPermission = useCallback(async () => {
    console.log('Requisitando permissão de localização atual');
    if (Platform.OS === 'android') {
      await requestLocationPermissionAndroid();
    } else {
      await requestLocationPermissionIOS();
    }
    setPermissionRequested(false);
  }, [requestLocationPermissionAndroid, requestLocationPermissionIOS]);

  const handleWebViewNavigation = useCallback((event) => {
    const url = event?.nativeEvent?.url;

    const { navigationState } = event;
    if (
      navigationState &&
      navigationState.url &&
      navigationState.url.includes('https://find-pets.infinityfreeapp.com/')
    ) {
      if (navigationState.loading === false) {
        console.log('Page loaded, resetting permissionRequested...');
        setPermissionRequested(false);
      }
    }
  }, []);

  const handleWebViewMessage = useCallback(async (event) => {
    const pdfBase64 = event.nativeEvent.data;
    console.log('Recebendo documento pdf da webview');
    try {
      const pdfUri = `${FileSystem.documentDirectory}Find Pets - Anúncio Animal.pdf`;
      console.log('Criando pdf em cache:', pdfUri);
      await FileSystem.writeAsStringAsync(pdfUri, pdfBase64, {
        encoding: FileSystem.EncodingType.Base64,
      });
      console.log('Compartilhando PDF...');
      await Sharing.shareAsync(pdfUri, {
        mimeType: 'application/pdf',
        dialogTitle: 'Share PDF',
      });
    } catch (error) {
      console.error('Error sharing PDF:', error);
    }
  }, []);

  const requestLocationPermissionAndroid = useCallback(async () => {
    console.log('Requisitando permissão de localização no android');
    if (
      !(await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ))
    ) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message:
              'This app needs access to your location to function properly.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
          Alert.alert('Location permission granted');
        } else {
          console.log('Location permission denied');
          Alert.alert('Location permission denied');
          setErrorMsg('Permission to access location was denied');
        }
      } catch (err) {
        console.error('Error requesting location permission:', err);
      }
    } else {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        setErrorMsg('Permission to access location was denied');
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        console.log('Localização obtida:', location);
        setLocation(location);
      } catch (error) {
        console.log('Localização não obtida:', error);
      }
    }
  }, []);

  const requestLocationPermissionIOS = useCallback(async () => {
    console.log('Requisitando permissão de localização no IOS');
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      setErrorMsg('Permission to access location was denied');
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync({});
      console.log('Location obtained:', location);
      setLocation(location);
    } catch (error) {
      console.error('Error getting location:', error);
    }
  }, []);

  const goHome = useCallback(() => {
    setWebviewKey((prevKey) => prevKey + 1);
    requestLocationPermission();
  }, [setWebviewKey, requestLocationPermission]);

  useFocusEffect(
    useCallback(() => {
      requestLocationPermission();
    }, [requestLocationPermission])
  );

  return (
    <View style={Estilos.findcontainer}>
      <WebView
        key={webviewKey}
        ref={webViewRef}
        source={{ uri: 'https://find-pets.infinityfreeapp.com/' }}
        onNavigationStateChange={handleWebViewNavigation}
        onMessage={handleWebViewMessage}
        javaScriptEnabled={true}
      />

      {errorMsg && <Text style={Estilos.finderrorText}>{errorMsg}</Text>}

      <View style={Estilos.findtabContainer}>
        <TabIcon
          onPress={goHome}
          icon={require('../assets/imagens/findpets.png')}
        />
      </View>
    </View>
  );
}

const TabIcon = React.memo(({ onPress, icon }) => (
  <Pressable style={Estilos.findtabIconContainer} onPress={onPress}>
    <Image source={icon} style={Estilos.findtabiconimageweb} />
  </Pressable>
));
