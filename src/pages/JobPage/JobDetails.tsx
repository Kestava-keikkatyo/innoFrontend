import {
    LocationSearching,
    PermIdentity,
  } from "@material-ui/icons";
import React, { useEffect } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../utils/store";
import { fetchJobById } from "../../actions/jobActions";
import PageLoading from "../../components/PageLoading";
import { useTranslation } from "react-i18next"

type JobUrlParams = {
    jobId: string
}
const JobDetails: React.FC<any> = () =>  {
   
    const { t } = useTranslation()
    const { jobId } = useParams<JobUrlParams>();
    const jobData: any = useSelector((state: IRootState) => state.job.currentJob);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchJobById(jobId));
    }, [dispatch, jobId]);
    const classes = useStyles();

    if(!jobData) return (
        <PageLoading />
    );

    return (
    <div className={classes.job}>
        <div className={classes.jobTitleContainer}>
            <h1 className={classes.jobTitle}>{t('job_details_title')}</h1>
        </div>
        <div className={classes.jobContainer}>
            <div className={classes.jobShow}>
                <span className={classes.jobTitle}>{t('job_supplier')}</span>
                <div className={classes.jobShowInfo}>
                    <PermIdentity className={classes.jobShowIcon} />
                    <span className={classes.jobShowInfoTitle}>{ jobData.agency.name }</span>
                </div>
                <span className={classes.jobTitle}>{t('job_specifics')}</span>
                <div className={classes.jobShowInfo}>
                    <span className={classes.jobShowTitle}>{t('job_category')}</span>
                    <span className={classes.jobShowInfoTitle}>{ jobData.category }</span>
                </div>
                <div className={classes.jobShowInfo}>
                    <span className={classes.jobShowTitle}>{t('job_title')}</span>
                    <span className={classes.jobShowInfoTitle}>{ jobData.title }</span>
                </div>
                <div className={classes.jobShowInfo}>
                    <LocationSearching className={classes.jobShowIcon} />
                    { [ jobData.street, jobData.zipCode, jobData.city ].join(', ') }
                </div>
                <div className={classes.jobShowInfo}>
                    <span className={classes.jobShowTitle}>{t('job_type')}</span>
                    <span className={classes.jobShowInfoTitle}>{ jobData.jobType }</span>
                </div>
                <div className={classes.jobShowInfo}>
                    <span className={classes.jobShowTitle}>{t('job_salary')}</span>
                    <span className={classes.jobShowInfoTitle}>{ jobData.salary }</span>
                </div>
                <div className={classes.jobShowInfo}>
                    <span className={classes.jobShowTitle}>{t('job_posted_at')}</span>
                    <span className={classes.jobShowInfoTitle}> { jobData.createdAt }</span>
                </div>
                <div className={classes.jobShowInfo}>
                    <span className={classes.jobShowTitle}>{t('job_available_until')}</span>
                    <span className={classes.jobShowInfoTitle}> { jobData.applicationLastDate }</span>
                </div>
            </div>
            <div className={classes.jobDescription}>
                <span className={classes.jobShowTitle}>{t('requirements_and_responsibilities')}</span>
                <div className={classes.jobShowInfo}>
                    <span className={classes.details}>{ jobData.requirements }</span>
                </div>
                <span className={classes.jobShowTitle}>{t('job_desirableSkills')}</span>
                <div className={classes.jobShowInfo}>
                    <span className={classes.details}>{ jobData.desirableSkills }</span>
                </div>
                <span className={classes.jobShowTitle}>{t('job_benefits')}</span>
                <div className={classes.jobShowInfo}>
                    <span className={classes.details}>{ jobData.benefits }</span>
                </div>
                <span className={classes.jobShowTitle}>{t('full_job_description')}</span>
                <div className={classes.jobShowInfo}>
                    <span className={classes.details}>{ jobData.details }</span>
                </div>
            </div>
        </div>
    </div> 
    );
};

const useStyles = makeStyles(() => ({
    job: {
        flex: '4',
        padding: '20px'
    },
    jobTitleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    jobShow: {
        flex: 1,
        padding: '20px',
        webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)'
    },
    jobDescription: {
        flex: 2,
        padding: '20px',
        webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        marginLeft: '20px'
    },
    jobTitle: {
        fontSize: '18px',
        fontWeight: 600,
        color: '#747474'
    },
    jobContainer: {
        display: 'flex',
        marginTop: '20px'
    },
    jobShowTitle: {
        fontSize: '14px',
        fontWeight: 600,
        color: '#AFAAAA'
    },
    jobShowInfo: {
        display: 'flex',
        alignItems: 'center',
        margin: '20px 0px',
        color: '#444'
    },
    jobShowIcon: {
        fontSize: '16px !important',
    },
    jobShowInfoTitle: {
        marginLeft: '10px'
    },
    details: {
        fontSize: '15px'
    }
}));

export default JobDetails;