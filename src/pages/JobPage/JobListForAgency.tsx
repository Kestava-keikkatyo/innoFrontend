import { DataGrid } from "@material-ui/data-grid";
import * as React from 'react';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { makeStyles } from "@material-ui/core";
import { DeleteJobById, fetchAllJobsForAgency } from "../../actions/jobActions";
import { setAlert } from '../../actions/alertActions';

const JobListForAgency: React.FC<any> = () => {

  const dispatch = useDispatch();
  const classes = useStyles();

  const { jobs } = useSelector((state: IRootState) => state.job || []);
  
  useEffect(() => {
    dispatch(fetchAllJobsForAgency());
  }, [dispatch]);

  let rows = [];
  rows = jobs;

  const handleDelete = (id: string) => {
    console.log(id);
    dispatch(DeleteJobById(id))
    dispatch(setAlert("Job was deleted successfully!"))
  }
  
  const columns = [
    {
        field: "title",
        headerName: "Title",
        width: 200,
    },
    { 
        field: "category", 
        headerName: "Category", 
        width: 200 
    },
    {
      field: "agency",
      headerName: "Supplier",
      width: 200,
      renderCell: (params: any) => {
          console.log(params.row);
          return <>{params.row.agency.name}</>;
      }
  },
    {
        field: "createdAt",
        headerName: "Release Date",
        width: 250,
    },
    {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params: any) => {
            return (
                <>
            <Link to={"/jobVacancyUpdate"}>
                <span className={classes.update}>Update</span>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.id)}
              
            />
            </>
            );
        }
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
const useStyles = makeStyles(() => ({
    update: {
        width: '100%',
        display: 'flex',
        marginRight: '20px',
        color: 'green',
      },
      userListDelete: {
        color: 'red',
        marginRight: '20px',
        cursor: 'pointer'
      }
}));
export default JobListForAgency;