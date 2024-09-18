import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { CameraView, Camera } from "expo-camera";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

export default function Scan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [qrData, setQrData] = useState(null)

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarcodeScanned = ({ type, data }) => {
    setScanned(true);
    setQrData(data)
    // console.log(data)
};

  if (hasPermission === null) {
    return <Text>Requesting for camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ['aztec' , 'ean13' , 'ean8' , 'qr' , 'pdf417' , 'upc_e' , 'datamatrix' , 'code39' , 'code93' , 'itf14' , 'codabar' , 'code128' , 'upc_a'],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
          <StyledView className="flex-1 flex bg-white justify-center items-center">
            <StyledText className="-mt-12 mb-10 text-2xl">{qrData}</StyledText>
            <StyledPressable className="bg-blue-600 py-4 px-6 rounded-full shadow-md" onPress={() => setScanned(false)} >
            <StyledText className="text-white text-lg">Tap to Scan Again</StyledText>
            </StyledPressable>
        </StyledView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});