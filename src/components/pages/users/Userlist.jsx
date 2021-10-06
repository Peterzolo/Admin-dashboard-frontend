import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./UserList.css";
import { DeleteOutlined, Create } from "@material-ui/icons";
import { userRows } from "../../../data";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserList = () => {
  const [data, setData] = useState(userRows);

  const deleteUser = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="renderUserInfo">
            <img src={params.row.avatar} alt="" className="renderAvatar" />
            <div className="renderUsername">{params.row.username}</div>
          </div>
        );
      },
    },
    { field: "email", headerName: "Email ", width: 130 },
    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 100,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <div className="editAndDele">
              <Link to={"/user" + params.row.id}>
                <Create className="editBtn" />
              </Link>

              <DeleteOutlined
                className="deleteBtn"
                onClick={() => deleteUser(params.row.id)}
              />
            </div>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
