import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { YELLOW_COLOR, PURPLE_COLOR } from "../common/color";

const My = ({ navigation: { reset, navigate, setOptions } }) => {
  const isDark = useColorScheme() === "dark";

  // const logout = () => {
  //   signOut(authService)
  //     .then(() => {
  //       console.log("로그아웃 성공");
  //       navigate("Movies");
  //     })
  //     .catch((err) => alert(err));
  // };

  // useFocusEffect(
  //   useCallback(() => {
  //     if (!authService.currentUser) {
  //       reset({
  //         index: 1,
  //         routes: [
  //           {
  //             name: "Tabs",
  //             params: {
  //               screen: "Movies",
  //             },
  //           },
  //           {
  //             name: "Stacks",
  //             params: {
  //               screen: "Login",
  //             },
  //           },
  //         ],
  //       });
  //       return;
  //     }

  //     setOptions({
  //       headerRight: () => {
  //         return (
  //           <TouchableOpacity style={{ marginRight: 10 }} onPress={logout}>
  //             <Text style={{ color: isDark ? YELLOW_COLOR : PURPLE_COLOR }}>
  //               로그아웃
  //             </Text>
  //           </TouchableOpacity>
  //         );
  //       },
  //     });
  //   })
  // );

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
