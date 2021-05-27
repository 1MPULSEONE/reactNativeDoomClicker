import React, {useContext, useEffect, useState} from "react";
import {InteractionManager} from 'react-native';

const CoefficientContext = React.createContext({
    coefficient: 1, setCoefficient: (coefficient) => {
    },
    cost: 0, setCost: (cost) => {
    },
    passiveCoefficient: 0, setPassiveCoefficient: (passiveCoefficient) => {

    }
});

export const CoefficientProvider = ({children}) => {
    const [coefficient, setCoefficient] = useState(1);
    const [cost, setCost] = useState(0);
    const [passiveCoefficient, setPassiveCoefficient] = useState(0.5);
    useEffect(() => {
        const addCostInterval = setInterval(() => {
            setCost(() => cost + passiveCoefficient);
        }, 200);
        return () => clearInterval(addCostInterval);
    });
    return (
        <CoefficientContext.Provider value={{coefficient, setCoefficient, cost, setCost}}>
            {children}
        </CoefficientContext.Provider>
    );
}
export const useCoefficient = () => {
    const {coefficient, setCoefficient} = useContext(CoefficientContext);
    const {cost, setCost} = useContext(CoefficientContext);
    const {passiveCoefficient, setPassiveCoefficient} = useContext(CoefficientContext);
    return {coefficient, setCoefficient, cost, setCost, passiveCoefficient, setPassiveCoefficient};
}
