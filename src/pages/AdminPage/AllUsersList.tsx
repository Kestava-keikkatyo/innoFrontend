import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { fetchAllAgencies, fetchAllBusinesses, fetchAllWorkers } from '../../actions/allUsersActions';
import "./userList.css";
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {updateUSerStatus, DeleteUserById } from "../../actions/adminActions";
import { setAlert } from '../../actions/alertActions';

const UserList: React.FC<any> = () => {

  const dispatch = useDispatch();

  const { workers, businesses, agencies } = useSelector((state: IRootState) => state.allUsers || []);

  useEffect(() => {
    dispatch(fetchAllWorkers());
    dispatch(fetchAllBusinesses());
    dispatch(fetchAllAgencies());
  }, [dispatch]);

  let rows = [
    ...workers,
    ...businesses,
    ...agencies
  ];

  const handleDelete = (id: string, userType: string) => {
    console.log(id);
    dispatch(DeleteUserById(id, userType))
    dispatch(setAlert("User deleted successfully!"))
  }

  const handleStatus = (id: string, userType: string, active: boolean) => {
    dispatch(updateUSerStatus(id, userType, active))
    if (active === false) {
      dispatch(setAlert("User deactivated successfully!"))
    } else dispatch(setAlert("User activated successfully!"))
  }
  
  const columns = [
    {
      field: 'name', 
      headerName: 'Name', 
      width: 200 
    },
    { 
      field: "email", 
      headerName: "Email", 
      width: 250 
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
      width: 250,
      renderCell: (params: any) => {
        return (
          <>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.id, params.row.userType)}
              
            />
            <Link to={"/firstName/" + params.row.firstName}>
              <button className="userListEdit">Edit</button>
            </Link>
            <button 
             className="userListDeactive"
             onClick={() => handleStatus(params.id, params.row.userType, !params.row.active)}>{params.row.active ? "Deactivate" : "Activate"}</button>
            
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