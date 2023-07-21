import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { BarCodeScanner } from 'expo-barcode-scanner'; 
import { Linking } from 'react-native';

export default function Cam() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  const cameraRef = useRef(null); 

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, [permission]);

  const toggleCamera = () => {
    setCameraType(
      cameraType === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data);
  };

  const resetScanner = () => {
    setScanned(false);
    setScannedData(null);
  };

  return (
    <View style={styles.container}>
      {!scanned ? (
        <View style={styles.cameraContainer}>
          <BarCodeScanner
            ref={cameraRef}
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.camera}
          />
        </View>
      ) : (
        <View>
          <Text onPress={resetScanner} style={styles.scannedText}>
            Appuyez pour scanner à nouveau
          </Text>
          {scannedData && (
            <TouchableOpacity
              onPress={() => Linking.openURL(scannedData)}
              style={styles.linkContainer}
            >
              <Text style={styles.linkText}>{scannedData}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      <TouchableOpacity style={styles.toggleButton} onPress={toggleCamera}>
        <Ionicons
          name={
            cameraType === CameraType.back
              ? 'camera-reverse'
              : 'camera-reverse-outline'
          }
          size={30}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  toggleButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
  },
  scannedText: {
    textAlign: 'center',
    padding: 10,
  },
  linkContainer: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    marginTop: 20,
  },
  linkText: {
    color: 'blue',
    textAlign: 'center',
  },
});
