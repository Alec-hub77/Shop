import React from "react";
import "./userList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";

const UserList = () => {
  const [data, setData] = React.useState(userRows);

  const handleClick = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="" />
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
      field: "transactions",
      headerName: "Transactions",
      width: 200,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListEdit">
            <Link to={"/user" + params.row.id}>
              <button>Edit</button>
            </Link>
            <DeleteOutlineOutlined
              className="userListDelete"
              onClick={() => handleClick(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
