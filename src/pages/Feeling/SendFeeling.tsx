import React from 'react';
import { Button, CircularProgress, FormControl, Radio, RadioGroup, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../actions/alertActions';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { sendMyFeeling } from '../../actions/myFeelingActions';
import { MyFeeling } from '../../types/types';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import FormikField from '../../components/FormField';
import { IRootState } from '../../utils/store';
const initialValues: MyFeeling = {
    comfortable: null,
    satisfied: null,
    energetic: null,
    enthusiastic: null,
    frustrated: null,
    stressed: null,
    anxious: null,
    comment: '',
};

const SendFeelingSchema = Yup.object().shape({
    comfortable: Yup.number().min(0, 'Min value 0.').max(4, 'Max value 4.').required('Comfortable is required!'),
    satisfied: Yup.number().min(0, 'Min value 0.').max(4, 'Max value 4.').required('Satisfied is required!'),
    energetic: Yup.number().min(0, 'Min value 0.').max(4, 'Max value 4.').required('Energetic is required!'),
    enthusiastic: Yup.number().min(0, 'Min value 0.').max(4, 'Max value 4.').required('Enthusiastic is required!'),
    frustrated: Yup.number().min(0, 'Min value 0.').max(4, 'Max value 4.').required('Frustrated is required!'),
    stressed: Yup.number().min(0, 'Min value 0.').max(4, 'Max value 4.').required('Stressed is required!'),
    anxious: Yup.number().min(0, 'Min value 0.').max(4, 'Max value 4.').required('Anxious is required!'),
    comment: Yup.string().min(3, 'Comment should be three letters at least!'),
});

const questions = {
    comfortable: 'Do you feel comfortable?',
    satisfied: 'Do you feel satisfied?',
    energetic: 'Do you feel energetic?',
    enthusiastic: 'Do you feel enthusiastic?',
    frustrated: 'Do you feel frustrated?',
    stressed: 'Do you feel stressed?',
    anxious: 'Do you feel anxious?',
}

const SendFeeling: React.FC = () => {

    const { t } = useTranslation()
    const classes = useStyles();
    const dispatch = useDispatch();

    const isLoading = useSelector((state: IRootState) => state.myFeeling.loading)
    
    const handleSubmit = (myFeeling: MyFeeling) => {
        console.log('submitted', myFeeling);
        dispatch(sendMyFeeling(myFeeling));
        dispatch(setAlert(i18next.t('feeling_sent_successfully')));
      };
      return (
      <div className={classes.feeling}>
          <div className={classes.feelingTitleContainer}>
              <Typography color="primary" className={classes.title} variant="h5">{t('my_feeling_send')}</Typography>
          </div>
          <div className={classes.userMood}>
              <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              
              validationSchema={SendFeelingSchema}
              >
                  {(errors) => {
                    console.log(errors);
                      return (
                      <Form>
                        <div>
                            {Object.entries(questions).map(questionEntry => (
                                <div key={questionEntry[0]}>
                                    <div>
                                        <Typography color="success" id={questionEntry[0] + '-radio-buttons-group-label'} className={classes.title} variant="h6">{questionEntry[1]}</Typography>
                                    </div>
                                    <FormControl>
                                        <RadioGroup
                                            row
                                            aria-labelledby={questionEntry[0] + '-radio-buttons-group-label'}
                                        >
                                            <Field required name={questionEntry[0]} value={0} icon={<SentimentVeryDissatisfiedIcon />} checkedIcon={<SentimentVeryDissatisfiedIcon />} as={Radio} />
                                            <Field name={questionEntry[0]} value={1} icon={<SentimentDissatisfiedIcon />} checkedIcon={<SentimentDissatisfiedIcon />} as={Radio} />
                                            <Field name={questionEntry[0]} value={2} icon={<SentimentSatisfiedIcon />} checkedIcon={<SentimentSatisfiedIcon />} as={Radio} />
                                            <Field name={questionEntry[0]} value={3} icon={<SentimentSatisfiedAltIcon />} checkedIcon={<SentimentSatisfiedAltIcon />} as={Radio} />
                                            <Field name={questionEntry[0]} value={4} icon={<SentimentVerySatisfiedIcon />} checkedIcon={<SentimentVerySatisfiedIcon />} as={Radio} />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            ))}
                            <div>   
                                <div>
                                    <Typography color="success" className={classes.title} variant="h6">Would you like to leave a comment?</Typography>
                                </div>
                                <FormikField name="comment" label={t('my_feeling_comment')} multiline />
                            </div>
                        </div>
                        {isLoading ? <CircularProgress color="primary" /> : <Button type="submit" variant="contained" color="primary" className={classes.button}>{t('submit')}</Button>}
                        </Form>
                    );
                }}
                </Formik>
          </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    feeling: {
        flex: '4',
        padding: '20px',
    },
    button: {
        left: theme.spacing(0),
    },
    title: {
        marginTop: '5px',
        marginBottom: '15px',
    },
    feelingTitleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    userMood: {
        flex: '1',
        padding: '20px',
        width: '400px',
        webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)'
    }
}));

export default SendFeeling;


