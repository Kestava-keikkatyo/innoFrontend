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
import ContractAccordion from './ContractsAccordion';
import ContractRow from './ContractRow';

/**
 * @component
 * @desc
 * A view of contracts
 */
export const ContractsView = (prop: { contracts: any[] }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { contracts } = prop;
  const [filter, setFilter] = React.useState('all')

  const handleChange = (event: React.MouseEvent<HTMLElement>, value: string) => {
    event.preventDefault()
    setFilter(value)
  }

  const showContracts = (type: string) => {
    switch (type) {
      case 'all':
        return contracts.map((contract: any) => (
          <ContractRow key={contract._id} contract={contract} />
        ))
      default:
        return contracts.filter((contract) => {
          return contract.type === type
        })
          .map((contract: any) => (
            <ContractRow key={contract._id} contract={contract} />
          ))
    }
  }

  const contractStatuses = [
    { status: 'all' },
    { status: 'agency' },
    { status: 'employment' }
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
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">{t("status")}</TableCell>
                <TableCell align="left">{t("name")}</TableCell>
                <TableCell align="left">{t("type")}</TableCell>
                <TableCell align="left">{t("delete")}</TableCell>
                <TableCell align="left">{t("accept")}</TableCell>
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
