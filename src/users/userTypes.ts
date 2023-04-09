 type inputItem = {
    inputType: string;
    label: string;
    key: string;
    value?: any;
  };
  
   type formSchema = [inputItem];
  
   type formProps = {
    formSchema: formSchema;
  }
  
  
  type inputSwitchProps = {
    inputItem: inputItem;
  }
  


  export type {
      inputItem,
      formProps,
      inputSwitchProps,
      formSchema
  }