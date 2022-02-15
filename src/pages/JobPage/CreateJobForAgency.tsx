import React from 'react';
import { Button, CircularProgress, makeStyles, Typography } from "@material-ui/core";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import FormikField, { DatePickerField } from '../../components/FormField';
import { createJob } from '../../actions/jobActions';
import { Job } from '../../types/types';
import { IRootState } from '../../utils/store';
import { useTranslation } from "react-i18next"

const initialValues: Job = {
  category: "",
  title: "",
  jobType: "",
  salary: "",
  street: "",
  zipCode: "",
  city: "",
  startDate: null,
  endDate: null,
  applicationLastDate: null,
  requirements: "",
  desirableSkills: "",
  benefits: "",
  details: "",
};

const CreateJobSchema = Yup.object().shape({
  title: Yup.string()
  .min(2, "Title should be three letters at least!")
  .required("Title is required!"),
  category: Yup.string()
  .min(2, "Category should be three letters at least!")
  .required("Category is required!"),
  jobType: Yup.string().required('JobType is required'),
  salary: Yup.number().typeError('You must specify a number').min(0, 'Min value 0.'),
  street: Yup.string(),
  zipCode: Yup.string(),
  city: Yup.string(),
  startDate: Yup.date().nullable(),
  endDate: Yup.date().nullable(),
  applicationLastDate: Yup.date().nullable(),
  requirements: Yup.string().min(2, "Requirements should be three letters at least!"),
  desirableSkills: Yup.string(),
  benefits: Yup.string(),
  details: Yup.string(),
});

const CreateJobForAgency: React.FC<any> = () => {
  const { t } = useTranslation()
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoading = useSelector((state: IRootState) => state.job.loading)

  const handleSubmit = (job: Job) => {
    dispatch(createJob(job));
  };
  return (
    <div className={classes.newJob}>
      <div className={classes.jobTitleContainer}>
              <Typography color="primary" className={classes.title} variant="h5">{t('add_new_job')}</Typography>
      </div>
      <div className={classes.jobContainer}>
        <Formik
        initialValues={initialValues}
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
              {isLoading ? <CircularProgress color="primary" /> : <Button type="submit" variant="contained" color="primary" className={classes.button}>{t('create')}</Button>}
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
    padding: '20px',
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
    width: '600px',
    webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)'
    },
    jobContainerTop: {
    marginBottom: '70px',
    }
}));

export default CreateJobForAgency;


