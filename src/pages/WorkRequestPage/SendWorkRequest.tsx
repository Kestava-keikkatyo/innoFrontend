import React, { useEffect } from 'react';
import { Button, CircularProgress, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import FormikField, { DatePickerField } from '../../components/FormField';
import { WorkRequest } from '../../types/types';
import { IRootState } from '../../utils/store';
import { useTranslation } from 'react-i18next'
import { sendWorkRequest } from '../../actions/workRequestActions';
import { useParams } from 'react-router-dom';
import { fetchUserById } from '../../actions/usersActions';
import PageLoading from '../../components/PageLoading';

type AgencyUrlParams = {
  agencyId: string
}

const initialValues: WorkRequest = {
  recipient:'',
  headline: '',
  workersNumber: null,
  requirements: '',
  desirableSkills: '',
  details: '',
  startDate: null,
  endDate: null,
};

const CreateWorkRequestSchema = Yup.object().shape({
    headline: Yup.string().min(2, 'Headline should be two letters at least!').required('Headline is required!'),
    workersNumber: Yup.number().typeError('You must specify a number').min(1, 'Min value 1.'),
    requirements: Yup.string().min(3, 'Requirements should be three letters at least!'),
    desirableSkills: Yup.string().min(3, 'DesirableSkills should be three letters at least!'),
    details: Yup.string().min(3, 'Details should be three letters at least!'),
    startDate: Yup.date().nullable(),
    endDate: Yup.date().nullable(),
});

const SendWorkRequest: React.FC = () => {
  const { t } = useTranslation()
  const classes = useStyles();
  const dispatch = useDispatch();

  const { agencyId } = useParams<AgencyUrlParams>();
    const agencyData = useSelector((state: IRootState) => state.users.currentUser);

    useEffect(() => {
        dispatch(fetchUserById(agencyId));
    }, [dispatch, agencyId]);

    const isLoading = useSelector((state: IRootState) => state.workRequest.loading)

    if(isLoading || !agencyData || agencyId !== agencyData._id) return (
        <PageLoading />
    );

  const handleSubmit = (workRequest: WorkRequest) => {
    workRequest.recipient = agencyId;
    dispatch(sendWorkRequest(workRequest));
  };
  return (
    <div className={classes.newWorkrequest}>
      <div className={classes.workRequestTitleContainer}>
              <Typography color="primary" className={classes.title} variant="h5">{t('send_work_request')}</Typography>
      </div>
      <div className={classes.workRequestContainer}>
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={CreateWorkRequestSchema}
        >
          {(props) => {
            return (
            <Form>
              <div className={classes.workRequestContainerTop}>
                <span>To: </span><span>{agencyData.name}</span>
                <FormikField name="headline" label={t('work_request_headline')} required />
                <FormikField name="workersNumber" label={t('work_request_workers_nuber')} type="number" required />
                <FormikField name="requirements" label={t('work_request_requirements')} required multiline />
                <FormikField name="desirableSkills" label={t('work_request_desirableSkills')} multiline />
                <FormikField name="details" label={t('work_request_details')} required multiline />
                <DatePickerField name="startDate" label={t('work_request_startDate')} {...props} />
                <DatePickerField name="endDate" label={t('work_request_endDate')} {...props} />
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
  newWorkrequest: {
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
  workRequestTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  workRequestContainer: {
    flex: '1',
    padding: '20px',
    width: '600px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)'
    },
    workRequestContainerTop: {
    marginBottom: '70px',
    }
}));

export default SendWorkRequest;


