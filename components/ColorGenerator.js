import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ToastAndroid,
} from "react-native";
import Block from "./Block";
import * as Clipboard from "expo-clipboard";
const ColorGenerator = () => {
  function random_rgb() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
  }
  const [color, setColor] = useState(random_rgb());
  const [generatedColors, setGeneratedColors] = useState([]);
  const handleClick = (color) => {
    Clipboard.setStringAsync(color);
    ToastAndroid.show("Color code copied !", ToastAndroid.SHORT);
  };
  return (
    <View style={{ marginVertical: 10 }}>
      <TouchableOpacity
        onPress={() => {
          setColor(random_rgb());
          setGeneratedColors((oldArray) => [...oldArray, color]);
        }}
      >
        <Text
          style={{
            marginVertical: 40,
            marginHorizontal: 20,
            paddingVertical: 20,
            textAlign: "center",
            borderWidth: 2,
            fontSize: 30,
            backgroundColor: "rgb(63,190,250)",
          }}
        >
          Generate a rgb color
        </Text>
      </TouchableOpacity>
      <FlatList
        style={{ height: 600 }}
        data={generatedColors}
        renderItem={({ item }) => {
          return <Block color={item} handleClick={handleClick} />;
        }}
      />
    </View>
  );
};

export default ColorGenerator;
