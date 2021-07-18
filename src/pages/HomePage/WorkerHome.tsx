import React from 'react';

import vastuualueet from '../../assets/tietopankki/vastuualueet.json';
import {
  List,
  CardContent,
  ListItem,
  ListItemText,
  Divider,
  CardHeader,
  Button,
  Grid,
  CardActions,
  TextField,
  CircularProgress,
  makeStyles,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import MoodForm from './MoodForm';
import Spacing from '../../components/Spacing';
import SendIcon from '@material-ui/icons/Send';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { submitFeeling, updateFeeling } from '../../actions/feelingActions';
import { useDispatch, useSelector } from 'react-redux';
import ReplayIcon from '@material-ui/icons/Replay';
import { IRootState } from '../../utils/store';
import { getUserFeedBacks, postFeedBack } from '../../actions/feedBackActions';
import { useEffect } from 'react';
import fileService from '../../services/fileService';
import { RESET_FEEDBACK } from '../../types/state';

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
    display: 'block',
  },
}));

const WorkerHome = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const currentFeeling: any = useSelector<IRootState>(
    (state) => state.feeling.currentFeeling
  );

  let currentFiles: any = useSelector<IRootState>(
    (state) => state.files.currentFiles
  );

  const onHandleSubmit = async () => {
    console.log('### 1 currentFeeling:', currentFeeling);
    console.log('### currentFiles:', currentFiles);
    if (currentFiles !== null) {
      const res: any = await fileService.postFile(currentFiles);
      console.log('onHandleSubmit res', res);

      const copyOfCurrentFeeling = {
        ...currentFeeling,
        fileUrl: res.data?.fileUrls[0],
      };

      dispatch(updateFeeling(copyOfCurrentFeeling));
      dispatch(submitFeeling(copyOfCurrentFeeling));
    } else {
      dispatch(updateFeeling(currentFeeling));
      dispatch(submitFeeling(currentFeeling));
    }
  };
  let { feedBackSaved } = useSelector((state: IRootState) => state.feedback);

  const { myFeedBacks } = useSelector((state: IRootState) => state.feedback);

  const [loading, setLoading] = React.useState(false);

  const [isSent, setSent] = React.useState(false);

  const [message, setMessage] = React.useState('');

  const [heading, setHeading] = React.useState('');

  const [helperText, setHelperText] = React.useState('');

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

  useEffect(() => {
    if (feedBackSaved) {
      setLoading((prevLoading) => !prevLoading);
      setSent(true);
      dispatch({ type: RESET_FEEDBACK });
    }
    dispatch(getUserFeedBacks());
  }, [dispatch, feedBackSaved]);

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Spacing mr5>
          <MoodForm handleSubmit={onHandleSubmit} />
        </Spacing>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="report-container">
          <CardHeader
            action={
              <Button variant="outlined" color="primary">
                Lue lisää
              </Button>
            }
            title="Vastuualue"
            subheader="Vuokrayritys"
          />
          <CardContent>
            <List component="nav" aria-label="mailbox folders">
              <Divider />
              {vastuualueet.worker.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${i + 1}. ${e.tip}`} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="report-container">
          <CardHeader
            title="Anna palautetta"
            subheader="Palaute lomake"
          ></CardHeader>
          <CardContent>
            <form noValidate autoComplete="off" hidden={loading}>
              <div>
                <TextField
                  value={heading}
                  label={'Otsikko'}
                  onChange={(e) => setHeading(e.target.value)}
                />
                <TextField
                  id="standard-multiline-static"
                  value={message}
                  helperText={helperText}
                  label={
                    isSent ? 'Palaute lähetetty' : 'Kirjoita palaute tähän:'
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
              Tyhjennä
            </Button>
            <Button
              variant="contained"
              disabled={loading}
              className={classes.button}
              onClick={handleClickLoading}
              endIcon={<SendIcon />}
            >
              Lähetä
            </Button>
          </CardActions>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="report-container">
          <CardHeader title="Omat palautteet"></CardHeader>
          <CardContent>
            {myFeedBacks ? (
              myFeedBacks.map(
                (feedback: {
                  message: string;
                  heading: string;
                  reply: string;
                }) => (
                  <Accordion>
                    <AccordionSummary
                      style={{ display: 'flow-root' }}
                      classes={{ content: classes.accordion }}
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <Typography style={{ wordWrap: 'break-word' }}>
                        Otsikko: {feedback.heading}
                      </Typography>
                      <Divider />
                      <Typography>
                        {myFeedBacks.reply
                          ? 'Vastaus: ' + myFeedBacks.reply
                          : 'Odottaa käsittelyä'}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ display: 'flow-root' }}>
                      <Divider />
                      <Typography>Viesti:</Typography>
                      <Typography style={{ wordWrap: 'break-word' }}>
                        {feedback.message}
                      </Typography>
                      <Divider />
                      {myFeedBacks.reply ? (
                        <Typography>myFeedBacks.reply</Typography>
                      ) : (
                        <></>
                      )}
                    </AccordionDetails>
                  </Accordion>
                )
              )
            ) : (
              <></>
            )}
          </CardContent>
          <CardActions></CardActions>
        </div>
      </Grid>
    </Grid>
  );
};

export default WorkerHome;
