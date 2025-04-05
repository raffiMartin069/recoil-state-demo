import { View, Text, StyleSheet } from 'react-native'
import CustomInput from "./input";
import { RecoilRoot, useRecoilValue } from "recoil";
import checkBoxState from './state';

const App = () => {

    const visibility = useRecoilValue(checkBoxState)

  return (
        <View
          style={styles.parent}>
          <Text>{visibility ? "Enter a secret!!" : "Your secret has been exposed!!"}</Text>
          <CustomInput />
        </View>
  )
}

const styles = StyleSheet.create({
  parent: {
      flex: 1,
      padding:20,
      gap:10
    }
});

export default App