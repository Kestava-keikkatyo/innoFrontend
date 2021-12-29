import { DataGrid } from "@material-ui/data-grid";
import * as React from 'react';
import { Link } from "react-router-dom";
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { makeStyles } from "@material-ui/core";
import { fetchAllJobs } from "../../actions/jobActions";


const NewJobList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const { jobs } = useSelector((state: IRootState) => state.job || []);
    useEffect(() => {
        dispatch(fetchAllJobs());
    }, [dispatch]);
    
    let rows = [];
    rows = jobs;
    const columns = [
        {
            field: "jobTitle",
            headerName: "Title",
            width: 200,
        },
        { 
            field: "jobCategory", 
            headerName: "Category", 
            width: 200 
        },
        {
            field: "agencyId",
            headerName: "Supplier",
            width: 250,
        },
        {
            field: "createdAt",
            headerName: "Release Date",
            width: 200,
        },
        {
            field: "action",
            headerName: "Read more",
            width: 200,
            renderCell: (params: any) => {
                return (
                    <>
                <Link to={"/jobDetails/" + params.id}>
                    <span className={classes.details}>Details</span>
                </Link>
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
};

const useStyles = makeStyles(() => ({
    details: {
        width: '100%',
        display: 'flex',
        color: 'green',
      }
}));

export default NewJobList;