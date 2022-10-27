import { DataGrid, GridColumns } from '@mui/x-data-grid';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchLatestJoinedWorkers } from '../../actions/usersActions';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const LatestJoinedWorkers: React.FC = () => {
  const { t } = useTranslation()
  const classes = useStyles();
  const dispatch = useDispatch();
  const { users } = useSelector((state: IRootState) => state.users || []);
  useEffect(() => {
    dispatch(fetchLatestJoinedWorkers());
  }, [dispatch]);
  let rows = [];
  rows = users;
  const columns: GridColumns = [
    {
      field: 'name',
      headerName: (i18next.t('list_name')),
      width: 250,
      renderCell: (params) => {
        return (
        <div className={classes.workerList}>
          <img className={classes.workerListImg} src={params.row.profilePicture} alt="" />
          {params.row.name}
        </div>
        );
      },
    },
    {
      field: 'email', 
      headerName: (i18next.t('list_email')), 
      width: 200 
    },
    {
      field: 'city', 
      headerName: (i18next.t('list_city')), 
      width: 200 
    },
    {
      field: 'userType', 
      headerName: (i18next.t('list_position')), 
      width: 150 
    },
    {
      field: 'action',
      headerName: (i18next.t('list_action')),
      width: 200,
      renderCell: (params) => {
      return (
      <>
      <Link to={'/workers/profile/' + params.id}>{t('list_profile')}</Link>
      </>
      );
    },
  },
];

  return (
      <div style={{ height: 400, width: '100%' }}>
        <div className={classes.title}>
          <Typography className={classes.title} color="primary" align="center" variant="h6">{t('latest_joined_workers')}</Typography>
        </div>
        <DataGrid className={classes.grid}
            getRowId={(row) => row._id}
            rows={rows}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
        />
      </div>
  );
}

const useStyles = makeStyles(() => ({
  title: {
    marginTop: '5px',
    marginBottom: '5px',
  },
  workerList: {
    display: 'flex',
    alignItems: 'center',
  },
  workerListImg: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '10px',
  },
  grid: {
    maxHeight: '370px'
  },
}));

export default LatestJoinedWorkers;