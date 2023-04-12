import { DataGrid, GridColumns } from '@mui/x-data-grid';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const Workers: React.FC = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const dispatch = useDispatch()
  const users = useSelector((state: IRootState) => state.user.contacts)
  const workers: any[] = []

  if (users[0]) {
    users.forEach((user) => {
    if (user.userType == "worker") {
      workers.push(user)
    }
  }) 
  }
  
  let rows = [];
  rows = workers;


  const columns: GridColumns = [
    {
      field: 'name',
      headerName: (i18next.t('list_name')),
      minWidth: 125,
      flex: 1,
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
      flex: 1
    },
    {
      field: 'city', 
      headerName: (i18next.t('list_city')), 
      minWidth: 125,
      flex: 1
    },
    {
      field: 'userType', 
      headerName: (i18next.t('list_position')), 
      minWidth: 75,
      flex: 1 
    },
    {
      field: 'action',
      headerName: (i18next.t('list_action')),
      minWidth: 100,
      flex: 1,
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
<div style={{ height: '75vh', width: '100%', padding: '0 1rem' }}>
  <div>
    <Typography className={'header'}
                style={{marginTop: '25px', marginBottom: '15px'}}
                color="primary"
                align="center"
                variant="h1">
      {t('list_title_workers')}</Typography>
  </div>
  <DataGrid
      getRowId={(row) => row._id}
      rows={rows}
      disableSelectionOnClick
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
  />
  <Typography gutterBottom variant="h1" className='header2'> 
    <Link href="/employment" className={classes.link} to={'/employment'}>{t('add_workers_to_business')}</Link> 
  </Typography>
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
  link: {
    color: "black",
    textDecoration: "underline"
  }
}));

export default Workers;