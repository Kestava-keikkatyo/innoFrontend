import { DataGrid, GridColumns } from '@mui/x-data-grid';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllWorkers } from '../../actions/usersActions';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { Box, Button, Stack } from '@mui/material';
import { roles } from '../../types/types';

const Workers: React.FC = () => {
  const { t } = useTranslation()
  const classes = useStyles();
  const dispatch = useDispatch();
  const { users } = useSelector((state: IRootState) => state.users || []);
  useEffect(() => {
    dispatch(fetchAllWorkers());
  }, [dispatch]);
  const rows = users;

  const myUserType = useSelector((state: IRootState) => state.user.data.role);

  const columns: GridColumns = [
    {
      field: 'name',
      headerName: (i18next.t('list_name')),
      minWidth: 100,
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
      field: 'email',
      headerName: (i18next.t('list_email')),
      minWidth: 100,
      flex: 1
    },
    {
      field: 'action',
      headerName: (i18next.t('list_action')),
      minWidth: 200,
      flex: 1,
      renderCell: (params) => {
        return (
          <Stack direction="row" spacing={2} alignItems="center">
            <Link to={'/workers/profile/' + params.id}>
              <Button>{t('list_profile')}</Button>
            </Link>
            {myUserType === roles.Agency && (
              <Link to={'/workers/assign/' + params.id}>
                <Button>{t('list_assign_worker')}</Button>
              </Link>
            )}
          </Stack>
        )
      }
    },
  ];

  return (
    <div style={{ padding: '0 1rem' }}>
      <Typography className={'header'}
                  style={{marginTop: '25px', marginBottom: '15px'}}
                  color="primary"
                  align="center"
                  variant="h1">
        {t('list_title_workers')}
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

export default Workers;