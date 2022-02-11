import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { DeleteJobById, fetchAllJobsForAgency } from "../../actions/jobActions";
import { setAlert } from '../../actions/alertActions';
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const JobListForAgency: React.FC<any> = () => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles();

  const { jobs } = useSelector((state: IRootState) => state.job || []);
  
  useEffect(() => {
    dispatch(fetchAllJobsForAgency());
  }, [dispatch]);

  let rows = [];
  rows = jobs;

  const handleDelete = (id: string) => {
    console.log(id);
    dispatch(DeleteJobById(id))
    dispatch(setAlert("Job was deleted successfully!"))
  }
  
  const columns = [
    {
        field: "title",
        headerName: (i18next.t("job_title")),
        width: 200,
    },
    { 
        field: "category", 
        headerName: (i18next.t("job_category")), 
        width: 200 
    },
    {
      field: "agency",
      headerName: (i18next.t("job_supplier")),
      width: 200,
      renderCell: (params: any) => {
          console.log(params.row);
          return <>{params.row.agency.name}</>;
      }
  },
    {
        field: "createdAt",
        headerName: (i18next.t("job_release_date")),
        width: 250,
    },
    {
        field: "action",
        headerName: (i18next.t("job_action")),
        width: 200,
        renderCell: (params: any) => {
            return (
                <>
            <Link to={"/job/update"}>
                <span className={classes.update}>{t('job_update')}</span>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.id)}
              
            />
            </>
            );
        }
    },
  ];
  
  return (
    <div style={{ height: 700, width: '100%' }}>
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
    update: {
        width: '100%',
        display: 'flex',
        marginRight: '20px',
        color: 'green',
      },
      userListDelete: {
        color: 'red',
        marginRight: '20px',
        cursor: 'pointer'
      }
}));
export default JobListForAgency;