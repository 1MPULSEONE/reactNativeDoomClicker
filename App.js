import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const MarketScreen = (navigation) => {
  return (
      <View>
        <Text>Market</Text>
      </View>
  );
}
const MainScreen = ({navigation}) => {
  const [count, setCount] = useState(0);
  const onMarketButtonPressed = () => {
    navigation.navigate('Market');
  }
  const onImageButtonPressed = () => setCount(prevCount => prevCount + 1);
  const onNullButtonPressed = () => setCount(prevCount => prevCount = 0)
  return (
      <View style={styles.container}>
        <StatusBar style="auto"/>
        <TouchableOpacity
            onPress={onImageButtonPressed}>
          <Image
              source={require('./assets/doom_image.png')}
              style={styles.icon}/>
        </TouchableOpacity>
        <Text style={styles.textTitle}>
          Clicks count - {count}
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
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen}/>
          <Stack.Screen name="Market" component={MarketScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});
