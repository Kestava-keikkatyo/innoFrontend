import React, { useEffect } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import FormikField, { DatePickerField } from '../../components/FormField';
import { setAlert } from '../../actions/alertActions';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { Job } from '../../types/types';
import { useParams, Link } from 'react-router-dom';
import { IRootState } from '../../utils/store';
import PageLoading from '../../components/PageLoading';
import { fetchMyJobById, updateJob } from '../../actions/jobActions';

const CreateJobSchema = Yup.object().shape({
  title: Yup.string()
  .min(2, 'Title should be three letters at least!')
  .required('Title is required!'),
  category: Yup.string()
  .min(2, 'Category should be three letters at least!')
  .required('Category is required!'),
  jobType: Yup.string().required('JobType is required'),
  salary: Yup.number().typeError('You must specify a number').min(0, 'Min value 0.'),
  street: Yup.string(),
  zipCode: Yup.string(),
  city: Yup.string(),
  startDate: Yup.date().nullable(),
  endDate: Yup.date().nullable(),
  applicationLastDate: Yup.date().nullable(),
  requirements: Yup.string().min(2, 'Requirements should be three letters at least!'),
  desirableSkills: Yup.string(),
  benefits: Yup.string(),
  details: Yup.string(),
});

type JobUrlParams = {
    jobId: string
  }

const JobUpdate: React.FC = () => {

    const { t } = useTranslation()
    const classes = useStyles();
    const dispatch = useDispatch();

    const { jobId } = useParams<JobUrlParams>();
    
    const jobData: Job | undefined = useSelector((state: IRootState) => state.job.currentJob);
    useEffect(() => {
      dispatch(fetchMyJobById(jobId));
    }, [dispatch, jobId]);
  
    if (!jobData || jobId !== jobData._id) return (
      <PageLoading />
    );
    
    const handleSubmit = (job: Job) => {
        dispatch(updateJob(jobId, job));

        dispatch(setAlert(i18next.t('job_updated_successfully')));
    };
    
    return (
      <div className={classes.newJob}>
        <div className={classes.jobTitleContainer}>
          <Typography color="primary" className={classes.title} variant="h5">{t('job_update_job')}</Typography>
        </div>
        <div className={classes.jobContainer}>
          <Formik
          initialValues={jobData}
          onSubmit={handleSubmit}
          validationSchema={CreateJobSchema}
          >
            {(props) => {
              return (
              <Form>
                <div className={classes.jobContainerTop}>
                  <FormikField name="title" label={t('job_title')} required />
                  <FormikField name="category" label={t('job_category')} required />
                  <FormikField name="jobType" label={t('job_type')} required />
                  <FormikField name="salary" label={t('job_salary')} required />
                  <FormikField name="street" label={t('job_street')} />
                  <FormikField name="zipCode" label={t('job_zipCode')} />
                  <FormikField name="city" label={t('job_city')} />
                  <DatePickerField name="applicationLastDate" label={t('job_applicationLastDate')} {...props} />
                  <DatePickerField name="startDate" label={t('job_startDate')} {...props} />
                  <DatePickerField name="endDate" label={t('job_endDate')} {...props} />
                </div>
                <div>
                  <FormikField name="requirements" label={t('job_requirements')} required multiline />
                  <FormikField name="desirableSkills" label={t('job_desirableSkills')} multiline />
                  <FormikField name="benefits" label={t('job_benefits')} multiline />
                  <FormikField name="details" label={t('job_details')} multiline />
                </div>
                <Stack direction="row" spacing={2}>
                  <Button type="submit" variant="contained" color="primary" className={classes.button}>{t('button_update')}</Button>
                  <Button variant="outlined" color="primary" component={Link} to="/job?tab=my">{t('button_cancel')}</Button>
                </Stack>
              </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    );
}

const useStyles = makeStyles((theme) => ({
  newJob: {
    flex: '4',
  },
  button: {
    left: theme.spacing(0),
  },
  title: {
    marginTop: '5px',
    marginBottom: '15px',
  },
  jobTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  jobContainer: {
    flex: '1',
    padding: '20px',
    width: '100%',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)'
    },
    jobContainerTop: {
    marginBottom: '70px',
    }
}));

export default JobUpdate;


