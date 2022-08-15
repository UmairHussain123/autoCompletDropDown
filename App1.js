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
      console.log(str.toUpperCase());
      leaveType = Leave_type.filter((leaveType) => {
        console.log(str.toUpperCase());
        if (!leaveType.title.toUpperCase().indexOf(str.toUpperCase())) {
          return true;
        }
      });
      setArr(leaveType);
    }
  };
  const [leaveVal, setLeaveVal] = useState("");
  const [leaveFlag, setLeaveFlag] = useState(false);
  const [attTypeId, setAttTypeId] = useState();
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignSelf: "center",
          alignContent: "center",
          // marginTop: 50,
          top: 100,
          position: "absolute",
          // zIndex: 100,
          // backgroundColor: "red",
        }}
      >
        <TextInput
          label="Absence Type"
          editable
          value={leaveVal}
          style={{ width: 300, height: 50 }}
          // right={<TextInput.Icon name="chevron-down" />}
          onChangeText={(text) => {
            setLeaveVal(text);
            setLeaveFlag(true);
            arryFilter(text);
          }}
          onFocus={() => {
            setLeaveFlag(true);
            arryFilter();
          }}
          onBlur={() => {
            setLeaveFlag(false);
            Leave_type.map((item, index) => {
              if (leaveVal.toUpperCase() == item.title.toUpperCase()) {
                console.log("item.id", item.id);
                setAttTypeId(item.id);
              }
            });
          }}
        />

        <View
          style={{
            position: "absolute",
            top: 50,
            height: 100,
            elevation: 1,
            zIndex: 1000,
          }}
        >
          <ScrollView style={{}} keyboardShouldPersistTaps={"always"}>
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
                        backgroundColor: "white",
                        // position: "relative",
                      }}
                    >
                      {/* <Button
                        onPress={() => {
                          setLeaveVal(item.title);
                          setLeaveFlag(false);
                        }}
                        color="black"
                        style={{ alignContent: "flex-start" }}
                      >
                        {item.title}
                      </Button> */}
                      <TouchableOpacity
                        onPress={() => {
                          setLeaveVal(item.title);
                          setAttTypeId(item.id);
                          setLeaveFlag(false);
                        }}
                        style={{ flex: 1 }}
                      >
                        <View>
                          <Text key={index}>{item.title}</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })
              : null}
          </ScrollView>
        </View>
      </View>
      <View style={{ position: "absolute" }}>
        <TextInput
          label="search fruit"
          // secureTextEntry
          style={{ width: 300, marginTop: 200 }}
          right={<TextInput.Icon name="chevron-down" />}
          onFocus={() => {
            console.log("press2");
          }}
        />
        <Text style={{ textTransform: "capitalize" }}>afas asdfa</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000000",
    alignItems: "center",
    // // justifyContent: "center",
    // zIndex: 100,
  },
});
