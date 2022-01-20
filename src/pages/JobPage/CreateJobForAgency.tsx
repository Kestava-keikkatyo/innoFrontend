import React from 'react';
import { Button, CircularProgress, makeStyles, Typography } from "@material-ui/core";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import FormikField, { DatePickerField } from '../../components/FormField';
import { setAlert } from '../../actions/alertActions';
import { createJob } from '../../actions/jobActions';
import { Job } from '../../types/types';
import { IRootState } from '../../utils/store';

const initialValues: Job = {
  category: "",
  title: "",
  jobType: "",
  salary: "",
  location: {
    street: "",
    zipCode: "",
    city: ""
  },
  duration: {
    startDate: null,
    endDate: null,
    lastApplicationDate: null
  },
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
  location: Yup.object({
    street: Yup.string(),
    zipCode: Yup.string(),
    city: Yup.string()
  }),
  duration: Yup.object().shape({
    startDate: Yup.date().nullable(),
    endDate: Yup.date().nullable(),
    lastApplicationDate: Yup.date().nullable()
  }),
  requirements: Yup.string().min(2, "Requirements should be three letters at least!"),
  desirableSkills: Yup.string(),
  benefits: Yup.string(),
  details: Yup.string(),
});

const CreateJobForAgency: React.FC<any> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoading = useSelector((state: IRootState) => state.job.loading)

  const handleSubmit = (job: Job) => {
    dispatch(createJob(job));
  };
  return (
    <div className={classes.newJob}>
      <div className={classes.jobTitleContainer}>
              <Typography className={classes.title} variant="h4">Add new job</Typography>
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
                <FormikField name="title" label="Title" required />
                <FormikField name="category" label="Category" required />
                <FormikField name="jobType" label="Job Type" required />
                <FormikField name="salary" label="Salary" required />
                <FormikField name="location.street" label="street" />
                <FormikField name="location.zipCode" label="zipCode" />
                <FormikField name="location.city" label="city" />

                <DatePickerField name="duration.startDate" label="Start date" {...props} />
                <DatePickerField name="duration.endDate" label="End date" {...props} />
                <DatePickerField name="duration.lastApplicationDate" label="Last application date" {...props} />
              </div>
              <div>
                <FormikField name="requirements" label="Requirements" required />
                <FormikField name="details" label="details" required />
                <FormikField name="benefits" label="Benefits" />
                <FormikField name="desirableSkills" label=" DesirableSkills" />
              </div>
              {isLoading ? <CircularProgress color="primary" /> : <Button type="submit" variant="contained" color="primary" className={classes.button}>Create</Button>}
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
    color: '#996699',
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


