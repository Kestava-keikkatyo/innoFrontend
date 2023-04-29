import {
    Typography,
    FormControl,
    MenuItem,
    Select,
    Grid,
    Button,
    Autocomplete,
    TextField
  } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from '../../components/SearchBox';
import { useTranslation } from 'react-i18next';
  
import makeStyles from '@mui/styles/makeStyles';
  
  import {
    EmploymentAgreement,
    severity,
    User,
  } from '../../types/types'
import { fetchAgencyContacts } from '../../actions/usersActions';
import { setAlert } from '../../actions/alertActions';
import { E_SET_CURRENT } from '../../types/state';
import { submitEmploymentAgreement } from '../../actions/businessContractActions';
import { string } from 'prop-types';
import { useParams } from 'react-router-dom';


export interface EmploymentProps {}
  
const EmploymentPage: React.FC<EmploymentProps> = () => {
  const businesses: any[] = [] 
  const workers: any[] = []

  const classes = useStyles();
  const dispatch = useDispatch();
  const currentForm: any = useSelector((state: any) => state.employmentAgreements.currentAgreement);
  const agreements = useSelector((state: any) => state.employmentAgreements.agreements) || [];
  const { data, ...user } = useSelector((state: any) => state.user);
  const userContacts: User[] = useSelector((state: any) => state.user.contacts);
  const { t } = useTranslation();

  userContacts.forEach((user) => {
    if (user.userType == "worker") {
      workers.push(user)
    } else if (user.userType == "business") {
      businesses.push(user)
    }
  })

  let businessOptions = Object.values(businesses).map((business)=>{
    business.label = business.companyName
    return business
  })
  let workerOptions = Object.values(workers).map((worker)=>{
    worker.label = worker.firstName + ' ' + worker.lastName + ' | ' + worker.email
    return worker
  })

 /*
  const [selectedWorker, setSelectedWorker] = useState(currentForm.worker ? currentForm.worker : "")
  const [selectedBusiness, setSelectedBusiness] = useState(currentForm.business ? currentForm.business : "")


  /**Select recipient worker */
  const handleSelectedWorker = (event: any, value: any) => {
    const valueForDB = { ...currentForm, worker: value._id }
    dispatch({ type: E_SET_CURRENT, data: valueForDB})
  };

  /**Select recipient business */
  const handleSelectedBusiness = (event: any, value: any) => {
    const valueForDB = { ...currentForm, business: value._id }
    dispatch({ type: E_SET_CURRENT, data: valueForDB });
  };


  const handleSubmit = (event: any) => {
    if (!currentForm.worker || !currentForm.business) {
        dispatch(setAlert(t('employment_no_recipient'), severity.Warning))
    } else {
      for (let agreement of agreements) {
        if (currentForm.worker === agreement.worker._id && currentForm.business === agreement.business._id) {
          dispatch(setAlert( `Employment proposal already sent`, severity.Warning))
          break
        }
      }
      try {
        dispatch(submitEmploymentAgreement(currentForm))
      } catch (error) {
        dispatch(setAlert( `Error: ` + error, severity.Error))
      }
    }        
  };

  return (
    <Grid container className={classes.container}>

      <Grid item xs={12}>
        <Typography style={{ paddingTop: '1rem', marginBottom: '3%' }} variant="h2" className='header2'> {t('connect_workers_to_business')}</Typography>
      </Grid>

      <Grid item xs={12} style={{ marginTop: 32 }}>
        <Autocomplete
          disablePortal
          id="business-search"
          options={businessOptions}
          onChange={handleSelectedBusiness}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label={t('business')} />}
        />
      </Grid>

      <Grid item xs={12} style={{ marginTop: 32 }}>
      <Autocomplete
          disablePortal
          id="worker-search"
          options={workerOptions}
          onChange={handleSelectedWorker}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label={t('worker')} />}
        />
      </Grid>
      <Button 
              onClick={handleSubmit} 
              variant="contained" 
              color="primary" 
              className={classes.button}>
              {t('send')}
      </Button>
      
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    left: theme.spacing(0),
    marginTop: '4%'
  },
  container: {
      marginBottom: '5%',
      marginTop: '5%'
  }
}));

export default EmploymentPage;