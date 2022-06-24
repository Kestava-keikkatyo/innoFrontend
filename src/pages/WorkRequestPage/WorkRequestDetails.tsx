import {
    PermIdentity,
  } from '@mui/icons-material';
import React, { useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../utils/store';
import PageLoading from '../../components/PageLoading';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import { fetchReceivedWorkRequestById } from '../../actions/workRequestActions';

type ReceivedWorkRequestUrlParams = {
    receivedWorkRequestId: string
}
const WorkRequestDetails: React.FC<React.ReactNode> = () => {
   
    const { t } = useTranslation()
    const { receivedWorkRequestId } = useParams<ReceivedWorkRequestUrlParams>();
    const receivedWorkRequestData: any = useSelector((state: IRootState) => state.workRequest.currentWorkRequest);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchReceivedWorkRequestById(receivedWorkRequestId));
    }, [dispatch, receivedWorkRequestId]);
    const classes = useStyles();

    if(!receivedWorkRequestData || receivedWorkRequestId !== receivedWorkRequestData._id) return (
        <PageLoading />
    );

    return (
    <div className={classes.receivedWR}>
        <div className={classes.workRWTitleContainer}>
            <Typography className={classes.workRWTitle} color="primary" variant="h5">{t('work_request_description')}</Typography>
        </div>
        <div className={classes.workRWContainer}>
            <div className={classes.workRWShow}>
                <span className={classes.workRWTitle}>{t('work_request_sender')}</span>
                <div className={classes.workRWShowInfo}>
                    <PermIdentity className={classes.workRWShowIcon} />
                    <span className={classes.workRWShowInfoTitle}> {receivedWorkRequestData.sender.name} </span>
                </div>
                <span className={classes.workRWTitle}>{t('work_request_specifics')}</span>
                <div className={classes.workRWShowInfo}>
                    <span className={classes.workRWShowTitle}>{t('work_request_headline')}</span>
                    <span className={classes.workRWShowInfoTitle}>{ receivedWorkRequestData.headline }</span>
                </div>
                <div className={classes.workRWShowInfo}>
                    <span className={classes.workRWShowTitle}>{t('work_request_workers_nuber')}</span>
                    <span className={classes.workRWShowInfoTitle}>{ receivedWorkRequestData.workersNumber }</span>
                </div>
            </div>
            <div className={classes.workRWDescription}>
                <span className={classes.workRWShowTitle}>{t('work_request_requirements')}</span>
                <div className={classes.workRWShowInfo}>
                    <span className={classes.details}>{ receivedWorkRequestData.requirements }</span>
                </div>
                <span className={classes.workRWShowTitle}>{t('work_request_desirableSkills')}</span>
                <div className={classes.workRWShowInfo}>
                    <span className={classes.details}>{ receivedWorkRequestData.desirableSkills }</span>
                </div>
                <span className={classes.workRWShowTitle}>{t('work_request_details')}</span>
                <div className={classes.workRWShowInfo}>
                    <span className={classes.details}>{ receivedWorkRequestData.details }</span>
                </div>
            </div>
        </div>
    </div> 
    );
};

const useStyles = makeStyles(() => ({
    receivedWR: {
        flex: '4',
        padding: '20px'
    },
    workRWTitleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    workRWShow: {
        flex: 1,
        padding: '20px',
        webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)'
    },
    workRWDescription: {
        flex: 2,
        padding: '20px',
        webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        marginLeft: '20px'
    },
    workRWTitle: {
    },
    workRWContainer: {
        display: 'flex',
        marginTop: '20px'
    },
    workRWShowTitle: {
        fontSize: '14px',
        fontWeight: 600,
        color: '#AFAAAA'
    },
    workRWShowInfo: {
        display: 'flex',
        alignItems: 'center',
        margin: '5px 0px 30px 10px',
        color: '#444'
    },
    workRWShowIcon: {
        fontSize: '16px !important',
        marginRight: '5px',
    },
    workRWShowInfoTitle: {
        marginLeft: '10px',
        marginTop: '5px',
    },
    details: {
        fontSize: '15px',
        paddingTop: '0px'
    },
    button: {
        marginLeft: '820px',
        fontSize: '15px',
    }
}));

export default WorkRequestDetails;