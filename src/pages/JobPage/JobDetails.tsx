import {
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
  } from "@material-ui/icons";
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../utils/store";
import { fetchJobById } from "../../actions/jobActions";
import { fetchAllAgencies } from "../../actions/allUsersActions";


type UserUrlParams = {
    jobId: string
}
const JobDetails: React.FC<any> = () =>  {
   
    const { jobId } = useParams<UserUrlParams>();
    const jobData: any = useSelector((state: IRootState) => state.job.currentJob);
    const {agencies} = useSelector((state: IRootState) => state.allUsers || []);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchJobById(jobId));
        dispatch(fetchAllAgencies());
    }, [dispatch, jobData.jobId]);
    const classes = useStyles();

    return (
    <div className={classes.job}>
        <div className={classes.jobTitleContainer}>
            <h1 className={classes.jobTitle}>Job Details</h1>
        </div>
        <div className={classes.jobContainer}>
            <div className={classes.jobShow}>
                <span className={classes.jobShowTitle}>Supplier</span>
                <div className={classes.userShowInfo}>
                    <PermIdentity className={classes.jobShowIcon} />
                    <span className={classes.jobShowInfoTitle}>{ jobData.agencyId }</span>
                </div>
                <span className={classes.jobShowTitle}>Details</span>
                <div className={classes.userShowInfo}>
                    <span className={classes.jobShowTitle}>Title</span>
                    <span className={classes.jobShowInfoTitle}>{ jobData.jobTitle }</span>
                </div>
                <div className={classes.userShowInfo}>
                    <span className={classes.jobShowTitle}>Category</span>
                    <span className={classes.jobShowInfoTitle}>{ jobData.jobCategory }</span>
                </div>
                <div className={classes.userShowInfo}>
                    <span className={classes.jobShowTitle}>Job Type</span>
                    <span className={classes.jobShowInfoTitle}> Full time</span>
                </div>
                <div className={classes.userShowInfo}>
                    <span className={classes.jobShowTitle}>Posted at</span>
                    <span className={classes.jobShowInfoTitle}> { jobData.createdAt }</span>
                </div>
                <div className={classes.userShowInfo}>
                    <span className={classes.jobShowTitle}>Available until</span>
                    <span className={classes.jobShowInfoTitle}> { jobData.applyingEndsAt }</span>
                </div>
                <div className={classes.userShowInfo}>
                    <LocationSearching className={classes.jobShowIcon} />
                    { [ jobData.streetAddress, jobData.zipCode, jobData.city ].join(', ') }
                </div>
                <span className={classes.jobShowTitle}>Requirements and Responsibilities</span>
                <div className={classes.userShowInfo}>
                    <span className={classes.details}>{ jobData.requirements }</span>
                </div>
            </div>
            <div className={classes.jobDescription}>
            <span className={classes.jobShowTitle}>Full Job Description</span>
            <div className={classes.userShowInfo}>
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
    userShowInfo: {
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