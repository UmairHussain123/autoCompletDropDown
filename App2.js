import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Contacts from "expo-contacts";

export default function App() {
  const [data1, setData1] = useState();
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });
        setData1(data);
        if (data.length > 0) {
          //   const khalid = data.filter((data) => {
          //     return data.name == "CE Khild";
          //   });
          //   console.log(
          //     data.map((item) => {
          //       return item;
          //     })
          //   );
          const contact = data[0];
          //   console.log(khalid);
          console.log(contact);
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      {/* {data1.map((item, index) => {
        console.log(item);
      })} */}
      <Text>Contacts Module Example</Text>
      <Text>Contacts Module Example</Text>
      <Text>Contacts Module Example</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
