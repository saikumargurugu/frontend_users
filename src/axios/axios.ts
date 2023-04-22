import axios from "axios";
import {
  DeleteApiCallTypes,
  GetApiCallTypes,
  MakeCallTypes,
  PatchApiCallTypes,
  reponseTypes,
  PostApiCallTypes,
} from "../globals/types";

const PostApi = async (props: PostApiCallTypes) => {
    const returnData:reponseTypes={'data':{}}
    const apiDataObj={
      method: "POST",
      url:props.url,
      data:props.data,
      headers:{
        "Content-Type": "multipart/form-data",
      }
  }
  await api(apiDataObj).then((res)=>{
    returnData.data=res
  })
  return returnData
};

const PatchApi = (props: PatchApiCallTypes) => {
  console.log(props);
};

const GetApi = async (props: GetApiCallTypes) => {
    const returnData:reponseTypes={'data':{}}
    const apiDataObj={
        url: props.url,
        methd: "GET",
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
  const BACKEND_BASE_URL = localStorage.getItem('backendURL')? localStorage.getItem('backendURL'):process.env.REACT_APP_BACKEND_BASE_URL;
  const APIurl: string = BACKEND_BASE_URL + props.url;
  const headders = {};  
  if (props.method.toUpperCase() === "POST") {
    return PostApi({
      url: APIurl,
      data: props.data,
      method:"POST",
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
      method: "PATCH",
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
