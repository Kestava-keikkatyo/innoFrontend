import React from 'react';
import {
  Theme,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useTranslation } from 'react-i18next';
import ContractAccordion from './ContractsAccordion';

/**
 * @component
 * @desc
 * A list of received contract requests.
 * Contracts can be filtered by their type (pending, signed).
 */
 export const ListAccordionInBox = (prop: { contracts: any[] }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { contracts } = prop;
  const [filter, setFilter] = React.useState('all')

  const pending: any = []
  const signed: any = []
  contracts.map((contract: any) => {
    switch(contract.status) {
      case 'pending':
        pending.push(contract);
        break
      case 'signed':
        signed.push(contract);
        break
      default:
        break
    }
    return '';
  });

  const handleChange = (event: React.MouseEvent<HTMLElement>, value: string) => {
    event.preventDefault()
    setFilter(value)
  }

  const showContracts = (type: string) => {
    switch(type) {
      case 'all':
        return contracts.map((contract: any) => (
          <ContractAccordion key={contract._id} contract={contract} />
      ))
      default:
        return contracts.filter((contract) => {
          return contract.status === type
        })
        .map((contract: any) => (
          <ContractAccordion key={contract._id} contract={contract} />
      ))
    }
  }

  const contractStatuses = [
    {status: 'all'},
    {status: 'pending'},
    {status: 'signed'}
  ]

  if (contracts.length < 1) {
    return <p>{t('no_results')}</p>;
  } else
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
          <div>{showContracts(filter)}</div>
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

export default ListAccordionInBox;
