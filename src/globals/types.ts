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
  data?: Object,
  headders: Object
}

type reponseTypes= {
  data: Object
}



type GetApiCallTypes= {
  url: string,
  headders: Object,
  filters?: any
}

type PatchApiCallTypes = PostApiCallTypes

type DeleteApiCallTypes= {
  url: string,
  headders: Object
}

type MakeCallTypes= {
  url: string,
  data?: Object,
  method: string,
  filters?: any,
  [x: string | number | symbol]: any; //allows any other type of proporites
}

export type {
    NavItemType,
    buttonItem,
    MakeCallTypes,
    PostApiCallTypes,
    PatchApiCallTypes,
    reponseTypes,
    GetApiCallTypes,
    DeleteApiCallTypes
}