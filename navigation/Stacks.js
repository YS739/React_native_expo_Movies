import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScrollView, TextInput, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

const Stacks = () => {
  const Detail = ({ route: { params }, navigation: { navigate } }) => {
    console.log("params:", params);
    return (
      <ScrollView>
        <Text>Title</Text>
      </ScrollView>
    );
  };
  const Login = ({ route: { params }, navigation: { navigate } }) => {
    return (
      <View>
        <Text>Login</Text>
        <TextInput title="email" />
        <TextInput title="password" />
      </View>
    );
  };

  return (
    <Stack.Navigator
      initialRouteName="Detail"
      // TODO: 지워도 될 듯?
      screenOptions={{
        headerBackTitle: "뒤로",
        //TODO: headerFrontTitle: "로그아웃"? user가 있을 때 보이기(삼항연산자)
      }}
    >
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
export default Stacks;
