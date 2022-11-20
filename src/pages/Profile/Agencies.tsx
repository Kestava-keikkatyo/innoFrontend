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
import { Box, Button, Stack } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const Agencies: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { users } = useSelector((state: IRootState) => state.users || []);
  useEffect(() => {
    dispatch(fetchAllAgencies());
  }, [dispatch]);
  const rows = users;
  console.log(users)
  const columns: GridColumns = [
    {
      field: 'name',
      headerName: (i18next.t('list_name')),
      minWidth: 125,
      flex: 1,
      renderCell: (params) => {
        return (
        <div className={classes.userListUser}>
          {params.row.profilePicture ? (
            <img className={classes.userListImg} src={params.row.profilePicture} alt="" />
          ) : (
            <AccountCircle className={classes.userListImg} />
          )}
          {params.row.name}
        </div>
        );
      },
    },
    {
      field: 'category',
      headerName: (i18next.t('list_category')),
      minWidth: 75,
      flex: 1,
    },
    {
      field: 'email',
      headerName: (i18next.t('list_email')),
      minWidth: 150,
      flex: 1,
    },
    {
      field: 'action',
      headerName: (i18next.t('list_action')),
      minWidth: 125,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Stack direction="row" spacing={2}>
              <Link to={'/agencies/profile/' + params.id}>
                <Button>{t('list_profile')}</Button>
              </Link>
              <Link to={'/agencies/workRequest/' + params.id}>
                <Button>
                  {t('send_work_request')}
                </Button>
              </Link>
            </Stack>
          </>
        );
      },
    },
  ];
  return (
    <div style={{ padding: '0 1rem' }}>
      <Typography className={'header'}
        style={{marginTop: '25px', marginBottom: '15px'}}
        color="primary"
        align="center"
        variant="h1"
      >
        {t('list_title_agencies')}
      </Typography>
      <Box style={{ height: '70vh', width: '100%' }}>
        <DataGrid
          getRowId={(row) => row._id}
          rows={rows}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </Box>
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