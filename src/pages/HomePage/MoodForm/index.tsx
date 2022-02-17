import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';
import clsx from 'clsx';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
import StepConnector from '@mui/material/StepConnector';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import CreateIcon from '@mui/icons-material/Create';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import { Container } from '@mui/material';
// import MoodStepOne from './MoodStepOne';
// import MoodStepThree from './MoodStepThree';
// import { setFiles } from '../../../actions/fileActions';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

// import { IRootState } from '../../../utils/store';
// import { roles } from '../../../types/types';
import MoodStep from './MoodStep';
import MoodStepEnd from './MoodStepEnd';



const ColorlibConnector = withStyles({


  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 136deg, rgb(233,64,87) 0%, rgb(242,113,33) 50%, rgb(255,150,55) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 136deg, rgb(255,150,55) 0%, rgb(242,113,33) 50%, rgb(233,64,87) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(255,150,55) 0%, rgb(242,113,33) 50%, rgb(233,64,87) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(255,150,55) 0%, rgb(242,113,33) 50%, rgb(233,64,87) 100%)',
  },
});

const ColorlibStepIcon = (props: any) => {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: any = {
    1: <EmojiEmotionsIcon />,
    2: <CreateIcon />,
    3: <SendIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
};

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  primary: {
    background: '#eb5a00',
    color: 'white',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    textAlign: 'center',
  },
}));

const MoodForm: React.FC<any> = ({ handleSubmit }) => {
  const { t } = useTranslation()
  //const { data } = useSelector((state: IRootState) => state.user);

  const classes = useStyles();
  const getSteps = () => {
    return [t('your_mood'), t('fill_details'), t('submit')];
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  // const dispatch = useDispatch();

  

  const getStepContent = (step: any) => {
    switch (step) {
      case 0:
        return <MoodStep />;
      case 2:
        return <MoodStepEnd />;
      default:
        return <></>;
    }
  };


  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 2);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 2);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  //   dispatch(setFiles([null, null, null]));
  // };

  const handleFinnish = () => {
    handleSubmit();
   // setActiveStep(steps.length);
    setActiveStep((prevActiveStep) => prevActiveStep + 2);
    
  };

  const location = useLocation();
  console.log('location', location.pathname);

  return (
    <div
      className={
        location.pathname === '/home'
          ? `mood-form-container ${classes.root}`
          : undefined
      }
    >
    {/*  <Typography variant="h4" align="center">
        {t('how_do_you_feel_today')}
      </Typography>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
        </Stepper> */}
      <div>
        {activeStep === steps.length ? (
          <div>
            <br/>

        {/*    <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              {t('reset')}
            </Button> */}
          </div>
        ) : (
          <Container maxWidth="md">
            <div className={classes.instructions}>
              {getStepContent(activeStep)}
            </div>
            <div style={{ marginTop: 24, textAlign: 'center' }}>
              {/*  <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                {t('back')}
              </Button>
            */}
              {activeStep === steps.length - 1 ? (
              <p> </p>

              
              ) : (
                <Button
                  variant="contained"
                  onClick={handleFinnish}
                  className={`${classes.button} ${classes.primary}`}
                >
                  {t('saveButton')}
                </Button>
              )}
            </div>
          </Container>
        )}
      </div>
    </div>
  );
};

export default MoodForm;


/*
                <Button
                  variant="contained"
                  onClick={handleFinnish}
                  className={`${classes.button} ${classes.primary}`}
                >
              {t('finish')}
              </Button> 



*/