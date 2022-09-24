import { DataGrid, GridColumns } from '@mui/x-data-grid';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllAgencies } from '../../actions/usersActions';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { Stack } from '@mui/material';

const Agencies: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { users } = useSelector((state: IRootState) => state.users || []);
  useEffect(() => {
    dispatch(fetchAllAgencies());
  }, [dispatch]);
  let rows = [];
  rows = users;
  const columns: GridColumns = [
    {
      field: 'name',
      headerName: (i18next.t('list_name')),
      minWidth: 150,
      flex: 1,
      renderCell: (params) => {
        return (
        <div className={classes.userListUser}>
          <img className={classes.userListImg} src={params.row.profilePicture} alt="" />
          {params.row.name}
        </div>
        );
      },
    },
    {
      field: 'category',
      headerName: (i18next.t('list_category')),
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'email',
      headerName: (i18next.t('list_email')),
      minWidth: 200,
      flex: 1,
    },
    {
      field: 'city',
      headerName: (i18next.t('list_city')),
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'userType',
      headerName: (i18next.t('list_position')),
      minWidth: 75,
      flex: 1,
    },
    {
      field: 'action',
      headerName: (i18next.t('list_action')),
      minWidth: 100,
      flex: 1,
      renderCell: (params) => {
        return (
        <>
        <Stack direction="row" spacing={2}>
        <Link to={'/agencies/profile/' + params.id}>{t('list_profile')}</Link>
        <Link to={'/agencies/workRequest/' + params.id}>Send work request</Link>
        </Stack>
        </>
        );
      },
    },
  ];
  return (
    <div style={{ height: '75vh', width: '100%', padding: '0 1rem' }}>
      <div>
        <Typography className={'header'}
        style={{marginTop: '25px', marginBottom: '15px'}}
        color="primary"
        align="center"
        variant="h1">
          {t('list_title_agencies')}</Typography>
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
  title: {
    marginTop: '25px',
    marginBottom: '15px',
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
}));

export default Agencies;