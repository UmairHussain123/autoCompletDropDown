import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Touchable,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Button, List } from "react-native-paper";

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
  const [absenceTypeBorderBottomColor, setAbsenceTypeBorderBottomColor] =
    useState("black");
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
        }}
      >
        <TextInput
          // label="Absence Type"
          editable
          value={leaveVal}
          style={{
            width: 300,
            height: 50,
            borderWidth: 0.5,
            borderColor: "black",
            borderBottomColor: absenceTypeBorderBottomColor,
            borderBottomWidth: absenceTypeBorderBottomColor == "black" ? 1 : 2,
            borderRadius: 7,
            paddingHorizontal: 10,
          }}
          // right={<TextInput.Icon name="chevron-down" />}
          selectionColor={"#006e51"}
          placeholder="Absence Type"
          onChangeText={(text) => {
            setLeaveVal(text);
            setLeaveFlag(true);
            arryFilter(text);
          }}
          onFocus={() => {
            setLeaveFlag(true);
            arryFilter();
            setAbsenceTypeBorderBottomColor("#006e51");
          }}
          onBlur={() => {
            setAbsenceTypeBorderBottomColor("black");
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
                      }}
                    >
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
      <View style={{ marginTop: 140, marginRight: 200 }}>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeText}
          value={"ASDf"}
        />
        {/* <Text style={{ textTransform: "capitalize" }}>afas asdfa</Text> */}
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
