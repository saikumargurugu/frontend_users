import React from 'react'
import { inputItem } from '../../userTypes'

const Number=(NumberProps: inputItem)=>{
  const { value, label } =NumberProps
    return (
      <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              {label}
            </label>
            <input
              type="number"
              id="small-input"
              value={value}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
              </input>
    </div>
  )
}

export default Number
