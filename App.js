import React, {useState} from 'react';
import {Button, FlatList, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import {CoefficientProvider, useCoefficient} from "./CoefficientContext";
import MainScreen from "./Screens/MainScreen";
import MarketScreen from "./Screens/MarketScreen";

const Stack = createStackNavigator();


export default function App() {
    return (
        <CoefficientProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Main" component={MainScreen}/>
                    <Stack.Screen name="Market" component={MarketScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </CoefficientProvider>

    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flex: 1,
        flexDirection: "row"
    },
    icon: {
        width: 250,
        height: 250,
        resizeMode: 'stretch'
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: "Roboto"
    },
    buttonStyle: {
        width: 200,
        marginTop: 20
    },
    item: {
        padding: 10,
        fontSize: 25,
    },
    itemView: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    price: {
        padding: 10,
        fontSize: 25,
    },
    priceView: {
        flexDirection: 'row-reverse'
    },
    listContainer: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: "#FFFFFF"
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    }
});
