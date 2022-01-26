import { DataGrid } from "@material-ui/data-grid";
import * as React from 'react';
import { Link } from "react-router-dom";
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { makeStyles } from "@material-ui/core";
import { fetchAllJobs } from "../../actions/jobActions";
import PageLoading from "../../components/PageLoading";
import { useTranslation } from "react-i18next";
import i18next from "i18next"


const NewJobList: React.FC<any> = () => {

    const { t } = useTranslation()
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAllJobs());
    }, [dispatch]);
    
    const { jobs, loading } = useSelector((state: IRootState) => state.job || []);
    console.log('DEBUG', jobs, loading)

    if (loading) return <PageLoading />

    let rows = [];
    rows = jobs;
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
            field: "city",
            headerName: (i18next.t("job_city")),
            width: 200,
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
            width: 200,
        },
        {
            field: "action",
            headerName: (i18next.t("job_read_more")),
            width: 200,
            renderCell: (params: any) => {
                return (
                    <>
                <Link to={"/job-details/" + params.id}>
                    <span className={classes.details}>{t('job_details')}</span>
                </Link>
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
};

const useStyles = makeStyles(() => ({
    details: {
        width: '100%',
        display: 'flex',
        color: 'green',
      }
}));

export default NewJobList;