import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RouteParamList, RouteStackParamList } from "./RouteParamList";
import { userdetail } from "../store/actions";

interface RoutesProps { }

const screen = Dimensions.get("window");

const validateEmail = (email: string) => {
    var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export default function LogInPage({ navigation, route }: RouteStackParamList<"LogIn">) {
    const data = useSelector((state) => state);
    const dispatch = useDispatch();

    const [userName, onChangeUserNmText] = useState("");
    const [password, onChangePswText] = useState("");

    const onLoginPress = React.useCallback(
        async (event) => {
            console.log("login input state", userName, password);
            if (userName.length <= 0) {
                alert("userName should not be blank.");
                return;
            } else if (!validateEmail(userName)) {
                alert("Invalid email.");
                return;

            } else if (password.length <= 0) {
                alert("password should not be blank.");
                return;
            }

            // fetch("http://url/", {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify({
            //     LoginName: userName,
            //     LoginPwd: password,
            //   }),
            // })
            //   .then((response) => response.json())
            //   .then((data) => {
            //     console.log("Login data is ", data);
            const userDetail = {
                UserName: userName,
                Password: password
            };
            dispatch(userdetail(userDetail));

            //      if (data !== undefined) {
            navigation.navigate("UserDetail", { username: userName, password: password })
            // navigation.navigate("UserDetail");
            //     } else {
            //       alert("Email or password is incorrect, please try again");
            //      }
            //   })
            //   .catch((error) => {
            //     console.error("Error:", error);
            //   });
        },
        [userName, password]
    );

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.horizontalView}>
                    <Text style={styles.textView}>Email ID</Text>
                    <View style={styles.textInputView}>
                        <TextInput
                            onChangeText={(text) => onChangeUserNmText(text)}
                            value={userName}
                            textContentType="username"
                            placeholder="abc@intesole.com"
                            maxLength={20}
                            keyboardType='email-address'
                        />
                    </View>
                </View>
                <View style={styles.horizontalView}>
                    <Text style={styles.textView}>Password</Text>
                    <View style={styles.textInputView}>
                        <TextInput
                            onChangeText={(text) => onChangePswText(text)}
                            value={password}
                            textContentType="password"
                            placeholder="********"
                            secureTextEntry={true}
                            maxLength={15}
                        />
                    </View>
                </View>
                <View style={{ alignItems: "center", marginTop: 10 }}>
                    <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
                        <Text style={(styles.topViewText, { color: "white" })}>LogIn</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "white",
    },
    topViewText: {
        fontSize: 18,
    },
    textView: {
        alignSelf: "center",
        width: screen.width * 0.3,
    },
    horizontalView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: screen.width * 0.9,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 20,
    },
    textInputView: {
        borderWidth: 0.1,
        shadowColor: "gray",
        width: screen.width * 0.6,
        justifyContent: "center",
        borderRadius: 20,
        height: 40,
        paddingLeft: 20,
    },
    loginButton: {
        width: screen.width * 0.75,
        backgroundColor: "#15ddf1",
        alignItems: "center",
        borderRadius: 20,
        justifyContent: "center",
        height: 40,
    },
});


