import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { RouteStackParamList } from './RouteParamList';
import { DefaultRootState, useSelector } from "react-redux";

const screen = Dimensions.get("window");

export default function UserDetailPage({ navigation, route }: RouteStackParamList<"UserDetail">) {
    const data = useSelector((state) => state);
    // const { userdetails } = data;
    console.log('userdata is', data);

    return (
        <View style={styles.container}>
            <View style={styles.verticalView}>
                <Text style={styles.boldtxt}>Email Address</Text>
                <Text style={styles.txtgrayColor}>{route.params.username}</Text>
                {/* <Text style={styles.txtgrayColor}>{data.userdetails!.UserName}</Text> */}
            </View>
            <View style={styles.verticalView}>
                <Text style={styles.boldtxt}>Password</Text>
                <Text style={styles.txtgrayColor}>{route.params.password}</Text>
                {/* <Text style={styles.txtgrayColor}>{data.userdetails!.Password}</Text> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    verticalView: {
        marginLeft: 30,
        marginTop: 30,
    },
    boldtxt: {
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10,
    },
    txtgrayColor: {
        color: "gray",
        width: screen.width * 0.55,
    },
});





