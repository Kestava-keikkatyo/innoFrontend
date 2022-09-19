import { DataGrid, GridColumns } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../utils/store';
import { Link } from 'react-router-dom';
import makeStyles from '@mui/styles/makeStyles';
import { fetchAllMyFeedbacks } from '../../actions/feedBackActions';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Stack } from '@mui/material';
import moment from 'moment';

const Feedbacks: React.FC = () => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { feedbacks } = useSelector((state: IRootState) => state.feedback || []);

  useEffect(() => {
    dispatch(fetchAllMyFeedbacks());
  }, [dispatch]);

  let rows = [];
  rows = feedbacks;
  console.log('feedbacks:', feedbacks);
  
  const columns: GridColumns = [
    {
      field: "heading",
      headerName: (i18next.t("feedback_title")),
      minWidth: 100,
      flex: 1,
    },
    { 
      field: "recipient", 
      headerName: (i18next.t("feedback_recipient")),
      minWidth: 100,
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: (i18next.t("sending_date")),
      minWidth: 125,
      flex: 1,
      renderCell: (params) => {
        console.log(params.row);
        return <>{moment(params.row.createdAt).format('DD/MM/YYYY')}</>;
    },
    {
      field: "action",
      headerName: (i18next.t("feedback_action")),
      minWidth: 100,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
          <Stack direction="row" spacing={2}>
          <Link to={'/feedback/details/' + params.id}>
            <span>{t('feedback_details')}</span>
          </Link>
          <Link to={'/feedback/update/' + params.id}>
            <span className={classes.update}>{t('button_edit')}</span>
          </Link>
          </Stack>
          </>
        );
      }
    },
  ];
    return (
        <div style={{ height: "75vh" }}>
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