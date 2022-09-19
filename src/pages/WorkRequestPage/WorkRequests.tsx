import { DataGrid, GridColumns } from '@mui/x-data-grid';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { fetchMyWorkRequests } from '../../actions/workRequestActions';
import moment from 'moment';

const WorkRequests: React.FC = () => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  const { workRequests } = useSelector((state: IRootState) => state.workRequest || []);
  
  useEffect(() => {
    dispatch(fetchMyWorkRequests());
  }, [dispatch]);

  let rows = [];
  rows = workRequests;

  const columns: GridColumns = [
    {
        field: 'headline',
        headerName: (i18next.t('work_request_headline')),
        width: 250,
    },
    { 
        field: 'recipient', 
        headerName: (i18next.t('work_request_recipient')), 
        width: 250,
        renderCell: (params) => {
          return <>{params.row.recipient.name}</>;
      } 
    },
    {
        field: 'createdAt',
        headerName: (i18next.t('work_request_sent_at')),
        width: 250,
        renderCell: (params) => {
          console.log(params.row);
          return <>{moment(params.row.createdAt).format('DD/MM/YYYY')}</>; 
      }
    },
    {
        field: 'action',
        headerName: (i18next.t('work_request_action')),
        width: 200,
        renderCell: (params) => {
          return (
            <>
            <Link to={'/workRequest/update/' + params.id}>
              <span className={classes.workRequestUpdate}>{t('work_request_update')}</span>
            </Link>
            </>
          );
        }
    },
  ];
  
  return (
    <div style={{ height: 700, width: '100%' }}>
      <div>
        <Typography className={classes.workRequestTitle} color="primary" align="center" variant="h5">{t('your_work_requests')}</Typography>
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
const useStyles = makeStyles(() => ({
  workRequestUpdate: {
    width: '100%',
    display: 'flex',
    marginRight: '20px',
    color: 'green',
  },
  workRequestTitle: {
    marginTop: '25px',
    marginBottom: '15px',
}
}));

export default WorkRequests;