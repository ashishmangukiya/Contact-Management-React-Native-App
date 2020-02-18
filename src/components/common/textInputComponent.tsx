import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

type props = {
  value: string,
  type: string,
  placeholder: string,
  onChange: Function
}

const TextInputComponent = (props: props) => {

  const [border, setBorder] = useState(false)
  return (
    <View style={Style.inputContainer}>
      <TextInput
        style={[Style.inputTextStyle, border ? Style.borderColor : null]}
        value={props.value}
        placeholder={props.placeholder}
        maxLength={props.type == 'name' ? 16 : props.type == 'phone' ? 16 : 35}
        keyboardType={props.type == "phone" ? "phone-pad" : 'default'}
        onChangeText={(data) => { data != ' ' ? props.onChange(data) : null }}
        onFocus={() => setBorder(true)}
        onBlur={() => setBorder(false)}
      />
    </View>
  )
}

export default TextInputComponent;

const Style = StyleSheet.create({
  inputContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
    justifyContent: 'flex-start'
  },
  inputTextStyle: {
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  borderColor: {
    borderColor: '#7B73B8',
    borderWidth: 1
  }
})