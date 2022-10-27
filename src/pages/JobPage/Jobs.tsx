import { DataGrid, GridColumns } from '@mui/x-data-grid';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { IRootState } from '../../utils/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import { fetchAllJobAds } from '../../actions/jobActions';
import PageLoading from '../../components/PageLoading';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next'
import moment from 'moment';

const Jobs: React.FC = () => {

    const { t } = useTranslation()
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAllJobAds());
    }, [dispatch]);
    
    const { jobs, loading } = useSelector((state: IRootState) => state.job || []);

    if (loading) return <PageLoading />

    let rows = [];
    rows = jobs;
    const columns: GridColumns = [
        {
            field: 'title',
            headerName: (i18next.t('job_title')),
            width: 200,
        },
        { 
            field: 'category', 
            headerName: (i18next.t('job_category')), 
            width: 200 
        },
        {
            field: 'city',
            headerName: (i18next.t('job_city')),
            width: 200,
        },
        {
            field: 'user',
            headerName: (i18next.t('job_supplier')),
            width: 200,
            renderCell: (params) => {
                console.log(params.row);
                return <>{params.row.user.name}</>;
            }
        },
        {
            field: 'createdAt',
            headerName: (i18next.t('job_release_date')),
            width: 200,
            renderCell: (params) => {
                console.log(params.row);
                return <>{moment(params.row.createdAt).format('DD/MM/YYYY')}</>; 
            }
        },
        {
            field: 'action',
            headerName: (i18next.t('job_read_more')),
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                <Link to={'/jobs/details/' + params.id}>
                    <span className={classes.details}>{t('job_details')}</span>
                </Link>
                </>
                );
            }
        },
    ];
    
    return (
        <div style={{ height: "75vh", width: '100%', padding: "0 1rem" }}>
            <div className={classes.title}>
                <Typography color="primary" align="center" 
                style={{marginTop: "25px", marginBottom: "15px"}} 
                className="header" variant="h1">{t('job_ads')}</Typography>
            </div>
            <DataGrid
            getRowId={(row) => row._id}
            rows={rows}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            />
        </div>
    );
};

const useStyles = makeStyles(() => ({
    details: {
        width: '100%',
        display: 'flex',
        color: 'green',
    },
    title: {
        marginTop: '25px',
        marginBottom: '15px',
    },
}));

export default Jobs;