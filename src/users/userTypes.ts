
type inputItem = {
  inputType: string;
  label: string;
  keyStr: string;
  value?: any;
  onValueChange: (key: string, value: any) => void
};

type formSchema = [inputItem];

type buttonFormItem= {
  label: string,
  action: string,
  endpoint?: string,
  type?: string,
  clickAction: (data?:Object)=>void,
  redirectUrl?: string
}

type UserDeleteProps= {
  closeAction: ()=>void,
  saveAction: ()=>void,
  contnetText: string   
}

type formActionsTypes = [buttonFormItem]


type formProps = {
  formSchema: formSchema;
  formActions: formActionsTypes
}

type inputSwitchProps = {
  inputItem: inputItem;
  onValueChange: (key: string, value: any) => void
}



export type {
  inputItem,
  formProps,
  buttonFormItem,
  formActionsTypes,
  inputSwitchProps,
  UserDeleteProps,
  formSchema
}