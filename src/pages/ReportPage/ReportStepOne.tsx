import {
  Typography,
  FormControl,
  MenuItem,
  Select,
  Grid,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAllAgencies,
  fetchAllBusinesses,
} from '../../actions/allUsersActions';
import { setReport } from '../../actions/reportActions';
import SearchBox from '../../components/SearchBox';

export interface ReportStepOneProps {}

const ReportStepOne: React.FC<ReportStepOneProps> = () => {
  const currentReport: any = useSelector(
    (state: any) => state.report.currentReport
  );
  const { agencies, businesses } = useSelector((state: any) => state.allUsers);

  const dispatch = useDispatch();

  const [filterAgencies, setFilterAgencies] = useState('');
  const [filterBusinesses, setFilterBusinesses] = useState('');

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

  const handleSelectedBusiness = (event: any) => {
    dispatch(
      setReport({ ...currentReport, buisnessAsHandler: event.target.value })
    );
  };

  const handleSelectedAgency = (event: any) => {
    dispatch(
      setReport({ ...currentReport, agencyAsHandler: event.target.value })
    );
  };

  return (
    <Grid container style={{ marginTop: 16 }}>
      <Grid item xs={12}>
        <Typography variant="h6">Select report handler</Typography>
        <Typography variant="body2" style={{ color: '#757575' }}>
          You can choose both Business and Agency or one of them as a report
          handler
        </Typography>
      </Grid>
      {/* Business grid */}
      <Grid item xs={12} style={{ marginTop: 32 }}>
        <Typography>Business</Typography>
        <SearchBox
          placeholder={'Search by name...'}
          value={filterBusinesses}
          onChange={handleFilterBusinesses}
        />
        <FormControl>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue=""
            style={{ maxHeight: 50 }}
            onChange={handleSelectedBusiness}
          >
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
        <Typography>Agency</Typography>
        <SearchBox
          placeholder={'Search by name...'}
          value={filterAgencies}
          onChange={handleFilterAgencies}
        />
        <FormControl>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue=""
            onChange={handleSelectedAgency}
            style={{ maxHeight: 50 }}
          >
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
