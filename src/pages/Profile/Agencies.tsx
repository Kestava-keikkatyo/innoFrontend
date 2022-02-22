import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import { Link } from "react-router-dom";
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllAgencies } from "../../actions/usersActions";
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import { useTranslation } from "react-i18next"
import i18next from "i18next"

const Agencies: React.FC<any> = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { users } = useSelector((state: IRootState) => state.users || []);
  useEffect(() => {
    dispatch(fetchAllAgencies());
  }, [dispatch]);
  let rows = [];
  rows = users;
  const columns = [
    {
      field: "name",
      headerName: (i18next.t("list_name")),
      width: 250,
      renderCell: (params: any) => {
        return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.profilePicture} alt="" />
          {params.row.name}
        </div>
        );
      },
    },
    {
      field: "category", 
      headerName: (i18next.t("list_category")),
      width: 150 
    },
    {
      field: "email", 
      headerName: (i18next.t("list_email")), 
      width: 200 
    },
    {
      field: "city", 
      headerName: (i18next.t("list_city")), 
      width: 200 
    },
    {
      field: "userType", 
      headerName: (i18next.t("list_position")), 
      width: 150 
    },
    {
      field: "action",
      headerName: (i18next.t("list_action")),
      width: 200,
      renderCell: (params: any) => {
        return (
        <>
        <Link to={"/agencies/" + params.id}>{t('list_profile')}</Link>
        </>
        );
      },
    },
  ];
  return (
    <div style={{ height: 700, width: '100%' }}>
      <div>
        <Typography className={classes.title} color="primary" align="center" variant="h5">{t('list_title_agencies')}</Typography>
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

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '25px',
    marginBottom: '15px',
  }
}));

export default Agencies;