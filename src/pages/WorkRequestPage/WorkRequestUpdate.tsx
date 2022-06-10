import React, { useEffect } from 'react';
import { Button, Stack, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import FormikField, { DatePickerField } from '../../components/FormField';
import { setAlert } from '../../actions/alertActions';
import { useTranslation } from "react-i18next"
import i18next from "i18next"
import { WorkRequest } from '../../types/types';
import { useParams } from 'react-router-dom';
import { IRootState } from '../../utils/store';
import PageLoading from '../../components/PageLoading';
import { Link } from 'react-router-dom';
import { fetchWorkRequestById, updateWorkRequest } from '../../actions/workRequestActions';

const UpdateWorkRequestSchema = Yup.object().shape({
    headline: Yup.string().min(2, "Headline should be two letters at least!").required("Headline is required!"),
    workersNumber: Yup.number().typeError('You must specify a number').min(1, 'Min value 1.'),
    requirements: Yup.string().min(3, "Requirements should be three letters at least!"),
    desirableSkills: Yup.string().min(3, "DesirableSkills should be three letters at least!"),
    details: Yup.string().min(3, "Details should be three letters at least!"),
    startDate: Yup.date().nullable(),
    endDate: Yup.date().nullable(),
});

type WorkRequestUrlParams = {
    workRequestId: string
  }

const WorkRequestUpdate: React.FC = () => {

    const { t } = useTranslation()
    const classes = useStyles();
    const dispatch = useDispatch();

    const { workRequestId } = useParams<WorkRequestUrlParams>();
    
    const workRequestData: any = useSelector((state: IRootState) => state.workRequest.currentWorkRequest);
    useEffect(() => {
      dispatch(fetchWorkRequestById(workRequestId));
    }, [dispatch, workRequestId]);
  
    if (!workRequestData || workRequestId !== workRequestData._id) return (
      <PageLoading />
    );
    
    const handleSubmit = (workRequest: WorkRequest) => {
        dispatch(updateWorkRequest(workRequestId, workRequest));

        dispatch(setAlert(i18next.t("work_request_updated_successfully")));
    };
    
    return (
      <div className={classes.newWorkRequest}>
        <div className={classes.workRequestTitleContainer}>
          <Typography color="primary" className={classes.title} variant="h5">{t('update_work_request')}</Typography>
        </div>
        <div className={classes.workRequestContainer}>
          <Formik
          initialValues={workRequestData}
          onSubmit={handleSubmit}
          validationSchema={UpdateWorkRequestSchema}
          >
            {(props) => {
              return (
              <Form>
                <div className={classes.workRequestContainerTop}>
                <FormikField name="headline" label={t('work_request_headline')} required />
                <FormikField name="workersNumber" label={t('work_request_workers_nuber')} type="number" required />
                <FormikField name="requirements" label={t('work_request_requirements')} required multiline />
                <FormikField name="desirableSkills" label={t('work_request_desirableSkills')} multiline />
                <FormikField name="details" label={t('work_request_details')} required multiline />
                <DatePickerField name="startDate" label={t('work_request_startDate')} {...props} />
                <DatePickerField name="endDate" label={t('work_request_endDate')} {...props} />
              </div>
                <Stack direction="row" spacing={2}>
                  <Button type="submit" variant="contained" color="primary" className={classes.button}>{t('button_update')}</Button>
                  <Button variant="outlined" color="primary" component={Link} to="/workRequests">{t('button_cancel')}</Button>
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
    newWorkRequest: {
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

export default WorkRequestUpdate;


