import React from 'react'
import Number from './number'
import Switch from './switch'
import TextInput from './text'
import { inputSwitchProps } from "../../userTypes"
import CheckBox from './checkBox'

const Index=(props:inputSwitchProps)=>{
  const { inputItem } = props
    switch (inputItem.inputType) {
      case "text":
        return <TextInput inputType={inputItem.inputType} label={inputItem.label} value={inputItem.value||""} key={inputItem.key} />
      case "switch":
        return <Switch inputType={inputItem.inputType} label={inputItem.label} value={inputItem.value||""} key={inputItem.key} />
      case "number":
        return <Number inputType={inputItem.inputType} label={inputItem.label} value={inputItem.value||""} key={inputItem.key} />
      case "checkbox":
        return <CheckBox inputType={inputItem.inputType} label={inputItem.label} value={inputItem.value||""} key={inputItem.key} />
      default:
        break;
    }
}

export default Index
