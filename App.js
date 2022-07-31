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

import React, { useEffect, useState } from "react";
import { Leave_type, LeaveReson } from "./assets/data";

export default function App() {
  // useEffect(() => {
  //   console.log("asdkfj");
  // }, []);

  const [arr, setArr] = useState(null);
  let leaveType;
  const arryFilter = (str) => {
    if (arr == null || !str) {
      setArr(Leave_type);
    } else {
      leaveType = Leave_type.filter((leaveType) => {
        // console.log("ret", !leaveType.title.indexOf(str));
        return !leaveType.title.indexOf(str);
      });
      setArr(leaveType);
    }
    // console.log("leaveTypes", leaveType);

    // if (arr == null) {
    //   setArr(fruits);
    // } else {
    //   const fruitFilter = fruits.filter((fruits) => {
    //     // return !fruits.indexOf(str);
    //     console.log(!fruits.title.indexOf(str));
    //   });
    //   setArr(fruitFilter);
    //   console.log(fruitFilter);
    // }
  };
  // arryFilter("SA Days");

  // console.log();
  const [leaveVal, setLeaveVal] = useState("");
  const [leaveFlag, setFruitFlag] = useState(false);
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
          value={leaveVal}
          style={{ width: 300, height: 50 }}
          right={<TextInput.Icon name="chevron-down" />}
          onChangeText={(text) => {
            setLeaveVal(text);
            setFruitFlag(true);
            arryFilter(text.toUpperCase());
          }}
          onFocus={() => {
            setFruitFlag(true);
            arryFilter();
          }}
          onBlur={() => {
            setFruitFlag(false);
          }}
        />

        <View style={{ position: "absolute", top: "15%", height: 100 }}>
          <ScrollView style={{}} keyboardShouldPersistTaps={true}>
            {leaveFlag
              ? arr.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        width: 300,
                        borderRadius: 1,
                        padding: 5,
                        elevation: 1,
                      }}
                    >
                      <Button
                        onPress={() => {
                          setLeaveVal(item.title);
                          setFruitFlag(false);
                        }}
                        color="black"
                        style={{ alignContent: "flex-start" }}
                      >
                        {item.title}
                      </Button>
                      {/* <TouchableOpacity
                        onPress={() => {
                          setLeaveVal(item.title);
                          setFruitFlag(false);
                        }}
                        style={{ flex: 1 }}
                      >
                        <View>
                          <Text key={index}>{item.title}</Text>
                        </View>
                      </TouchableOpacity> */}
                    </View>
                  );
                })
              : null}
          </ScrollView>
        </View>
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
