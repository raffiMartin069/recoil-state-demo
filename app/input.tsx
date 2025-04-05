import { View, TextInput } from 'react-native'
import MyCustomCheckbox from './checkbox'
import { useRecoilValue } from 'recoil'
import checkBoxState from './state'


const CustomInput = () => {

    const visibility = useRecoilValue(checkBoxState)

  return (
      <View style={{
        gap:10
      }}>
          <TextInput style={{
            "borderWidth":1,
            "borderColor":"grey"
          }}  secureTextEntry={visibility} placeholder="You Secret Message!" />
          <MyCustomCheckbox />
      </View>
  )
}

export default CustomInput