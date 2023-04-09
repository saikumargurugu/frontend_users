import React from 'react'
import Number from './number'
import Switch from './switch'
import TextInput from './text'
import { inputSwitchProps } from "../../../users/userTypes"
import CheckBox from './checkBox'

const Inputs=(props:inputSwitchProps)=>{
  const { inputItem, onValueChange } = props  
    switch (inputItem.inputType) {
      case "text":
      case "email":
        return <TextInput inputType={inputItem.inputType} onValueChange={onValueChange} label={inputItem.label} value={inputItem.value||""} keyStr={inputItem.keyStr} />
      case "switch":
        return <Switch inputType={inputItem.inputType} onValueChange={onValueChange} label={inputItem.label} value={inputItem.value||""} keyStr={inputItem.keyStr} />
      case "number":
      case "tel":
        return <Number inputType={inputItem.inputType} onValueChange={onValueChange} label={inputItem.label} value={inputItem.value||""} keyStr={inputItem.keyStr} />
      case "checkbox":
        return <CheckBox inputType={inputItem.inputType} onValueChange={onValueChange} label={inputItem.label} value={inputItem.value||""} keyStr={inputItem.keyStr} />
      default:
        return <></>
    }
}

export default Inputs
