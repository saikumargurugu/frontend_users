import axios from "axios";
import {
  DeleteApiCallTypes,
  GetApiCallTypes,
  MakeCallTypes,
  PatchApiCallTypes,
  reponseTypes,
  PostApiCallTypes,
} from "../globals/types";

const PostApi = (props: PostApiCallTypes) => {
    const returnData:reponseTypes={'data':{}}
    console.log(props);
  api({...props,method:"POST"}).then(
      resp=>{
        returnData.data= resp
      }
  )
  return returnData
};

const PatchApi = (props: PatchApiCallTypes) => {
  console.log(props);
};

const GetApi = async (props: GetApiCallTypes) => {
    const returnData:reponseTypes={'data':{}}
    const apiDataObj={
        url: props.url,
        methd: "post",
    }
  await api(apiDataObj).then(
      resp=>{
        returnData.data= resp
      }
  )
  return returnData
};

const DeleteApi = async (props: DeleteApiCallTypes) => {
  const returnData:reponseTypes={'data':{}}
  await api({...props,method:"DELETE"}).then(
    resp=>{
      returnData.data= resp
    }
)
return returnData
};

export const MakeCall = (props: MakeCallTypes) => {
  const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
  const APIurl: string = BACKEND_BASE_URL + props.url;
  const headders = {};
  console.log(props.method.toUpperCase());
  
  if (props.method.toUpperCase() === "POST") {
    return PostApi({
      url: APIurl,
      data: props.data,
      headders: headders,
    });
  }
  if (props.method.toUpperCase() === "GET") {
    return GetApi({
      url: APIurl,
      headders: {},
      filters: props.filters,
    });
  }
  if (props.method.toUpperCase() === "PATCH") {
    return PatchApi({
      url: APIurl,
      data: props.data,
      headders: headders,
    });
  }
  if (props.method.toUpperCase() === "DELETE") {
    return DeleteApi({
      url: APIurl,
      headders: {},
    });
  }
};
const api = (ApiObj:Object) => {
 return axios(ApiObj);
};
