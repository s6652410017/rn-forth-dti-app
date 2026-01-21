import { router } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Bmi() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/bmi");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/BmiLogo.png")}
        style={styles.imgLogo}
      />
      <Text style={[styles.appName, { fontSize: 40 }]}>BMI Calculator</Text>
      <Text style={[styles.appName, { fontSize: 20 }]}>คำนวณ BMI</Text>
      <ActivityIndicator
        size="large"
        color="#ffffff"
        style={{ marginTop: 70 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appName: {
    color: "#ffffff",
    marginTop: 10,
    fontFamily: "Kanit_700Bold",
  },
  imgLogo: { width: 200, height: 200 },
  container: {
    flex: 1,
    alignItems: "center", // จัดกึ่งกลางแนวตั้ง
    justifyContent: "center", // จัดกึ่งกลางแนวนอน
    backgroundColor: "#fd6030",
  },
});
