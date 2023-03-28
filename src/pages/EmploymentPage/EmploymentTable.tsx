import {
    Typography,
    FormControl,
    MenuItem,
    Select,
    Grid,
    Button
  } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from '../../components/SearchBox';
import { useTranslation } from 'react-i18next';
  
import makeStyles from '@mui/styles/makeStyles';
  
  import {
    severity,
    User,
  } from '../../types/types'
import { fetchAgencyContacts } from '../../actions/usersActions';
import { setAlert } from '../../actions/alertActions';
import { E_SET_CURRENT } from '../../types/state';
import { submitEmploymentAgreement } from '../../actions/businessContractActions';


export interface EmploymentProps {}
  
const EmploymentPage: React.FC<EmploymentProps> = () => {
    const currentForm = useSelector((state: any) => state.employmentAgreements.currentAgreement);
    const classes = useStyles();
    const { data, ...user } = useSelector((state: any) => state.user);
    const userContacts: User[] = useSelector((state: any) => state.user.contacts);
    const { t } = useTranslation()
    const dispatch = useDispatch();
   
    const businesses: User[] = []
    const workers: User[] = []
    
    userContacts.forEach((user) => {
      if (user.userType == "worker") {
        workers.push(user)
      } else if (user.userType == "business") {
        businesses.push(user)
      }
    })

    useEffect(() => {
        dispatch(fetchAgencyContacts());
      }, [dispatch]); 
  
    /**TODO: More user friendly way of showing filtered recipients. Currently
     * user writes a search term and after that has to click Select-component
     * before seeing search results.
     */
    const [filterWorkers, setFilterWorkers] = useState('');
    const [filterBusinesses, setFilterBusinesses] = useState('');
  
    /**If current report has some recipients already (received from redux store),
     * set those as default.
     * */
    const [selectedWorker, setSelectedWorker] = useState(currentForm.worker ? currentForm.worker : "")
    const [selectedBusiness, setSelectedBusiness] = useState(currentForm.business ? currentForm.business : "")

  
    const handleFilterWorkers = (event: any) => {
      setFilterWorkers(event.target.value);
    };
  
    const handleFilterBusinesses = (event: any) => {
      setFilterBusinesses(event.target.value);
    };

  
    /**Select recipient worker */
    const handleSelectedWorker = (event: any) => {
      setSelectedWorker(event.target.value)
      /**Mui Select does not accept null for empty value. So we need 
       * to use "" but send null to store when clearing selection. 
       * */
      /*
      const valueForDB = event.target.value === "" ? null : event.target.value 
      dispatch({ type: SET_WORKER, data: valueForDB }); */
      
     const valueForDB = { ...currentForm, worker: event.target.value }
     dispatch({ type: E_SET_CURRENT, data: valueForDB})

    };
  
    /**Select recipient business */
    const handleSelectedBusiness = (event: any) => {
      setSelectedBusiness(event.target.value)
      /**Mui Select does not accept null for empty value. So we need 
       * to use "" but send null to store when clearing selection. 
       * */
      //const valueForDB = event.target.value === "" ? null : event.target.value 
      const valueForDB = { ...currentForm, business: event.target.value }
      dispatch({ type: E_SET_CURRENT, data: valueForDB });
    };


    const handleSubmit = (event: any) => {
        if (!currentForm.worker || !currentForm.business) {
            dispatch(setAlert(t('employment_no_recipient'), severity.Warning))
          } 
        else {
            try {
                dispatch(submitEmploymentAgreement(currentForm))
                dispatch(
                    setAlert(
                        `Success: Contract request sent`,
                        severity.Success
                    )
                )
            } catch (error) {
                dispatch(
                    setAlert(
                        `Failure: Contract request not sent`,
                        severity.Success
                    )
                )
            }
        }
    };
  
    return (
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Typography variant="h2" className='header5'> {t('connect_workers_to_business')}</Typography>
        </Grid>
        {/* Business grid */}
        <Grid item xs={12} style={{ marginTop: 32 }}>
          <Typography>{t('business')}</Typography>
          <SearchBox
            placeholder={t('search_by_name')}
            value={filterBusinesses}
            onChange={handleFilterBusinesses}
          />
          <FormControl>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedBusiness}
              style={{ maxHeight: 50 }}
              onChange={handleSelectedBusiness}
            >
              {businesses.sort((a: any, b: any) => a.companyName.localeCompare(b.companyName)) // Sort alphabetically and filter by search term. Return a list of Menuitems
                .filter((business: any) =>
                  business.companyName
                    .toLowerCase()
                    .includes(filterBusinesses.toLowerCase())
                )
                .map((business: any) => (
                  <MenuItem key={business._id} value={business._id}>
                    {business.companyName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        {/* Worker grid */}
        <Grid item xs={12} style={{ marginTop: 32 }}>
          <Typography>{t('worker')}</Typography>
          <SearchBox
            placeholder={t('search_by_name')}
            value={filterWorkers}
            onChange={handleFilterWorkers}
          />
          <FormControl>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedWorker}
              onChange={handleSelectedWorker}
              style={{ maxHeight: 50 }}
            >
              {workers.sort((a: any, b: any) => a.firstName.localeCompare(b.firstName)) // Sort alphabetically and filter by search term. Return a list of Menuitems
                .filter((worker: any) =>
                  worker.firstName.toLowerCase().includes(filterWorkers.toLowerCase())
                )
                .map((worker: any) => (
                  <MenuItem key={worker._id} value={worker._id}>
                    {worker.firstName + " " + worker.lastName + " | " + worker.email}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        <Button 
                onClick={handleSubmit} 
                variant="contained" 
                color="primary" 
                className={classes.button}>
                {t('send')}
        </Button>
        </Grid>
      </Grid>
    );
  };

  const useStyles = makeStyles((theme) => ({
    button: {
      left: theme.spacing(0),
      marginLeft: '25%'
    },
    container: {
        marginTop: '10%',
        marginLeft: '10%'
    }
  }));
  
  export default EmploymentPage;