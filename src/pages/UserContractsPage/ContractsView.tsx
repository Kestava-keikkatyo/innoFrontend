import React from 'react';
import {
  Theme,
  ToggleButtonGroup,
  ToggleButton,
  TableBody,
  Table,
  TableHead,
  TableCell,
  TableRow,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useTranslation } from 'react-i18next';
import ContractRow from './ContractRow';
import EmploymentRow from './EmploymentRow';

/**
 * @component
 * @desc
 * A view of contracts
 */
export const ContractsView = (prop: { view: string, contracts: any[], employmentContracts: any[] }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { view, contracts, employmentContracts } = prop;
  const [filter, setFilter] = React.useState('all')

  const handleChange = (event: React.MouseEvent<HTMLElement>, value: string) => {
    event.preventDefault()
    setFilter(value)
  }

  const showContracts = (type: string) => {
    switch (type) {
      case 'all':
        return contracts.map((contract: any) => (
          <ContractRow key={contract._id} view={view} contract={contract} />
        ))

      case 'employment':
        if(employmentContracts[0]) {
          return employmentContracts.map((contract: any) => (
            <EmploymentRow key={contract._id} view={view} contract={contract} />
          ))
        }

      default:
        return contracts.filter((contract) => {
          return contract.type === type
        }).map((contract: any) => (
            <ContractRow key={contract._id} view={view} contract={contract} />
          ))
    }
  }

  const contractStatuses = [
    { status: 'all' },
    { status: 'agency' },
    { status: 'employment' }
  ]

  if (contracts.length < 1 && employmentContracts.length < 1) {
    return <p>{t('no_results')}</p>;
  }
  
  return (
    <div>
      <div>
        <ToggleButtonGroup
          classes={{ root: classes.buttonGroupRoot }}
          className={classes.buttonGroup}
          value={filter}
          exclusive
          onChange={handleChange}
          orientation='horizontal'
        >     
          {contractStatuses.map(filter => (
            <ToggleButton key={filter.status} value={filter.status}>{filter.status}</ToggleButton>
          ))} 
        </ToggleButtonGroup>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">{t("creator")}</TableCell>
              <TableCell align="left">{t("status")}</TableCell>
              <TableCell align="left">{t("request_type")}</TableCell>
              <TableCell align="left">{t("worker")}</TableCell>
              <TableCell align="left">{t("business")}</TableCell>
              <TableCell align="left">{t("delete")}</TableCell>
              {view == "pending" &&
                  <TableCell align="left">{t("accept")}</TableCell>
              }
            </TableRow>
          </TableHead>
          <TableBody>{showContracts(filter)}</TableBody>
        </Table>
          
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  logoColumn: {
    flexBasis: '20%',
  },
  column: {
    flexBasis: '40%',
    wordWrap: 'break-word',
    marginLeft: '10px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  employmentTable: {
    marginTop: '6%',
  },
  color: {
    color: 'red',
  },
  info: {
    display: 'column',
    width: '30rem',
  },
  buttonGroup: {
    display: 'flex',
    borderRadius: '0px',
  },
  buttonGroupRoot: {
    borderRadius: '0px',
  },
}));

export default ContractsView;
