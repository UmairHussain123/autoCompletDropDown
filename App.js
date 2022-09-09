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
import { List, Button, Menu, Provider, Divider } from "react-native-paper";

import React, { useEffect, useState } from "react";
import { Leave_type, LeaveReson } from "./assets/data";

export default function App() {
  // useEffect(() => {
  //   console.log("asdkfj");
  // }, []);
  const [visibleSecond, setVisibleSecond] = React.useState(false);
  // const [typeOf, setTypeOf] = useState("");
  const [type, setType] = useState("");
  const openMenuSecond = () => setVisibleSecond(true);
  const closeMenuSecond = () => setVisibleSecond(false);

  const [attResonId, setAttResonId] = useState();
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
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <Provider>
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
            editable
            value={leaveVal}
            style={{
              // minWidth: 300,
              // maxWidth: 350,
              width: 300,
              height: 50,
              borderWidth: 0.5,
              borderColor: "black",
              borderBottomColor: absenceTypeBorderBottomColor,
              borderBottomWidth:
                absenceTypeBorderBottomColor == "black" ? 1 : 2,
              borderRadius: 7,
              paddingHorizontal: 10,
            }}
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
              setLeaveFlag(false);
              Leave_type.map((item, index) => {
                if (leaveVal.toUpperCase() == item.title.toUpperCase()) {
                  console.log("item.id", item.id);
                  setAttTypeId(item.id);
                }
              });
              setAbsenceTypeBorderBottomColor("black");
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
                            console.log(attTypeId);
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

        <View
          style={{
            // paddingTop: 200,
            marginTop: 200,
            flexDirection: "row",
            justifyContent: "center",
            borderWidth: 0.5,
            borderRadius: 7,
            justifyContent: "space-between",
            width: 300,
          }}
        >
          <Text
            style={{
              alignSelf: "center",

              fontSize: 15,
              fontWeight: "normal",
              marginLeft: 10,
            }}
          >
            Absence Reason
          </Text>
          <Menu
            style={{}}
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Button onPress={openMenu} style={{ width: 200 }}>
                {type}
              </Button>
            }
          >
            {LeaveReson.map((val, index) => {
              if (val.AbsAttTypeID == attTypeId) {
                return (
                  <View>
                    {val.typeName.map((item, ind) => {
                      console.log("true dddd", item.title);
                      return (
                        <View>
                          <Menu.Item
                            onPress={() => {
                              setType(item.title);
                              setAttResonId(item.id);
                              closeMenu(false);
                            }}
                            title={item.title}
                          />
                        </View>
                      );
                    })}
                  </View>
                );
              }
            })}
          </Menu>
        </View>
        <TextInput></TextInput>
      </View>
    </Provider>
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
