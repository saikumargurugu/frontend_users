import React from 'react'
import { inputItem } from '../../../users/userTypes'

const Number=(NumberProps: inputItem)=>{
  const { value, inputType, keyStr, label, onValueChange } = NumberProps;

  const handleChange=(event: React.ChangeEvent<HTMLInputElement>): void =>onValueChange(keyStr, event.target.value);
    return (
      <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {label}
            </label>
            <input
              type="number"
              value={value}
              onChange={handleChange}
              required
              className="bg-gray-50 border 
              border-gray-300 
              text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 
              block w-full p-2.5 dark:bg-gray-700 
              [&::-webkit-outer-spin-button]:appearance-none 
              [&::-webkit-inner-spin-button]:appearance-none
              dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 
              dark:focus:border-blue-500" 
              placeholder={inputType==='tel'?"+61434214334":"25"}>
              </input>
    </div>
  )
}

export default Number
