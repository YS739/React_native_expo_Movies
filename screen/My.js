import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const My = ({ navigation: { reset, navigate } }) => {
  return (
    <View>
      <Text>My</Text>
      <TouchableOpacity
        onPress={() =>
          reset({
            index: 0,
            routes: [
              {
                name: "Tabs",
                params: {
                  screen: "Movies",
                },
              },
            ],
          })
        }
      >
        <Text>Try unmounting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default My;
