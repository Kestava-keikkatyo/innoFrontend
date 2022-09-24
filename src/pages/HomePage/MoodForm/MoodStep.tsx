import React, { useState } from 'react';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Grid, TextField, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../utils/store';
import { updateFeeling } from '../../../actions/feelingActions';
import { useTranslation } from 'react-i18next';
import FileUploader from '../../../components/FileUploader';
import Spacing from '../../../components/Spacing'

const MoodStep: React.FC = () => {

// const { data } = useSelector((state: IRootState) => state.user;
const { t } = useTranslation();

const useStyles = makeStyles({
        clickableIcon: {
        color: '#ccc',
        '&:hover': {
            color: '#444',
        },
        width: 50,
        height: 50,
        },
        flexCenter: {
        display: 'flex',
        justifyContent: 'center',
        },
});

  const classes = useStyles();

  const dispatch: any = useDispatch();

  let initialClickedValues = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  };
  const [clicked, setClicked] = useState(initialClickedValues);

  const currentFeeling: any = useSelector<IRootState>(
    (state) => state.feeling.currentFeeling
  );

  const handleChange = (event: any) => {
    dispatch(updateFeeling({ ...currentFeeling, note: event.target.value }));
  };

  const updateMood = (v: any) => {
    setClicked({ ...initialClickedValues, [v]: true });
    dispatch(updateFeeling({ ...currentFeeling, value: v }));
  };

  return (
    <>
      <Typography variant="h1" align="center" className="header">
        {t('how_do_you_feel_today')}
      </Typography>

      <Grid container className="mood-step-one" justifyContent="center" style={{paddingTop: "5%"}}>
        <Grid item className={classes.flexCenter} xs={2}>
          <SentimentVeryDissatisfiedIcon
            onClick={() => updateMood(0)}
            className={`${classes.clickableIcon} ${
              clicked[0] ? 'mood-icon' : null
            }`}
          />
        </Grid>
        <Grid item className={classes.flexCenter} xs={2}>
          <SentimentDissatisfiedIcon
            onClick={() => updateMood(1)}
            className={`${classes.clickableIcon} ${
              clicked[1] ? 'mood-icon' : null
            }`}
          />
        </Grid>
        <Grid item className={classes.flexCenter} xs={2}>
          <SentimentSatisfiedIcon
            onClick={() => updateMood(2)}
            className={`${classes.clickableIcon} ${
              clicked[2] ? 'mood-icon' : null
            }`}
          />
        </Grid>
        <Grid item className={classes.flexCenter} xs={2}>
          <SentimentSatisfiedAltIcon
            onClick={() => updateMood(3)}
            className={`${classes.clickableIcon} ${
              clicked[3] ? 'mood-icon' : null
            }`}
          />
        </Grid>
        <Grid item className={classes.flexCenter} xs={2}>
          <SentimentVerySatisfiedIcon
            onClick={() => updateMood(4)}
            className={`${classes.clickableIcon} ${
              clicked[4] ? 'mood-icon' : null
            }`}
          />
        </Grid>
      </Grid>
        <Typography style={{paddingTop: "5%"}}>{t('write_a_comment')}</Typography>
        <TextField style={{width: "70%"}}
            onChange={handleChange}
            placeholder={t('tell_feelings')}
            multiline
            rows={5}
            variant="outlined"
            label={t('tell_feelings')}
        />
        <Spacing m2/>
        <FileUploader name={t('upload_file')} handleFile={() => ''} accept="image/*" />
    </>
  );    
  
}
export default MoodStep;