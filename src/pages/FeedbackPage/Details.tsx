import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../utils/store';
import PageLoading from '../../components/PageLoading';
import Typography from '@mui/material/Typography';
import { fetchMyFeedbackById } from '../../actions/feedBackActions';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

type FeedbackUrlParams = {
    feedbackId: string
}

const Details: React.FC = () => {

    const { t } = useTranslation();
    const { feedbackId } = useParams<FeedbackUrlParams>();
    const feedbackData = useSelector((state: IRootState) => state.feedback.currentFeedback);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMyFeedbackById(feedbackId));
    }, [dispatch, feedbackId]);
    const classes = useStyles();

    if(!feedbackData) return (
        <PageLoading />
    );

    const questions = {
        shift: t('feeling_shift'),
        orientation: t('how_was_orientation'),
        reception: t('reception'),
        appreciation: t('appreciation'),
        expectations: t('expectations'),
    };

    return (
        <div className={classes.feedback}>
            <div className={classes.feedbackTitleContainer}>
                <Typography color="secondary" className={classes.feedbackTitle} variant="h4">{t('feedback_title_details')}</Typography>
            </div>
            <div className={classes.back}>
            <Button className={classes.backButton} color="secondary" component={Link} to="/feedback">{t('back')}</Button>
            </div>
            <div className={classes.feedbackContainer}>
                <div className={classes.feedbackShow}>
                    <div className={classes.feedbackShowInfo}>
                        <span className={classes.feedbackShowTitle}>{t('feedback_recipient')}: </span>
                        <span className={classes.feedbackShowInfoTitle}>{ feedbackData.recipient }</span>
                    </div>
                    <div className={classes.feedbackShowInfo}>
                        <span className={classes.feedbackShowTitle}>{t('sending_date')}: </span>
                        <span className={classes.feedbackShowInfoTitle}> { moment(feedbackData.createdAt).format('DD/MM/YYYY') }</span>
                    </div>
                    <div className={classes.feedbackShowInfo}>
                        <span className={classes.feedbackShowTitle}>{t('feedback_anonymity')}: </span>
                        <span className={classes.feedbackShowInfoTitle}>{ feedbackData.sender }</span>
                    </div>
                </div>
                <div className={classes.feedbackDescription}>
                    <span className={classes.feedbackMessageTitle}>{t('feedback_message')}</span>
                    {Object.entries(questions).map(questionEntry => (
                      <div key={questionEntry[0]}>
                          <Typography color="success" id={questionEntry[0] + '-radio-buttons-group-label'} className={classes.feedbackShowTitleIcons} variant="h6">{questionEntry[1]}</Typography>
                          <SentimentVeryDissatisfiedIcon className={classes.icon} />
                          <SentimentNeutralIcon className={classes.icon} />
                          <SentimentSatisfiedAltIcon className={classes.icon} />
                          <SentimentVerySatisfiedIcon className={classes.icon} />
                          <p>Comment for {questionEntry[1]}</p>
                      </div>
                    ))}
                    <Typography color="success" className={classes.feedbackShowTitle} variant="h6">{t('feedback_details')}</Typography>
                    <span>Konmentti</span>
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
        color: '#AFAAAA',
    },
    feedbackShowTitleIcons: {
        fontSize: '14px',
        fontWeight: 600,
        color: '#AFAAAA',
        marginTop: '20px'
    },
    feedbackMessageTitle: {
        fontSize: '24px',
        fontWeight: 600,
        color: '#AFAAAA'
    },
    icon: {
        fontSize: '32px',
        marginRight: '6px'
    },
    feedbackShowInfo: {
        display: 'flex',
        alignItems: 'center',
        margin: '5px 0px 30px 10px',
        color: '#444'
    },
    feedbackShowInfoTitle: {
        marginLeft: '10px',
    },
    details: {
        fontSize: '15px',
        paddingTop: '0px'
    },
    backButton: {
        fontSize: '14px',
        border: '1px solid',
        borderColor: 'secondary'
    },
    back: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
}));

export default Details;