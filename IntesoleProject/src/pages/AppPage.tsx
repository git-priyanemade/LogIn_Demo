import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import UserDetailPage from "./UserDetailPage";
import LogInPage from "./LogInPage";

import { RouteParamList } from "./RouteParamList";

interface RoutesProps { }

export const AppPage: React.FC<RoutesProps> = ({ }) => {
  const Stack = createStackNavigator<RouteParamList>();
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LogIn'>
          <Stack.Screen
            options={({ navigation, route }) => ({
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "#fff",
              headerTitle: () => (
                <View style={{ alignSelf: "center" }}>
                  <Text style={{ color: "#15ddf1", fontSize: 20 }}> LogIn </Text>
                </View>
              ),
            })}
            name="LogIn"
            component={LogInPage}
          />
          <Stack.Screen
            name="UserDetail"
            component={UserDetailPage}
            options={({ navigation, route }) => ({
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "#fff",
              headerTitle: () => (
                <View style={{ alignSelf: "center" }}>
                  <Text style={{ color: "#15ddf1", fontSize: 20 }}>User Detail</Text>
                </View>
              ),
              headerLeft: () => (
                <View style={{ paddingLeft: 20 }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <Image
                      style={{ height: 25, width: 20 }}
                      source={require("../images/left_icon.png")}
                    />
                  </TouchableOpacity>
                </View>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
export default AppPage;
