import { DataGrid } from "@material-ui/data-grid";
import * as React from 'react';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { fetchAllAgencies, fetchAllBusinesses, fetchAllWorkers } from '../../actions/allUsersActions';
import "./userList.css";
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { DeactivateUserById, DeleteUserById } from "../../actions/adminActions";
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

  const handleDeactive = (id: string, userType: string) => {
    dispatch(DeactivateUserById(id, userType))
    dispatch(setAlert("User deactivated successfully!"))
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
      width: 200 
    },
    { 
      field: "userType", 
      headerName: "User Type", 
      width: 200 
    },
    {
      field: "active",
      headerName: "Status",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: any) => {
        return (
          <>
            <Link to={"/firstName/" + params.row.firstName}>
              <button className="userListEdit">Edit</button>
            </Link>
            <button 
             className="userListDeactive"
             onClick={() => handleDeactive(params.row.id, params.row.userType)}>Deactive</button>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id, params.row.userType)}
              
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
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
    />
  </div>
  );
}

export default UserList;