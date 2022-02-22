import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import { Link } from "react-router-dom";
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllAgencies } from "../../actions/usersActions";
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';

const Agencies: React.FC<any> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { users } = useSelector((state: IRootState) => state.users || []);
  useEffect(() => {
    dispatch(fetchAllAgencies());
  }, [dispatch]);
  let rows = [];
  rows = users;
  const columns = [
    {
      field: "name",
      headerName: "Agency",
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
      field: "category", 
      headerName: "Category", 
      width: 150 
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
      headerName: "Position", 
      width: 150 
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: any) => {
        return (
        <>
        <Link to={"/agencies/" + params.id}>Profile</Link>
        </>
        );
      },
    },
  ];
  return (
    <div style={{ height: 700, width: '100%' }}>
      <div>
        <Typography className={classes.title} color="primary" align="center" variant="h5">Agencies</Typography>
        </div>
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
  title: {
    marginTop: '25px',
    marginBottom: '15px',
  }
}));

export default Agencies;