import React from 'react';
import axios from 'axios';
import { DeleteApiCallTypes, GetApiCallTypes, PatchApiCallTypes, PostApiCallTypes } from '../globals/types';

const PostApi=(props:PostApiCallTypes)=>{
    console.log(props);
}


const PatchApi=(props:PatchApiCallTypes)=>{
    console.log(props);
}


const GetApi=(props:GetApiCallTypes)=>{
    console.log(props);
}

const DeleteApi=(props:DeleteApiCallTypes)=>{
    console.log(props);
}


const MakeCall=(props)=> {
    
}
axios({
    method: 'post',
    url: '/user/12345',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });