import React, { useEffect } from 'react';
import { Box, Button } from '@mui/material';
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
import { Feedback } from '../../types/types';

type FeedbackUrlParams = {
    feedbackId: string
}

interface IFeedbackData extends Feedback {
    [key: string]: any
}

const ReceivedDetails: React.FC = () => {

    const { t } = useTranslation();
    const { feedbackId } = useParams<FeedbackUrlParams>();
    const feedbackData: IFeedbackData | undefined = useSelector((state: IRootState) => state.feedback.currentFeedback);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMyFeedbackById(feedbackId));
    }, [dispatch, feedbackId]);
    const classes = useStyles();

    if(!feedbackData) return (
        <PageLoading />
    );

    const questions = {
        shift: t('feedback_shift'),
        orientation: t('feedback_orientation'),
        reception: t('feedback_reception'),
        appreciation: t('feedback_appreciation'),
        expectation: t('feedback_expectation'),
    };

    return (
        <div className={classes.feedback}>
            <div className={classes.feedbackTitleContainer}>
                <Typography color="secondary" className={classes.feedbackTitle} variant="h4">{t('feedback_title_details')}</Typography>
            </div>
            <div className={classes.back}>
                <Button className={classes.backButton} color="secondary" component={Link} to="/receivedFeedbacks">{t('back')}</Button>
            </div>
            <div className={classes.feedbackContainer}>
                <div className={classes.feedbackShow}>
                    <div className={classes.feedbackShowInfo}>
                        <span className={classes.feedbackShowTitle}>{t('feedback_sender')}: </span>
                        <span className={classes.feedbackShowInfoTitle}>{
                            feedbackData.anonymous ?
                                t('anonymous') :
                                feedbackData.senderName
                        }</span>
                    </div>
                    <div className={classes.feedbackShowInfo}>
                        <span className={classes.feedbackShowTitle}>{t('sending_date')}: </span>
                        <span className={classes.feedbackShowInfoTitle}> { moment(feedbackData.createdAt).format('DD/MM/YYYY') }</span>
                    </div>
                    <div className={classes.feedbackShowInfo}>
                        <span className={classes.feedbackShowTitle}>{t('feedback_anonymity')}: </span>
                        <span className={classes.feedbackShowInfoTitle}>{
                            feedbackData.anonymous ?
                                t('feedback_anonymity_yes') :
                                t('feedback_anonymity_no')
                        }</span>
                    </div>
                </div>
                <div className={classes.feedbackDescription}>
                    <span className={classes.feedbackMessageTitle}>{t('feedback_receivedMessage')}</span>
                    {Object.entries(questions).map(questionEntry => (
                        <div key={questionEntry[0]}>
                            <Typography
                                color="success"
                                id={questionEntry[0] + '-radio-buttons-group-label'}
                                className={classes.feedbackShowTitleIcons}
                                variant="h6"
                            >
                                {questionEntry[1]}
                            </Typography>
                            {Object.keys(feedbackData).map(key => {
                                if (key === questionEntry[0]) {
                                    return (
                                        <>
                                            {feedbackData[key] === 1 ?
                                                <SentimentVeryDissatisfiedIcon className={classes.filledIcon} /> :
                                                <SentimentVeryDissatisfiedIcon className={classes.icon} />
                                            }
                                            {feedbackData[key] === 2 ?
                                                <SentimentNeutralIcon className={classes.filledIcon} /> :
                                                <SentimentNeutralIcon className={classes.icon} />
                                            }
                                            {feedbackData[key] === 3 ?
                                                <SentimentSatisfiedAltIcon className={classes.filledIcon} /> :
                                                <SentimentSatisfiedAltIcon className={classes.icon} />
                                            }
                                            {feedbackData[key] === 4 ?
                                                <SentimentVerySatisfiedIcon className={classes.filledIcon} /> :
                                                <SentimentVerySatisfiedIcon className={classes.icon} />
                                            }
                                            {feedbackData[key + 'Message'] !== '' && (
                                                <Box sx={{ boxShadow: 3, padding: '5px', borderRadius: '5px', margin: '10px 0' }}>
                                                    {feedbackData[key + 'Message']}
                                                </Box>
                                            )}
                                        </>
                                    )
                                }
                            })}
                        </div>
                    ))}
                    {feedbackData.additionalMessage !== '' && (
                        <>
                            <Typography color="success" className={classes.feedbackShowTitle} variant="h6">
                                {t('feedback_details')}
                            </Typography>
                            <Box sx={{ boxShadow: 3, padding: '5px', borderRadius: '5px', margin: '10px 0' }}>
                                { feedbackData.additionalMessage }
                            </Box>
                        </>
                    )}
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
        fontSize: '18px',
        fontWeight: 600,
        color: '#AFAAAA',
    },
    feedbackShowTitleIcons: {
        fontSize: '18px',
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
        fontSize: '52px',
        marginRight: '6px'
    },
    filledIcon: {
        fontSize: '52px',
        marginRight: '6px',
        color: '#fff',
        background:
            'rgb(255, 124, 0) ' +
            'linear-gradient(' +
            '136deg, ' +
            'rgb(255, 150, 55) 0%, ' +
            'rgb(242, 113, 33) 50%, ' +
            'rgb(233, 64, 87) 100%' +
            ');',
        borderRadius: '60px',
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

export default ReceivedDetails;