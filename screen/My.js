import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView, Text } from "react-native";

const My = ({ navigation: { navigate } }) => {
  useFocusEffect(
    useCallback(() => {
      console.log("Focus");
      return () => {
        console.log("Blur");
      };
    }, [])
  );
  return (
    <ScrollView>
      <Text>My movies</Text>
    </ScrollView>
  );
};

export default My;

// Styled components
