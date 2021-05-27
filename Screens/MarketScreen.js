import {FlatList, View} from "react-native";
import React from "react";
import {styles} from "../App";
import {useCoefficient} from "../CoefficientContext";
import MarketElement from "../MarketElement";

const MarketScreen = (navigation) => {
    const {coefficient, setCoefficient} = useCoefficient();
    const {cost, setCost} = useCoefficient();

    const onMarketItemPressed = (item) => {
        if (item.price <= cost) {
            console.log(item.price);
            console.log(cost);
            setCoefficient(() => {
                return item.coefficient;
            });
            setCost (() => {
                return cost - item.price;
            })
            console.log(item.coefficient);
        } else {
            alert("Недостаточно средств");
        }
    }
    const renderItem = ({item}) => {
        return (
            <MarketElement name={item.name}
                           price={item.price}
                           onPress={() => onMarketItemPressed(item)}/>
        );
    }
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={[
                    {key: 0, price: 100, name: "2X", coefficient: 2, passiveCoefficient: 1.5},
                    {key: 1, price: 200, name: "3X", coefficient: 3, passiveCoefficient: 2},
                    {key: 2, price: 300, name: "4X", coefficient: 4, passiveCoefficient: 2.5},
                ]}
                renderItem={renderItem}
                keyExtractor={item => item.key}
            />
        </View>
    );
}
export default MarketScreen;
