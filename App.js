import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import Expo, { Constants } from "expo";
import * as LocalAuthentication from "expo-local-authentication";

export default App = () => {
  //   state = {
  //     compatible: false,
  //     fingerprints: false,
  //     result: "",
  //   };
  const [compatible1, setCompatible1] = useState(false);
  const [fingerprint1, setFingerprint1] = useState(false);
  const [result, setResult] = useState("");
  useEffect(() => {
    checkDeviceForHardware();
    checkForFingerprints();
  }, []);
  //   componentDidMount() {
  //     this.checkDeviceForHardware();
  //     this.checkForFingerprints();
  //   }

  const checkDeviceForHardware = async () => {
    let compatible = await LocalAuthentication.hasHardwareAsync();
    console.log(compatible);
    setCompatible1(compatible);
  };

  const checkForFingerprints = async () => {
    let fingerprints = await LocalAuthentication.isEnrolledAsync();
    console.log(fingerprints);
    setFingerprint1(fingerprints);
  };

  const scanFingerprint = async () => {
    let resultLocal = await LocalAuthentication.authenticateAsync();
    console.log("Scan Result:", result);
    setResult(resultLocal);
  };

  showAndroidAlert = () => {
    Alert.alert(
      "Fingerprint Scan",
      "Place your finger over the touch sensor and press scan.",
      [
        {
          text: "Scan",
          onPress: () => {
            scanFingerprint();
          },
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel"),
          style: "cancel",
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Compatible Device? {compatible1 === true ? "True" : "False"}
      </Text>
      <Text style={styles.text}>
        Fingerprings Saved? {fingerprint1 === true ? "True" : "False"}
      </Text>
      <TouchableOpacity
        onPress={Platform.OS === "android" ? showAndroidAlert : scanFingerprint}
        style={styles.button}
      >
        <Text style={styles.buttonText}>SCAN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#ecf0f1",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 60,
    backgroundColor: "#056ecf",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 30,
    color: "#fff",
  },
});
