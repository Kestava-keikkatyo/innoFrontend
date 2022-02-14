import {
    MailOutline,
    PermIdentity,
  } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../utils/store";
import { fetchFeedbackById } from "../../actions/feedbackActions";


type UserUrlParams = {
    feedbackId: string
}

const FeedbackDetails: React.FC<any> = () => {
    const { feedbackId } = useParams<UserUrlParams>();
    const feedbackData: any = useSelector((state: IRootState) => state.feedback.currentFeedback);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFeedbackById(feedbackId));
    }, [dispatch, feedbackData.feedbackId]);
    const classes = useStyles();
    return (
    <div className={classes.user}>
        <div className={classes.userTitleContainer}>
            <h1 className={classes.userTitle}>User's Feedback</h1>
        </div>
        <div className={classes.userContainer}>
            <div className={classes.userShow}>
                <span className={classes.userShowTitle}>Sender's Details</span>
                <div className={classes.userShowInfo}>
                    <PermIdentity className={classes.userShowIcon} />
                    <span className={classes.userShowInfoTitle}>name</span>
                    </div>
                <div className={classes.userShowInfo}>
                    <MailOutline className={classes.userShowIcon} />
                    <span className={classes.userShowInfoTitle}> email</span>
                    </div>
            </div>
            <div className={classes.userMessage}>
                <span className={classes.userShowTitle}>Feedback</span>
                <div className={classes.userShowInfo}>
                    <span className={classes.comment}>{ feedbackData.message }</span>
                </div>
            </div>
        </div>
    </div> 
    );
};

const useStyles = makeStyles(() => ({
    user: {
        flex: '4',
        padding: '20px'
    },
    userTitleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    userShow: {
        flex: 1,
        padding: '20px',
        webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)'
    },
    userMessage: {
        flex: 2,
        padding: '20px',
        webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        marginLeft: '20px'
    },
    userTitle: {

    },
    userContainer: {
        display: 'flex',
        marginTop: '20px'
    },
    userShowTitle: {
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
    userShowIcon: {
        fontSize: '16px !important',
    },
    userShowInfoTitle: {
        marginLeft: '10px'
    },
    comment: {
        fontSize: '15px'
    }

  }));


export default FeedbackDetails;