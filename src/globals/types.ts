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

type PostApiCallTypes= {
  url: string,
  data: Object,
}


type GetApiCallTypes= {
  url: string,
  filters?: any
}

type PatchApiCallTypes = PostApiCallTypes

type DeleteApiCallTypes= {url: string}

type MakeCallTypes= {
  url: string,
  data?:string,
  filters?:string,
  [x: string | number | symbol]: any; //allows any other type of proporites
}

export type {
    NavItemType,
    buttonItem,
    MakeCallTypes,
    PostApiCallTypes,
    PatchApiCallTypes,
    GetApiCallTypes,
    DeleteApiCallTypes
}