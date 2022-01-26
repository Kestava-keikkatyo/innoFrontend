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

type JobUrlParams = {
    jobId: string
}
const JobDetails: React.FC<any> = () =>  {
   
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
            <h1 className={classes.jobTitle}>Job Details</h1>
        </div>
        <div className={classes.jobContainer}>
            <div className={classes.jobShow}>
                <span className={classes.jobShowTitle}>Supplier</span>
                <div className={classes.jobShowInfo}>
                    <PermIdentity className={classes.jobShowIcon} />
                    <span className={classes.jobShowInfoTitle}>{ jobData.agency.name }</span>
                </div>
                <span className={classes.jobShowTitle}>Specifics</span>
                <div className={classes.jobShowInfo}>
                    <span className={classes.jobShowTitle}>Category</span>
                    <span className={classes.jobShowInfoTitle}>{ jobData.category }</span>
                </div>
                <div className={classes.jobShowInfo}>
                    <span className={classes.jobShowTitle}>Title</span>
                    <span className={classes.jobShowInfoTitle}>{ jobData.title }</span>
                </div>
                <div className={classes.jobShowInfo}>
                    <LocationSearching className={classes.jobShowIcon} />
                    { [ jobData.street, jobData.zipCode, jobData.city ].join(', ') }
                </div>
                <div className={classes.jobShowInfo}>
                    <span className={classes.jobShowTitle}>Job Type</span>
                    <span className={classes.jobShowInfoTitle}>{ jobData.jobType }</span>
                </div>
                <div className={classes.jobShowInfo}>
                    <span className={classes.jobShowTitle}>Salary</span>
                    <span className={classes.jobShowInfoTitle}>{ jobData.salary }</span>
                </div>
                <div className={classes.jobShowInfo}>
                    <span className={classes.jobShowTitle}>Posted at</span>
                    <span className={classes.jobShowInfoTitle}> { jobData.createdAt }</span>
                </div>
                <div className={classes.jobShowInfo}>
                    <span className={classes.jobShowTitle}>Available until</span>
                    <span className={classes.jobShowInfoTitle}> { jobData.applicationLastDate }</span>
                </div>
            </div>
            <div className={classes.jobDescription}>
                <span className={classes.jobShowTitle}>Requirements and Responsibilities</span>
                <div className={classes.jobShowInfo}>
                    <span className={classes.details}>{ jobData.requirements }</span>
                </div>
                <span className={classes.jobShowTitle}>Desirable skills</span>
                <div className={classes.jobShowInfo}>
                    <span className={classes.details}>{ jobData.desirableSkills }</span>
                </div>
                <span className={classes.jobShowTitle}>Benefits</span>
                <div className={classes.jobShowInfo}>
                    <span className={classes.details}>{ jobData.benefits }</span>
                </div>
                <span className={classes.jobShowTitle}>Full Job Description</span>
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

    },
    jobContainer: {
        display: 'flex',
        marginTop: '20px'
    },
    jobShowTitle: {
        fontSize: '14px',
        fontWeight: 600,
        color: 'rgb(175, 170, 170)'
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