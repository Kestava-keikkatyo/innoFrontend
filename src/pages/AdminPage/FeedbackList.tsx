import { DataGrid } from "@material-ui/data-grid";
import * as React from 'react';
import { Link } from "react-router-dom";
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { makeStyles } from "@material-ui/core";
import { getUserFeedBacks } from "../../actions/feedBackActions";

const FeedbackList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const { allFeedBacks } = useSelector((state: IRootState) => state.feedback || []);
    useEffect(() => {
        dispatch(getUserFeedBacks());
    }, [dispatch]);
    
    let rows = [];
    rows = allFeedBacks;
    const columns = [
        {
            field: "name",
            headerName: "Sender",
            width: 250,
        },
        { 
            field: "recipient", 
            headerName: "Recipient", 
            width: 200 
        },
        {
            field: "title",
            headerName: "Title",
            width: 200,
        },
        {
            field: "date",
            headerName: "Date",
            width: 200,
        },
        {
            field: "action",
            headerName: "Read more",
            width: 200,
            renderCell: (params: any) => {
                return (
                    <>
                <Link to={"/feedBackDetails/" + params.row.id}>
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

export default FeedbackList;