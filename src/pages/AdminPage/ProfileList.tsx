import { DataGrid } from "@material-ui/data-grid";
import * as React from 'react';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./userList.css";
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllUsers } from "../../actions/usersActions";

const ProfileList: React.FC<any> = () => {

  const dispatch = useDispatch();

  const { users } = useSelector((state: IRootState) => state.users || []);
  
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  let rows = [];
  rows = users;
  
  const columns = [
    {
      field: "name",
      headerName: "User",
      width: 250,
      renderCell: (params: any) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.profilePicture} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { 
      field: "email", 
      headerName: "Email", 
      width: 200 
    },
    { 
      field: "city", 
      headerName: "City", 
      width: 200 
    },
    { 
      field: "userType", 
      headerName: "User Type", 
      width: 150 
    },
    {
      field: "active",
      headerName: "Status",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: any) => {
        return (
          <>
            <Link to={"/user/" + params.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              //onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}

export default ProfileList;