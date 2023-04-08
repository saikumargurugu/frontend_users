import React from "react";
import UserListTable from "./table/table";

const headers =[
  {
    key: "k1",
    label: "First Name"
  },
  {
    key: "k2",
    label: "First Name"
  },
  {
    key: "k3",
    label: "First Name"
  },
  {
    key: "k4",
    label: "First Name"
  }
]
const data =[
  {
    "id":1,
    "k1": "master",
    "k2": "master",
    "k3": "master",
    "k4": "master",
  },  {
    "id":2,
    "k1": "master",
    "k2": "master",
    "k3": "master",
    "k4": "master",
  },
  {
    "id":3,
    "k1": "master",
    "k2": "master",
    "k3": "master",
    "k4": "master",
  },  {
    "id":4,
    "k1": "master",
    "k2": "master",
    "k3": "master",
    "k4": "master",
  },  {
    "id":5,
    "k1": "master",
    "k2": "master",
    "k3": "master",
    "k4": "master",
  },  {
    "id":6,
    "k1": "master",
    "k2": "master",
    "k3": "master",
    "k4": "master",
  },  {
    "id":7,
    "k1": "master",
    "k2": "master",
    "k3": "master",
    "k4": "master",
  },  {
    "id":8,
    "k1": "master",
    "k2": "master",
    "k3": "master",
    "k4": "master",
  },  {
    "id":9,
    "k1": "master",
    "k2": "master",
    "k3": "master",
    "k4": "master",
  },  {
    "id":10,
    "k1": "master",
    "k2": "master",
    "k3": "master",
    "k4": "master",
  },  {
    "id":11,
    "k1": "master",
    "k2": "master",
    "k3": "master",
    "k4": "master",
  },  {
    "id":12,
    "k1": "master",
    "k2": "master",
    "k3": "master",
    "k4": "master",
  },  {
    "id":13,
    "k1": "master",
    "k2": "master",
    "k3": "master",
    "k4": "master",
  },  {
    "id":14,
    "k1": "master",
    "k2": "master",
    "k3": "master",
    "k4": "master",
  },  {
    "id":15,
    "k1": "master",
    "k2": "master",
    "k3": "master",
    "k4": "master",
  },  {
    "id":16,
    "k1": "master",
    "k2": "master",
    "k3": "master",
    "k4": "master",
  }
]

function UserList() {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <UserListTable tableHeaders={headers} data= {data} />
    </div>
  );
}

export default UserList;
