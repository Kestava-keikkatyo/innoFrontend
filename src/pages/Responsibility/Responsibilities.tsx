import { DataGrid, GridColumns } from '@mui/x-data-grid';
import * as React from 'react';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import { setAlert } from '../../actions/alertActions';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Button } from '@mui/material';
import { Responsibility } from '../../types/types';
import moment from 'moment';
import { deleteResponsibility, fetchAllResponsibilities } from '../../actions/responsibilityActions';

const Responsibilities: React.FC = () => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  const { responsibilities } = useSelector((state: IRootState) => state.responsibility || []);
  
  useEffect(() => {
    dispatch(fetchAllResponsibilities());
  }, [dispatch]);

  let rows = [];
  rows = responsibilities;

  const handleDelete = (id: string) => {
    console.log(id);
    dispatch(deleteResponsibility(responsibilities.find(responsibility => responsibility._id === id) as Responsibility))
    dispatch(setAlert('Responsibility was deleted successfully!'))
  }
  
  const columns: GridColumns = [
    {
        field: 'responsible',
        headerName: (i18next.t('responsibility_responsible')),
        width: 300,
    },
    { 
        field: 'rule', 
        headerName: (i18next.t('responsibility_rule')), 
        width: 250 
    },
    {
        field: 'createdAt',
        headerName: (i18next.t('responsibility_created_at')),
        width: 250,
        renderCell: (params) => {
          console.log(params.row);
          return <>{moment(params.row.createdAt).format('DD/MM/YYYY')}</>; 
      }
    },
    {
        field: 'action',
        headerName: (i18next.t('responsibility_action')),
        width: 200,
        renderCell: (params) => {
            return (
                <>
            <Link to={'/responsibilities/update/' + params.id}>
                <span className={classes.responsibilityUpdate}>{t('responsibility_update')}</span>
            </Link>
            <DeleteOutline
              className={classes.responsibilityDelete}
              onClick={() => handleDelete(params.row._id)}
              
            />
            </>
            );
        }
    },
  ];
  
  return (
    <div style={{ height: 700, width: '100%' }}>
      <div>
        <Typography className={classes.responsibilityTitle} color="primary" align="center" variant="h5">{t('responsibilities')}</Typography>
      </div>
      <div>
        <Button className={classes.button} color="secondary" component={Link} to="/responsibilities/create">{t('responsibility_create_new_responsibility')}</Button>
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
    responsibilityUpdate: {
    width: '100%',
    display: 'flex',
    marginRight: '20px',
    color: 'green',
  },
  responsibilityDelete: {
    color: 'red',
    marginRight: '20px',
    cursor: 'pointer'
  },
  responsibilityTitle: {
    marginTop: '25px',
    marginBottom: '15px',
  },
  button: {
    marginLeft: '850px',
    fontSize: '15px',
  }
}));

export default Responsibilities;