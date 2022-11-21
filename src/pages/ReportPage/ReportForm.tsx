import React, { useState } from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';
import clsx from 'clsx';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector from '@mui/material/StepConnector';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReportStepTwo from './ReportStepTwo';
import ReportStepThree from './ReportStepThree';
import ReportStepOne from './ReportStepOne';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { initialReport } from '../../reducers/reportReducer';
import { setReport, submitReport } from '../../actions/reportActions';
import fileService from '../../services/fileService';
import { useTranslation } from 'react-i18next'
import { setFiles } from '../../actions/fileActions';
import { setAlert } from '../../actions/alertActions'
import { severity } from '../../types/types'
import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';

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
    1: 1,
    2: 2,
    3: 3,
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
  },
  button: {
    marginRight: theme.spacing(1),
  },
  primary: {
    background: '#EB5A00',
    color: 'white',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));




const ReportForm = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  /*ReportStepThree is a child component in ReportForm but finish-button is located 
    in this ReportForm-component so we keep step three error -state here
    to use with finish-button. 
    (Step three error means that either report title or details was missing 
    when user tried to submit the report. Then we show error and helper text.)
  */
  const [stepThreeError, setStepThreeError] = useState(false) 

  /*ReportStepTwo is a child component in ReportForm but next-button is located 
    in this ReportForm-component so we keep step two error -state here
    to use with next-button. ReportStepTwo-component handles setting the error state.
    (Step two error means that either date or time -field is invalid.)
  */
  const [stepTwoError, setStepTwoError] = useState(false) 

  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const { t } = useTranslation()
  const getSteps = () => {
    return [t('report_handler'), t('report_time'), t('report_details')];
  };

  const steps = getSteps();

  const { currentReport } = useSelector((state: any) => state.report);
  const { currentFiles } = useSelector((state: any) => state.files);

  const getStepContent = (step: any) => {
    switch (step) {
      case 0:
        return <ReportStepOne />;
      case 1:
        return <ReportStepTwo setStepTwoError={setStepTwoError}/>;
      case 2:
        return <ReportStepThree stepThreeError={stepThreeError} />;
      default:
        return 'Unknown step';
    }
  };

  const handleNext = () => {
    /*If there is no recipients selected for the report, we show an alert 
    and won't move to the next step. 
    */
    if (activeStep === 0 && !currentReport.agency && !currentReport.business) {
      dispatch(setAlert(t('report_no_recipient'), severity.Warning))
    } else if (activeStep === 1 && stepTwoError === true){
      /**If ReportStepTwo-component is in error state (invalid date or time),
       * prevent moving to next step and show warning message.
       */
      dispatch(setAlert(t('report_invalid_date_alert'), severity.Warning))
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    //If moving back from step three, clear possible error in step three.
    if (activeStep=== 2) {
      setStepThreeError(false)
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    //Reset here essentially means that we clear the report and move to make a new one.
    dispatch(setReport(initialReport));
    dispatch(setFiles([null, null, null]))
    setActiveStep(0);
    setStepThreeError(false)
  };

  const handleFinnish = async () => {
    if (currentReport.title === "" || currentReport.details === "") {
      //If title or details is missing, set step three to error state and exit handleFinnish.
      setStepThreeError(true)
      return
    } else {
      /*
        Show loading-status in send button and disable the button until handlefinnish is complete.
        This could take a while when large images or videos are uploaded.
      */
      setLoading(true) 
      if (currentReport.date === '') {
        //If date when the event happened is missing, set current date.
        dispatch(
          setReport({ ...currentReport, date: new Date().toLocaleString() })
        );
      }

      /* ----TÄMÄ POIS? MIKSI LÄHETTÄÄ TIEDOSTOJA? TIEDOSTONAPPULA POISTETTU KOLMOSVAIHEESTA. T: Nikke 21.11.2022
      
      
      if (currentFiles.files[0] !== null) {
        //If there is any files attached to report, send them to DB now.
        const res: any = await fileService.postFile(currentFiles.files[0]);
        dispatch(setFiles([null, null, null])); //Clear filelist after sending.
        const copyOfCurrentReport = {
          ...currentReport,
          fileUrl: res.data.fileUrl,
          fileType: res.data.fileType,
        };

        dispatch(submitReport(copyOfCurrentReport));
      } else {
        dispatch(submitReport(currentReport));
      }*/
      //Clear report in redux-store, clear step three error and finish-button loading-state and move to last step.
      dispatch(setReport(initialReport));
      setStepThreeError(false)
      setActiveStep(steps.length);
      setLoading(false)
    }   
  };

  return (
    <div className={`report-container ${classes.root}`}>
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
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          //If we are in the last step, show reset/new-report -button.
          <div>
            <Typography className={classes.instructions}>
              {t('steps_completed')}
            </Typography>
            <Button
              onClick={handleReset}
              variant="outlined"
              className={classes.button}
            >
              {t('report_new_report')}
            </Button>
          </div>
        ) : (
          //If the current step is not last, show back button and next or finish -button.
          <Container maxWidth="md">
            <div className={classes.instructions}>
              {getStepContent(activeStep)}
            </div>
            <div style={{ marginTop: 40, marginBottom: 10 }}>
              {/**Back button */}
              <Button
                variant="outlined"
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                {t('back')}
              </Button>

              {activeStep === steps.length - 1 ? (
                /**Finish button. When clicking, handleFinnish sets 
                 * buttons loading status to true, disabling it until
                 * handleFinnish is finished. This coult take a while
                 * if uploading large images or videos.
                 * */
                <LoadingButton
                  loading={loading}
                  loadingPosition='end'
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={handleFinnish}
                  className={`${classes.button} ${classes.primary}`}
                >
                  {t('finish')}
                </LoadingButton>
              ) : (
                /**Next button */
                <Button
                  variant="contained"
                  onClick={handleNext}
                  className={`${classes.button} ${classes.primary}`}
                >
                  {t('next')}
                </Button>
              )}
            </div>
          </Container>
        )}
      </div>
    </div>
  );
};

export default ReportForm;
