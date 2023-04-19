import React, { useEffect, useState } from "react";
import { MakeCall } from "../axios/axios";
import UserListTable from "./table/table";

const headers = [
  {
    key: "job_title",
    label: "Job Title",
  },
  {
    key: "job_description",
    label: "Job Description",
  },
  {
    key: "contant_number",
    label: "contact phone",
  },
  {
    key: "contanct_email",
    label: "contact Email",
  },
  {
    key: "location",
    label: "location",
  },
];

const UserList = () => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    const mountCalls = async () => {
      const returnData = await MakeCall({
        url: "/jobs/",
        method: "GET",
      });
      setData(returnData.data.data);
    };
    mountCalls();
  }, []);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <UserListTable tableHeaders={headers} data={data} />{" "}
    </div>
  );
};

export default UserList;
