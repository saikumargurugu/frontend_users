import React from 'react'
import { buttonItem } from '../../globals/types'

const Button=(buttonProps: buttonItem )=> {
   const { label, type, clickAction } = buttonProps;
   const get_class=()=>{
       switch(type) {
        case "primary":
            return "bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        case "secondry":
                return "bg-yellow-400 hover:bg-yellow-500 text-black text focus:ring-yellow-300 dark:focus:ring-yellow-900"
        default:
            return "text-gray-900 border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
       }
   }
  return (
    <div>
      <button type="button" 
        className={`text-white focus:outline-none focus:ring-4 font-medium 
        rounded-full text-sm px-5 py-2.5 text-center mb-2 ${get_class()}`}
        onClick={()=>clickAction()}
        >
            {label}
        </button>
    </div>
  )
}

export default Button
