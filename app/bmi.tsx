import { useState } from "react";
import {
    Alert,
    Image,
    Keyboard,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";

export default function Bmi() {
  //สร้าง state สำหรับเก็บค่าน้ำหนัก ส่วนสูง ผลลัพธ์ BMI และการแปรผล
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("0.00");
  const [resultText, setResultText] = useState("การแปรผล");

  //ฟังก์ชันปุ่ม Reset
  const headleResetPress = () => {
    Keyboard.dismiss(); //ซ่อนคีย์บอร์ด
    setHeight("");
    setWeight("");
    setResult("0.00");
    setResultText("การแปรผล");
  };

  //ฟังก์ชันปุ่ม คำนวณ
  const handleCalPress = () => {
    Keyboard.dismiss(); //ซ่อนคีย์บอร์ด

    //Validate
    if (weight.length === 0 || height.length === 0) {
      Alert.alert("คำเตือน", "ป้อนส่วนสูง");
      return;
    }
    if (weight === "0" || height === "0") {
      Alert.alert("คำเตือน", "ค่าน้ำหนักและส่วนสูงต้องไม่เป็น 0");
      return;
    }

    //คำนวณ BMI
    let heightValue = parseFloat(height) / 100; //แปลง cm เป็น m
    let weightValue = parseFloat(weight);
    let bmiValue = weightValue / (heightValue * heightValue);
    setResult(bmiValue.toFixed(2)); //แสดงผลลัพธ์ 2 ตำแหน่งทศนิยม

    //แปรผล BMI
    if (bmiValue < 18.5) {
      setResultText("ผอม");
    } else if (bmiValue < 23) {
      setResultText("ปกติ");
    } else if (bmiValue < 25) {
      setResultText("อ้วนเล็กน้อย");
    } else if (bmiValue < 30) {
      setResultText("อ้วนระดับ 1");
    } else {
      setResultText("อ้วนระดับ 2");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/Bmieiei.png")}
          style={styles.imgLogo}
        />
        {/* Card ป้อนน้ำหนัก ส่วนสูง และปุ่มคำนวณ */}
        <View style={styles.cardInput}>
          <Text style={styles.labelInput}>ป้อนน้ำหนัก (kg)</Text>
          <TextInput
            style={styles.TextInput}
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
          <View style={{ height: 15 }} />
          <Text style={styles.labelInput}>ป้อนส่วนสูง (cm)</Text>
          <TextInput
            style={styles.TextInput}
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />

          {/* ปุ่มรีเซ็ต และปุ่มคำนวณ */}
          <View style={{ flexDirection: "row", marginTop: 30, gap: 20 }}>
            <TouchableOpacity
              style={styles.btnReset}
              onPress={headleResetPress}
            >
              <Text style={styles.textbtn}>รีเซ็ต</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnCalculate}
              onPress={handleCalPress}
            >
              <Text style={styles.textbtn}>คำนวณ</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ผลลัพธ์ BMI */}
        <View style={styles.cardResult}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Kanit_700Bold",
              color: "#ffffff",
            }}
          >
            BMI
          </Text>
          <Text
            style={{
              fontSize: 40,
              fontFamily: "Kanit_700Bold",
              color: "#ff0000",
            }}
          >
            {result}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Kanit_400Regular",
              color: "#ffffff",
            }}
          >
            {resultText}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardResult: {
    borderWidth: 1,
    width: "80%",
    marginTop: 25,
    alignItems: "center",
    backgroundColor: "#003cff",
    borderRadius: 10,
    padding: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowColor: "#000000",
  },
  textbtn: {
    fontFamily: "Kanit_700Bold",
    fontSize: 16,
    color: "#ffffff",
  },
  btnReset: {
    flex: 1,
    //borderWidth: 1,
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#ff0000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowColor: "#000000",
  },
  btnCalculate: {
    flex: 2,
    //borderWidth: 1,
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#28f428",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowColor: "#000000",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#393838",
    padding: 13,
    borderRadius: 8,
  },
  labelInput: {
    fontFamily: "Kanit_400Regular",
    fontSize: 16,
    color: "#000000",
  },
  cardInput: {
    backgroundColor: "#ffffff",
    width: "80%",
    padding: 20,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowColor: "#000000",
    marginTop: 40,
  },
  imgLogo: {
    width: 120,
    height: 120,
    marginBottom: 40,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
