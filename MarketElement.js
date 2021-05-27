import {Text, View} from "react-native";
import React from "react";
import {styles} from "./App";

const MarketElement = ({coefficient, price, name, onPress}) => {
    return (
        <View style={styles.row}>
            <View style={styles.itemView}>
                <Text style={styles.item} onPress={onPress}>{name}</Text>
            </View>
            <View style={styles.priceView}>
                <Text style={styles.price}>{price}</Text>
            </View>
        </View>
    );
}
export default MarketElement;
