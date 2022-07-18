import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
const Block = ({ color, handleClick }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => handleClick(color)}>
        <Text
          style={{
            marginHorizontal: 20,
            paddingVertical: 25,
            textAlign: "center",
            borderWidth: 2,
            fontSize: 20,
            backgroundColor: `${color}`,
          }}
        >
          {color}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Block;
