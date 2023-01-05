import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text, useColorScheme } from "react-native";
import { YELLOW_COLOR, PURPLE_COLOR } from "../common/color";
import Detail from "../screen/Detail";
import ReviewEdit from "../screen/ReviewEdit";
import Login from "../screen/Login";
import Review from "../screen/Review";
import { authService } from "../firebase";
import { signOut } from "firebase/auth";

const Stack = createNativeStackNavigator();

const Stacks = ({ navigation: { goBack } }) => {
  const isDark = useColorScheme() === "dark";

  const handleAuth = () => {
    if (!!authService.currentUser?.uid) {
      // 로그아웃 요청
      signOut(authService)
        .then(() => {
          console.log("로그아웃 성공");
          setOptions({ headerRight: null });
        })
        .catch((err) => alert(err));
    } else {
      // 로그인 화면으로
      navigate("Login");
    }
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "left",
        headerTintColor: isDark ? YELLOW_COLOR : PURPLE_COLOR,
        headerLeft: () => (
          <TouchableOpacity onPress={() => goBack()}>
            <Text
              style={{
                color: isDark ? YELLOW_COLOR : PURPLE_COLOR,
                fontSize: "18px",
              }}
            >
              뒤로
            </Text>
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity>
            onPress={handleAuth}
            <Text
              style={{
                color: isDark ? YELLOW_COLOR : PURPLE_COLOR,
                fontSize: "18px",
              }}
            >
              로그인
              {authService.currentUser ? "로그아웃" : "로그인"}
            </Text>
          </TouchableOpacity>
        ),
      }}
    >
      <NativeStack.Screen name="Detail" component={Detail} />
      <NativeStack.Screen name="Login" component={Login} />
      <NativeStack.Screen name="Review" component={Review} />
      <NativeStack.Screen name="ReviewEdit" component={ReviewEdit} />
    </Stack.Navigator>
  );
};
export default Stacks;
