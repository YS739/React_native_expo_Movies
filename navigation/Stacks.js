import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, useColorScheme } from "react-native";
import { YELLOW_COLOR, PURPLE_COLOR } from "../common/color";
import Detail from "../screen/Detail";

const Stack = createNativeStackNavigator();

const Stacks = ({ navigation: { goBack } }) => {
  const isDark = useColorScheme() === "dark";

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "left",
        headerTintColor: isDark ? YELLOW_COLOR : PURPLE_COLOR,
        headerLeft: () => {
          <TouchableOpacity onPress={() => goBack()}>
            <Text style={{ color: YELLOW_COLOR }}>뒤로</Text>
          </TouchableOpacity>;
        },
      }}
    >
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
export default Stacks;
