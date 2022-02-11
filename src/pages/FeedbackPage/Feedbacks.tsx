import { DataGrid } from '@material-ui/data-grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../utils/store';
import { Link } from "react-router-dom";
import makeStyles from '@mui/styles/makeStyles';
import { fetchAllMyFeedbacks } from "../../actions/feedbackActions2";

const Feedbacks: React.FC<any> = () => {
    const dispatch = useDispatch();
  const classes = useStyles();

  const { feedbacks } = useSelector((state: IRootState) => state.feedback2 || []);

  useEffect(() => {
    dispatch(fetchAllMyFeedbacks());
  }, [dispatch]);

  let rows = [];
  rows = feedbacks;
  
  const columns = [
    {
        field: "heading",
        headerName: "Title",
        width: 250,
    },
    { 
        field: "recipient", 
        headerName: "Recipient",
        width: 250 
    },
    {
        field: "createdAt",
        headerName: "Sending date",
        width: 250,
    },
    {
        field: "action",
        headerName: "Action",
        width: 250,
        renderCell: (params: any) => {
          return (
              <>
          <Link to={"/feedback-details/" + params.id}>
              <span>Details</span>
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
export default Feedbacks;