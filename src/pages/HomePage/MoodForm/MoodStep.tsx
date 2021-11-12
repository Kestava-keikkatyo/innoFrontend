import React, { useState } from 'react';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import { Grid, makeStyles, TextField, Typography  } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../utils/store';
import { updateFeeling } from '../../../actions/feelingActions';
import { useTranslation } from 'react-i18next';
import FileUploader from '../../../components/FileUploader';

const MoodStep: React.FC = () => {

const { data } = useSelector((state: IRootState) => state.user);
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
      <Typography variant="h4" align="center">
        {t('how_do_you_feel_today')}
      </Typography>

      <Grid container className="mood-step-one" justify="center">
        <Grid item className={classes.flexCenter} xs={2}>
          <SentimentVeryDissatisfiedIcon
            onClick={() => updateMood(0)}
            className={`${classes.clickableIcon} ${
              clicked[0] ? 'mood-icon' : null
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
          <SentimentVerySatisfiedIcon
            onClick={() => updateMood(4)}
            className={`${classes.clickableIcon} ${
              clicked[4] ? 'mood-icon' : null
            }`}
          />
        </Grid>
      </Grid>
        <Typography>{t('write_a_comment')}</Typography>
        <TextField
            onChange={handleChange}
            placeholder={t('tell_feelings')}
            multiline
            rows={4}
            variant="outlined"
        />
        <FileUploader name={t('upload_file')} handleFile={() => ''} accept="image/*" />
    </>
  );    
  
}
export default MoodStep;