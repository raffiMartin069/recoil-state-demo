import React from 'react'
import { Checkbox } from "expo-checkbox";
import { useRecoilState } from 'recoil';
import checkBoxState from './state';

const MyCustomCheckbox = () => {
    const [isVisible, setVisible] = useRecoilState(checkBoxState);
    return (
        <Checkbox value={!isVisible} onValueChange={() => setVisible(!isVisible)}  />
    )
}

export default MyCustomCheckbox