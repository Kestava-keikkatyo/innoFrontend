import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReportStepTwo from './ReportStepTwo';
import ReportStepThree from './ReportStepThree';
import ReportStepOne from './ReportStepOne';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { initialReport } from '../../reducers/reportReducer';
import { setReport, submitReport } from '../../actions/reportActions';
import fileService from '../../services/fileService';
import { useTranslation } from 'react-i18next'



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



const getStepContent = (step: any) => {
  switch (step) {
    case 0:
      return <ReportStepOne />;
    case 1:
      return <ReportStepTwo />;
    case 2:
      return <ReportStepThree />;
    default:
      return 'Unknown step';
  }
};

const ReportForm = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  const { t } = useTranslation()
  const getSteps = () => {
    return [t('report_handler'), t('report_time'), t('report_details')];
  };

  const steps = getSteps();

  let { currentReport } = useSelector((state: any) => state.report);
  const { currentFiles } = useSelector((state: any) => state.files);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    dispatch(setReport(initialReport));
    setActiveStep(0);
  };

  const handleFinnish = async () => {
    setActiveStep(steps.length);

    if (currentReport.date === '') {
      dispatch(
        setReport({ ...currentReport, date: new Date().toLocaleString() })
      );
    }

    if (currentFiles.files[0] !== null) {
      const res: any = await fileService.postFile(currentFiles.files[0]);

      const copyOfCurrentReport = {
        ...currentReport,
        fileUrl: res.data.fileUrl,
        fileType: res.data.fileType,
      };

      dispatch(setReport(copyOfCurrentReport));
      dispatch(submitReport(copyOfCurrentReport));
    } else {
      dispatch(setReport(currentReport));
      dispatch(submitReport(currentReport));
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
          <div>
            <Typography className={classes.instructions}>
              {t('steps_completed')}
            </Typography>
            <Button
              onClick={handleReset}
              variant="outlined"
              className={classes.button}
            >
              {t('resetoi')}
            </Button>
          </div>
        ) : (
          <Container maxWidth="md">
            <div className={classes.instructions}>
              {getStepContent(activeStep)}
            </div>
            <div style={{ marginTop: 40, marginBottom: 10 }}>
              <Button
                variant="outlined"
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                {t('back')}
              </Button>

              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  onClick={handleFinnish}
                  className={`${classes.button} ${classes.primary}`}
                >
                  {t('finish')}
                </Button>
              ) : (
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
