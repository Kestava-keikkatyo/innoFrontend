import React from 'react';

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { IRootState } from '../../utils/store';
import { useEffect, useState } from 'react';

import {
  Box,
  InputBase,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Tooltip,
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { updateSearchList } from '../../actions/businessContractActions';
import { useDispatch } from 'react-redux';
import { roles } from '../../types/types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
} from '@material-ui/core';

const INIT_SEARCH_TYPE = roles.Worker;

/**
 * @component
 * @desc A table to search worker users to create new business contract.
 * @param props
 * @param {Function} props.addWorkerOrBusiness add button click listener function,
 * which passes workers data to parent component state.
 */
const SearchTable: React.FC<any> = ({ addWorkerOrBusiness }) => {
  const dispatch = useDispatch();
  const [searchType, setSearchType] = useState<any>(INIT_SEARCH_TYPE);
  const [filter, setFilter] = React.useState('');
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();

  useEffect(() => {
    dispatch(updateSearchList('', INIT_SEARCH_TYPE));
  }, [dispatch]);

  // handle user input in the search field
  const handleFilterchange = (event: any) => {
    setFilter(event.target.value);
  };

  // handle radio button change
  const handleChange = (event: any) => {
    setSearchType(event.target.value);
    dispatch(updateSearchList('', event.target.value));
  };

  const { searchList } = useSelector(
    (state: IRootState) => state.businessContracts
  );
  const workersOrBusinesses = searchList;

  // Table view for desktop devices
  const tableView = () => {
    return (
      <TableContainer>
        <Table aria-label="searched workers">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Add</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workersOrBusinesses
              .filter((workerOrBusiness: any) =>
                workerOrBusiness.name
                  .toLowerCase()
                  .includes(filter.toLowerCase())
              )
              .map((workerOrBusiness: any) => (
                <TableRow key={workerOrBusiness._id}>
                  <TableCell component="th" scope="row" align="left">
                    {workerOrBusiness.name}
                  </TableCell>
                  <TableCell align="left">{workerOrBusiness.email}</TableCell>
                  <TableCell
                    padding="none"
                    align="left"
                    style={{ paddingLeft: 5 }}
                  >
                    <IconButton
                      aria-label="add to organization"
                      color="secondary"
                      onClick={() => addWorkerOrBusiness(workerOrBusiness)}
                    >
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  // Accordion view for mobile devices
  const accordionView = () => {
    return workersOrBusinesses
      .filter((workerOrBusiness: any) =>
        workerOrBusiness.name.toLowerCase().includes(filter.toLowerCase())
      )
      .map((workerOrBusiness: any) => (
        <div key={workerOrBusiness._id} className={classes.accordionDiv}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                {workerOrBusiness.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.description}>
                {workerOrBusiness.email}
              </Typography>
            </AccordionDetails>
            <AccordionActions>
              <Tooltip title="Add worker" placement="top" arrow>
                <IconButton
                  onClick={() => addWorkerOrBusiness(workerOrBusiness)}
                >
                  <AddIcon />
                </IconButton>
              </Tooltip>
            </AccordionActions>
          </Accordion>
        </div>
      ));
  };

  if (!workersOrBusinesses.length)
    return (
      <Typography
        style={{ padding: '1rem' }}
        variant="h6"
        align="center"
        className="text-secondary"
      >
        no results
      </Typography>
    );

  return (
    <Box
      display="flex"
      width="100%"
      maxWidth="100%"
      justifyContent="flex-start"
      alignItems="center"
      flexWrap="wrap"
    >
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="search type"
          row
          name="searchType"
          value={searchType}
          onChange={handleChange}
        >
          <FormControlLabel
            value={roles.Worker}
            control={<Radio />}
            label="Worker"
          />
          <FormControlLabel
            value={roles.Business}
            control={<Radio />}
            label="Business"
          />
        </RadioGroup>
      </FormControl>

      <form>
        <Box display="flex" alignItems="center">
          <InputBase
            placeholder="search with name"
            value={filter}
            onChange={handleFilterchange}
          />
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        </Box>
      </form>
      {matches ? accordionView() : tableView()}
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordionDiv: {
      width: '100%',
      marginTop: 12,
      border: '1px solid #E0E0E0',
      borderRadius: 5,
    },
    heading: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightRegular,
    },
    description: {
      fontSize: theme.typography.pxToRem(13),
      color: '#6C6C6C',
    },
  })
);

export default SearchTable;
