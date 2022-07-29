import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Touchable,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Button, TextInput, List } from "react-native-paper";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

import React, { useEffect, useState } from "react";
import { Leave_type, LeaveReson } from "./assets/data";

export default function App() {
  useEffect(() => {
    console.log("asdkfj");
  }, []);
  const fruits = [
    "apple pine",
    "apple",
    "aapples",
    "mango",
    "banana",
    "orange",
    "appless",
    "pears",
    "citrusStone",
    "fruitTropical",
    "berries",
    "melons",
  ];
  const [arr, setArr] = useState(null);
  const arryFilter = (str) => {
    if (arr == null) {
      setArr(fruits);
    } else {
      const fruitFilter = fruits.filter((fruits) => {
        return !fruits.indexOf(str);
      });
      setArr(fruitFilter);
      console.log(fruitFilter);
    }
  };
  // arryFilter("a");
  const [fruitVal, setFruitVal] = useState("");
  const [fruitFlag, setFruitFlag] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignSelf: "center",
          alignContent: "center",
          marginTop: 50,
        }}
      >
        <TextInput
          label="search fruit"
          editable
          value={fruitVal}
          style={{ width: 300, height: 50 }}
          right={<TextInput.Icon name="chevron-down" />}
          onChangeText={(text) => {
            setFruitVal(text);
            setFruitFlag(true);
            arryFilter(text);
          }}
          onFocus={() => {
            setFruitFlag(true);
            arryFilter();
          }}
          onBlur={() => {
            setFruitFlag(false);
          }}
        />
        {/* <ScrollView style={{height:500}}> */}

        <View style={{ position: "absolute", top: "15%", height: 100 }}>
          <ScrollView style={{}} keyboardShouldPersistTaps={true}>
            {fruitFlag
              ? arr.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        // borderBottomWidth: 1,
                        // zIndex: 1000,
                        width: 300,
                        // marginTop: 5,
                        padding: 5,
                        elevation: 3,
                        // position: "absolute",
                        // top: 100,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          setFruitVal(item);
                          setFruitFlag(false);
                        }}
                      >
                        <View>
                          <Text key={index}>{item}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })
              : null}
          </ScrollView>
        </View>
        {/* </ScrollView> */}
        {/* <Text>Apple</Text> */}
      </View>
      <TextInput
        label="search fruit"
        // secureTextEntry
        style={{ width: 300 }}
        right={<TextInput.Icon name="chevron-down" />}
        onFocus={() => {
          console.log("press2");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000000",
    alignItems: "center",
    // // justifyContent: "center",
  },
});
