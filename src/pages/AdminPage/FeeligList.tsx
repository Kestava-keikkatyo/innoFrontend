import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import { Link } from "react-router-dom";
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { fetchFeelings } from "../../actions/feelingActions";


const FeelingList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const { feelings } = useSelector((state: IRootState) => state.feeling || []);
    useEffect(() => {
        dispatch(fetchFeelings());
    }, [dispatch]);
    
    let rows = [];
    rows = feelings;
    const columns = [
        {
            field: "workerName",
            headerName: "Sender",
            width: 250,
        },
        { 
            field: "workerEmail", 
            headerName: "Email", 
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
                <Link to={"/feelingDetails/" + params.row.id}>
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

export default FeelingList;