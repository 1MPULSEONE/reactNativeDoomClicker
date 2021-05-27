import {useCoefficient} from "../CoefficientContext";
import React, {useEffect, useState} from "react";
import {Button, Image, InteractionManager, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {styles} from "../App";

const MainScreen = ({navigation}) => {
    const {coefficient} = useCoefficient();
    const {cost, setCost} = useCoefficient();
    const onMarketButtonPressed = () => {
        navigation.navigate('Market');
    }
    const onImageButtonPressed = () => {
        setCost(cost => cost + 1 * coefficient);
    }
    const onNullButtonPressed = () => setCost(prevCount => prevCount = 0);
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <TouchableOpacity
                onPress={onImageButtonPressed}>
                <Image
                    source={require('../assets/doom_image.png')}
                    style={styles.icon}/>
            </TouchableOpacity>
            <Text style={styles.textTitle}>
                Clicks count - {cost}
            </Text>
            <TouchableOpacity
                style={styles.buttonStyle}>
                <Button
                    onPress={onMarketButtonPressed}
                    title="Market"
                    color="#FF8300"/>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonStyle}>
                <Button
                    onPress={onNullButtonPressed}
                    color="#000000"
                    title="Null count"/>
            </TouchableOpacity>
        </View>
    );
}
export default MainScreen;
