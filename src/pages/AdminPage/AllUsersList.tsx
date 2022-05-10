import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import { DeleteOutline } from "@mui/icons-material";
import { deleteUser, fetchAllUsers } from '../../actions/usersActions';
import "./userList.css";
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {updateUSerStatus } from "../../actions/usersActions";
import { setAlert } from '../../actions/alertActions';

const UserList: React.FC<any> = () => {

  const dispatch = useDispatch();

  const { users } = useSelector((state: IRootState) => state.users || []);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  let rows = [
    ...users,
  ];

  const handleDelete = (id: string) => {
    console.log(id);
    dispatch(deleteUser(id))
    dispatch(setAlert("User deleted successfully!"))
  }

  const handleStatus = (id: string, active: boolean) => {
    dispatch(updateUSerStatus(id, active))
    if (active === false) {
      dispatch(setAlert("User deactivated successfully!"))
    } else dispatch(setAlert("User activated successfully!"))
  }
  
  const columns = [
    {
      field: "name",
      headerName: "User",
      width: 200,
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
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.id)}
              
            />
            <button 
             className="userListDeactive"
             onClick={() => handleStatus(params.id, !params.row.active)}>{params.row.active ? "Deactivate" : "Activate"}</button>
            
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

export default UserList;