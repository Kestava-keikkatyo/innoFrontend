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
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import FormikField from '../../components/FormField';
import { IRootState } from '../../utils/store';
const initialValues: MyFeeling = {
    feeling: null,
    comment: '',
};

const SendFeelingSchema = Yup.object().shape({
    feeling: Yup.number().min(1, 'Min value 1.').max(5, 'Max value 5.').required('This field is required!'),
    comment: Yup.string().min(3, 'Comment should be three letters at least!'),
});

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
                                    <div>
                                        <div>
                                            <Typography color="success" className={classes.title} variant="h6">{t('feeling_report_question')}</Typography>
                                        </div>
                                        <FormControl style={{ marginBottom: '20px' }}>
                                            <RadioGroup
                                                row
                                                name="feeling"
                                            >
                                                <Field required value={1} icon={<SentimentVeryDissatisfiedIcon className={classes.icons} />} checkedIcon={<SentimentVeryDissatisfiedIcon className={classes.icons} />} as={Radio} />
                                                <Field value={2} icon={<SentimentSatisfiedIcon className={classes.icons} />} checkedIcon={<SentimentSatisfiedIcon className={classes.icons} />} as={Radio} />
                                                <Field value={3} icon={<SentimentSatisfiedAltIcon className={classes.icons} />} checkedIcon={<SentimentSatisfiedAltIcon className={classes.icons} />} as={Radio} />
                                                <Field value={4} icon={<SentimentVerySatisfiedIcon className={classes.icons} />} checkedIcon={<SentimentVerySatisfiedIcon className={classes.icons} />} as={Radio} />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                    <div>
                                        <div>
                                            <Typography color="success" className={classes.title} variant="h6">{t('my_feeling_would_you_like_to_leave_a_comment')}</Typography>
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
        width: '100%'

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
        marginTop: '20px',
        webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)'
    },
    icons: {
        marginRight: '15px',
        transform: 'scale(2.5)',
    }
}));

export default SendFeeling;


