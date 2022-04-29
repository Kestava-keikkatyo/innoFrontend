import {
  Typography,
  FormControl,
  MenuItem,
  Select,
  Grid,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllAgencies,
  fetchAllBusinesses,
} from '../../actions/allUsersActions';
import { setReport } from '../../actions/reportActions';
import SearchBox from '../../components/SearchBox';
import { useTranslation } from 'react-i18next';
export interface ReportStepOneProps {}

const ReportStepOne: React.FC<ReportStepOneProps> = () => {
  const currentReport: any = useSelector(
    (state: any) => state.report.currentReport
  );
  const { agencies, businesses } = useSelector((state: any) => state.allUsers);
  const { t } = useTranslation()
  const dispatch = useDispatch();

  const [filterAgencies, setFilterAgencies] = useState('');
  const [filterBusinesses, setFilterBusinesses] = useState('');
  const [selectedBusiness, setSelectedBusiness] = useState(currentReport.business ? currentReport.business : "")
  const [selectedAgency, setSelectedAgency] = useState(currentReport.agency ? currentReport.agency : "")

  useEffect(() => {
    dispatch(fetchAllAgencies());
    dispatch(fetchAllBusinesses());
  }, [dispatch]);

  const handleFilterAgencies = (event: any) => {
    setFilterAgencies(event.target.value);
  };

  const handleFilterBusinesses = (event: any) => {
    setFilterBusinesses(event.target.value);
  };

  const handleSelectedAgency = (event: any) => {
    setSelectedAgency(event.target.value)
    //Mui Select does not accept null for empty value. So we need to use "" but send null to store when clearing selection. 
    const valueForDB = event.target.value === "" ? null : event.target.value 
    dispatch(
      setReport({ ...currentReport, agency: valueForDB })
    );
  };
  const handleSelectedBusiness = (event: any) => {
    setSelectedBusiness(event.target.value)
    //Mui Select does not accept null for empty value. So we need to use "" but send null to store when clearing selection. 
    const valueForDB = event.target.value === "" ? null : event.target.value 
    dispatch(
      setReport({ ...currentReport, business: valueForDB })
    );
  };

  return (
    <Grid container style={{ marginTop: 16 }}>
      <Grid item xs={12}>
        <Typography variant="h6"> {t('select_report_handler')}</Typography>
        <Typography variant="body2" style={{ color: '#757575' }}>
         {t('select_report_helper_text')}
        </Typography>
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
            <MenuItem value="">
              <em>{t('select_report_handler_clear')}</em>
            </MenuItem>
            {businesses
              // Sort alphabetically
              .sort((a: any, b: any) => a.name.localeCompare(b.name))
              .filter((business: any) =>
                business.name
                  .toLowerCase()
                  .includes(filterBusinesses.toLowerCase())
              )
              .map((business: any) => (
                <MenuItem key={business._id} value={business._id}>
                  {business.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
      {/* Agency grid */}
      <Grid item xs={12} style={{ marginTop: 32 }}>
        <Typography>{t('agency')}</Typography>
        <SearchBox
          placeholder={t('search_by_name')}
          value={filterAgencies}
          onChange={handleFilterAgencies}
        />
        <FormControl>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedAgency}
            onChange={handleSelectedAgency}
            style={{ maxHeight: 50 }}
          >
            <MenuItem value="">
              <em>{t('select_report_handler_clear')}</em>
            </MenuItem>
            {agencies
              // Sort alphabetically
              .sort((a: any, b: any) => a.name.localeCompare(b.name))
              .filter((agency: any) =>
                agency.name.toLowerCase().includes(filterAgencies.toLowerCase())
              )
              .map((agency: any) => (
                <MenuItem key={agency._id} value={agency._id}>
                  {agency.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default ReportStepOne;
