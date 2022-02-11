import React, { useEffect } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../utils/store";
import PageLoading from "../../components/PageLoading";
import Typography from '@mui/material/Typography';
import { fetchFeedbackById } from "../../actions/feedbackActions2";
import { Link } from 'react-router-dom';

type FeedbackUrlParams = {
    feedbackId: string
}
const Details: React.FC<any> = () =>  {
   
    const { feedbackId } = useParams<FeedbackUrlParams>();
    const feedbackData: any = useSelector((state: IRootState) => state.feedback2.currentFeedback);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFeedbackById(feedbackId));
    }, [dispatch, feedbackId]);
    const classes = useStyles();

    if(!feedbackData) return (
        <PageLoading />
    );

    return (
    <div className={classes.feedback}>
        <div className={classes.feedbackTitleContainer}>
            <Typography color="secondary" className={classes.feedbackTitle} variant="h4">Feedback details</Typography>
        </div>
        <div>
        <Button className={classes.back} color="secondary" component={Link} to="/feedback-page">BACK</Button>
        </div>
        <div className={classes.feedbackContainer}>
            <div className={classes.feedbackShow}>
                <div className={classes.feedbackShowInfo}>
                    <span className={classes.feedbackShowTitle}>Title</span>
                    <span className={classes.feedbackShowInfoTitle}> { feedbackData.heading }</span>
                </div>
                <div className={classes.feedbackShowInfo}>
                    <span className={classes.feedbackShowTitle}>Sending date</span>
                    <span className={classes.feedbackShowInfoTitle}> { feedbackData.createdAt }</span>
                </div>
                <div className={classes.feedbackShowInfo}>
                    <span className={classes.feedbackShowTitle}>Recipient</span>
                    <span className={classes.feedbackShowInfoTitle}>{ feedbackData.recipient }</span>
                </div>
            </div>
            <div className={classes.feedbackDescription}>
                <span className={classes.feedbackShowTitle}>Message</span>
                <div className={classes.feedbackShowInfo}>
                    <span className={classes.details}>{ feedbackData.message }</span>
                </div>
            </div>
        </div>
    </div> 
    );
};

const useStyles = makeStyles(() => ({
    feedback: {
        flex: '4',
        padding: '20px'
    },
    feedbackTitleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    feedbackShow: {
        flex: 1,
        padding: '20px',
        webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)'
    },
    feedbackDescription: {
        flex: 2,
        padding: '20px',
        webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        marginLeft: '20px'
    },
    feedbackTitle: {
        fontSize: '18px',
        fontWeight: 600,
    },
    feedbackContainer: {
        display: 'flex',
        marginTop: '20px'
    },
    feedbackShowTitle: {
        fontSize: '14px',
        fontWeight: 600,
        color: '#AFAAAA'
    },
    feedbackShowInfo: {
        display: 'flex',
        alignItems: 'center',
        margin: '5px 0px 30px 10px',
        color: '#444'
    },
    feedbackShowInfoTitle: {
        marginLeft: '10px',
        marginTop: '5px',
    },
    details: {
        fontSize: '15px',
        paddingTop: '0px'
    },
    back: {
        marginLeft: '1000px',
        fontSize: '17px',
    }
}));

export default Details;