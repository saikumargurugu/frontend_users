import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { MakeCall } from "../../axios/axios";
import Button from "../../components/button/button";
import UserDelete from "../userDelete";


type heading = {
  key: string;
  label: string;
};
type tableHeaders = Array<heading>;
type item = {
  id:number
}
type data = Array<item>;
type ListProps = {
  tableHeaders: tableHeaders;
  data: data;
};


const UserListTable = (props: ListProps) => {
  const { tableHeaders, data } = props;


  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [selctedUser, setSelctedUser] = useState<Object>({});
  const getValues = (key: string, data: Record<string, any>) => {
    if(key==="location"&& data[key]){
      const locstr:string = `${Object.values(data[key]).map(a=>a+"")}`
      return locstr
    }
    return data[key];
  }
  const handleDeleteClick= (user:Object) => {
    setDeleteModal(!deleteModal)
    setSelctedUser(user)
  }
  const deleteUser =async ()=>{
    console.log(selctedUser);
   const rese=await MakeCall({
      url:`/jobs/${selctedUser.id}`,
      method:'DELETE'
    })
    window.location.reload()
  }

  return (
    <div className="overflow-x-auto m-6 shadow-md overflow-y-auto sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableHeaders.map((heading: heading) => (
              <th scope="col" className="px-6 py-3">
                {heading.label}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data&& data.length>0 &&data?.map((item: item) => (
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              {tableHeaders.map((heading: heading) => (
                <td className="px-6 py-4">
                  {getValues(heading.key, item)}
                </td>
              ))}
              <td className="px-6 py-4 flex justify-between items-center">
               {/* <Link
                  to={"users/edit/"+item.id}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Edit
                </Link> */}
                  <Button label="Delete" type="danger" clickAction={()=>handleDeleteClick(item)} />
                {deleteModal&&<UserDelete 
                contnetText="Are you sure do you want to delete selected user"
                closeAction={()=>handleDeleteClick({})}
                saveAction={()=>deleteUser()}
                />}
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;
