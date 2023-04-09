import React from "react"
type NavItemType={
 path: string,
 lable: string,
 component: React.Component

}


type buttonItem= {
    label: string,
    clickAction: ()=>void,
    type?: string
  }



export type {
    NavItemType,
    buttonItem
}