
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
import { ThemeProvider, createTheme } from '@mui/material';
import { E_SET_CURRENT } from '../../types/state';

const Workers: React.FC = () => {
  const { t } = useTranslation()
  const classes = useStyles();
  const dispatch = useDispatch();
  const userType = useSelector((state: IRootState) => state.user.data.role)
  const users = useSelector((state: IRootState) => state.user.contacts)
  const currentForm = useSelector((state: any) => state.employmentAgreements.currentAgreement);

  const workers: any[] = []

  if (users[0]) {
    users.forEach((user) => {
      if (user.userType == "worker") {
        workers.push(user)
      }
    }) 
  }

  const setEmploymentFormWorker = (id: any) => {
    const employmentForm = { ...currentForm, worker: id }
    dispatch({ type: E_SET_CURRENT, data: employmentForm})
  };

  let rows = [];
  rows = workers;


  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, serif',
      fontSize: 15,
      allVariants: {
        color: "black"
      },
    },
  });
  
  const columns: GridColumns = [
    {
      field: 'name',
      headerName: (i18next.t('list_name')),
      minWidth: 125,
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
      field: 'email',
      headerName: (i18next.t('list_email')),
      minWidth: 200,
      flex: 1,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'city',
      headerName: (i18next.t('list_city')),
      minWidth: 125,
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
        return (
          <>
             <Link className={classes.link} to={'/workers/profile/' + params.id}>{t('list_profile')}</Link>
          </>
        );
    },
  },
];

return (
  <ThemeProvider theme={theme}>
<div style={{ height: '75vh', width: '100%', padding: '0 1rem' }}>
  <div>
    <Typography variant="h6" style={{ marginBottom: '20px', marginTop: '30px', fontWeight: 'bold' }}>
      {t('list_title_workers')}</Typography>
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
  link: {
    marginRight: '6px'
  }
}));

export default Workers;