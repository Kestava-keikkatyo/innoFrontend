import { DataGrid, GridColumns } from '@mui/x-data-grid';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllBusinesses } from '../../actions/usersActions';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { ThemeProvider, createTheme } from '@mui/material';

const Businesses: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { users } = useSelector((state: IRootState) => state.users || []);

  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, serif',
      fontSize: 15,

      allVariants: {
        color: "black"
      },
    },

  });

  useEffect(() => {
    dispatch(fetchAllBusinesses());
  }, [dispatch]);

  const rows = users;
  const columns: GridColumns = [
    {
      field: 'name',
      headerName: (i18next.t('list_name')),
      minWidth: 150,
      flex: 1,
      headerClassName: 'super-app-theme--header',
      renderCell: (params) => {
        return (
          <div className={classes.userListUser}>
            <img className={classes.userListImg} src={params.row.profilePicture} alt="" />
            {params.row.firstName} {params.row.lastName}
          </div>
        );
      },
    },
    {
      field: 'category',
      headerName: (i18next.t('list_category')),
      minWidth: 100,
      flex: 1,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'email',
      headerName: (i18next.t('list_email')),
      minWidth: 200,
      flex: 1,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'city',
      headerName: (i18next.t('list_city')),
      minWidth: 100,
      flex: 1,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'userType',
      headerName: (i18next.t('list_position')),
      minWidth: 75,
      flex: 1,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'action',
      headerName: (i18next.t('list_action')),
      minWidth: 100,
      flex: 1,
      headerClassName: 'super-app-theme--header',
      renderCell: (params) => {
        return <Link to={'/businesses/profile/' + params.id}>{t('list_profile')}</Link>
      },
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: '75vh', width: '100%', padding: '0 1rem' }}>
        <div>
          <Typography  variant="h6" style={{ marginTop: '30px', marginBottom: '20px', fontWeight: 'bold' }}>
            {t('list_title_businesses')}</Typography>
        </div>
        <DataGrid
          sx={{
            '& .super-app-theme--header': {
              backgroundColor: '#C0CFFA',
              borderRight: '3px solid white',
            },
            '.MuiDataGrid-columnSeparator': {
              display: 'none',
            },
            '&.MuiDataGrid-root': {
              border: 'none',
            },
          }}
          style={{ marginTop: '20px', border: '3px solid #C0CFFA', borderRadius: '0' }}
          getRowId={(row) => row._id}
          rows={rows}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </ThemeProvider>
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

export default Businesses;