import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import { DeleteOutline } from "@mui/icons-material";
import { deleteUser, fetchAllUsers } from '../../actions/usersActions';
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {updateUSerStatus } from "../../actions/usersActions";
import { setAlert } from '../../actions/alertActions';
import makeStyles from '@mui/styles/makeStyles';

const UserList: React.FC<any> = () => {

  const classes = useStyles();
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
          <div className={classes.userListUser}>
            <img className={classes.userListImg} src={params.row.profilePicture} alt="" />
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
              className={classes.userListDelete}
              onClick={() => handleDelete(params.id)}
              
            />
            <button 
             className={classes.userListDeactive}
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

const useStyles = makeStyles((theme) => ({
  userList: {
    flex: '4',
  },
  userListUser: {
    display: 'flex',
    alignItems: 'center',
  },
  userListImg: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '10px',
  },
  userListDeactive: {
    border: 'none',
    borderRadius: '10px',
    padding: '5px 10px',
    backgroundColor: '#cb6e28',
    color: 'white',
    cursor: 'pointer',
    marginRight: '20px',
  },
  userListDelete: {
    color: 'red',
    marginRight: '20px',
    cursor: 'pointer',
  },
}));
export default UserList;