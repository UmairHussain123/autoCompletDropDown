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
import AutoComplete from "./Component/AutoComplete";

export default function App() {
  // useEffect(() => {
  //   console.log("asdkfj");
  // }, []);
  // const [visibleSecond, setVisibleSecond] = React.useState(false);
  // // const [typeOf, setTypeOf] = useState("");
  // const [type, setType] = useState("");
  // const openMenuSecond = () => setVisibleSecond(true);
  // const closeMenuSecond = () => setVisibleSecond(false);

  // const [attResonId, setAttResonId] = useState();
  // const [arr, setArr] = useState(null);
  // let leaveType;
  // const arryFilter = (str) => {
  //   if (arr == null || !str) {
  //     setArr(Leave_type);
  //   } else {
  //     console.log(str.toUpperCase());
  //     leaveType = Leave_type.filter((leaveType) => {
  //       console.log(str.toUpperCase());
  //       if (!leaveType.title.toUpperCase().indexOf(str.toUpperCase())) {
  //         return true;
  //       }
  //     });
  //     setArr(leaveType);
  //   }
  // };
  // const [leaveVal, setLeaveVal] = useState("");
  // const [leaveFlag, setLeaveFlag] = useState(false);
  // const [attTypeId, setAttTypeId] = useState();
  // const [absenceTypeBorderBottomColor, setAbsenceTypeBorderBottomColor] =
  //   useState("black");
  // const [visible, setVisible] = React.useState(false);

  // const openMenu = () => setVisible(true);
  const apiCall = () => {
    // var requestOptions = {
    //   method: "GET",
    // };

    fetch(
      "http://piacconnect.piac.com.pk/piamobileApp/services.asmx/AppVersion?pno=60987&tokenid=C42CBFCFFB25F16A3685931364C3E27E&action=get&version=e",
      // requestOptions
      {
        method: "GET",
      }
    )
      .then((response) => {
        console.log(response.json());
        // response.json();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  // const closeMenu = () => setVisible(false);
  return (
    <View>
      <Button
        style={{ marginTop: 200 }}
        mode="contained"
        onPress={() => {
          apiCall();
        }}
      >
        call
      </Button>
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
