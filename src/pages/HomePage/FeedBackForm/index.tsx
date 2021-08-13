import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next'

import {
  Grid,
  CardContent,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Button,
  Accordion,
} from '@material-ui/core';
import {
  CardHeader,
  TextField,
  CircularProgress,
  CardActions,
  Divider,
  makeStyles,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import {
  getUserFeedBacks,
  postFeedBack,
} from '../../../actions/feedBackActions';
import { RESET_FEEDBACK } from '../../../types/state';
import { IRootState } from '../../../utils/store';

import SendIcon from '@material-ui/icons/Send';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReplayIcon from '@material-ui/icons/Replay';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#eb5a00',
    '&:disabled': {
      backgroundColor: '#ebc800',
    },
    color: 'white',
  },
  sendingDiv: {
    textAlign: 'center',
  },
  accordion: {
    display: 'contents',
  },
  feedBackTextWaiting: {
    color: '#ac9100',
  },
  feedBackTextDone: {
    color: 'green',
  },
  dividerWithMargin: {
    marginTop: '5px',
    marginBottom: '5px',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const FeedBackForm = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const { myFeedBacks } = useSelector((state: IRootState) => state.feedback);

  let { feedBackSaved } = useSelector((state: IRootState) => state.feedback);

  const [message, setMessage] = React.useState('');

  const [heading, setHeading] = React.useState('');

  const [loading, setLoading] = React.useState(false);

  const [isSent, setSent] = React.useState(false);

  const [helperText, setHelperText] = React.useState('');

  const [showFeedBacks, setShowFeedBacks] = React.useState(0);

  const [currentPage, setCurrentPage] = React.useState(1);

  const { t } = useTranslation()

  const handleClickLoading = () => {
    if (message.length > 0 && heading.length > 0) {
      setLoading((prevLoading) => !prevLoading);
      dispatch(postFeedBack(message, heading));
    } else {
      setHelperText('Tarkista että kentät on täytetty!');
    }
  };

  const handleClearTextField = () => {
    setMessage('');
    setHeading('');
  };

  const handlePageChange = (event: object, page: number) => {
    console.log(
      'FeedBacks: ',
      showFeedBacks,
      ' Current page: ',
      currentPage,
      '  Page: ',
      page
    );
    if (currentPage > page) {
      setCurrentPage(page);
      setShowFeedBacks(showFeedBacks - 5);
    } else if (currentPage < page) {
      setCurrentPage(page);
      setShowFeedBacks(showFeedBacks + 5);
    } else {
    }
  };

  useEffect(() => {
    if (feedBackSaved) {
      setLoading((prevLoading) => !prevLoading);
      setSent(true);
      dispatch({ type: RESET_FEEDBACK });
    }
    dispatch(getUserFeedBacks());
  }, [dispatch, feedBackSaved]);

  return (
    <>
      <Grid item xs={12} md={6} style={{ marginBottom: '5%' }}>
        <div className="report-container-v2-one" style={{ height: '100%' }}>
          <CardHeader
            title={t("return_form")}
            subheader={t("give_feedback")}
          ></CardHeader>
          <CardContent>
            <form noValidate autoComplete="off" hidden={loading}>
              <div>
                <TextField
                  value={heading}
                  label={t('headline')}
                  onChange={(e) => setHeading(e.target.value)}
                />
                <TextField
                  id="standard-multiline-static"
                  value={message}
                  helperText={helperText}
                  label={
                    isSent ? t('feedback_sent') : t('write_feedback_here:')
                  }
                  onChange={(e) => setMessage(e.target.value)}
                  multiline
                  rows={4}
                />
              </div>
            </form>
            <div hidden={!loading} className={classes.sendingDiv}>
              <Typography>Lähetetään</Typography>
              <CircularProgress />
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              endIcon={<ReplayIcon />}
              onClick={handleClearTextField}
            >
              {t('reset')}
            </Button>
            <Button
              variant="contained"
              disabled={loading}
              className={classes.button}
              onClick={handleClickLoading}
              endIcon={<SendIcon />}
            >
              {t('send')}
            </Button>
          </CardActions>
        </div>
      </Grid>
      <Grid item xs={12} md={6} style={{ marginBottom: '5%' }}>
        <div className="report-container-v2-two" style={{ height: '100%' }}>
          <CardHeader title={t("own_feedback")}></CardHeader>
          <CardContent>
            {myFeedBacks && myFeedBacks.length > 0 ? (
              myFeedBacks
                .slice(showFeedBacks, showFeedBacks + 5)
                .map(
                  (feedback: {
                    _id: string;
                    message: string;
                    heading: string;
                    reply: string;
                  }) => (
                    <Accordion key={feedback._id}>
                      <AccordionSummary
                        style={{ display: 'flex' }}
                        classes={{ content: classes.accordion }}
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <div style={{ width: '50%', flex: 'auto' }}>
                          <Typography style={{ wordWrap: 'break-word' }}>
                            {feedback.heading}
                          </Typography>
                        </div>
                        <div style={{ flex: 'auto' }}>
                          <Typography
                            className={
                              feedback.reply
                                ? classes.feedBackTextDone
                                : classes.feedBackTextWaiting
                            }
                          >
                            {feedback.reply ? t('replied') : t('wait')}
                          </Typography>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails style={{ display: 'block' }}>
                        <Divider className={classes.dividerWithMargin} />
                        <Typography>Viesti:</Typography>
                        <Typography
                          style={{ wordWrap: 'break-word', width: '100%' }}
                        >
                          {feedback.message}
                        </Typography>
                        <Divider className={classes.dividerWithMargin} />
                        {feedback.reply ? (
                          <>
                            <Typography>Vastaus:</Typography>
                            <Typography
                              style={{ wordWrap: 'break-word', width: '100%' }}
                            >
                              {feedback.reply}
                            </Typography>
                          </>
                        ) : (
                          <></>
                        )}
                      </AccordionDetails>
                    </Accordion>
                  )
                )
            ) : (
              <Typography>{t('no_results')}</Typography>
            )}
          </CardContent>
          <CardActions classes={{ root: classes.pagination }}>
            {myFeedBacks && myFeedBacks.length > 0 ? (
              <Pagination
                count={Math.ceil(myFeedBacks.length / 5)}
                onChange={handlePageChange}
              />
            ) : (
              <></>
            )}
          </CardActions>
        </div>
      </Grid>
    </>
  );
};

export default FeedBackForm;
