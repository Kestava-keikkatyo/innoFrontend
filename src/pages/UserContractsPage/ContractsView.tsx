import React, { useEffect } from 'react';
import {
  Theme,
  TableBody,
  Table,
  TableHead,
  TableCell,
  TableRow,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useTranslation } from 'react-i18next';
import EmploymentContractRow from './EmploymentContractRow';
import { loadUser } from '../../utils/storage';

/**
 * @component
 * @desc
 * A view of contracts
 */
export const ContractsView = (prop: { view: string, employmentContracts: any[] }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { view, employmentContracts } = prop;
  const role = loadUser().role

  const showContracts = () => {
    if (employmentContracts[0]) {
      return employmentContracts.map((contract: any) => (
        <EmploymentContractRow key={contract._id} view={view} contract={contract} />
      ))
    }
  }

  if (employmentContracts.length < 1) {
    return <p>{t('no_results')}</p>;
  }
  
  return (
    <div>
      <div>
        <Table>
          <TableHead>
              <TableRow>
                <TableCell align="left">{t("status")}</TableCell>
                <TableCell align="left">{t("request_type")}</TableCell>
                <TableCell align="left">{t("creator")}</TableCell>
                {role == "worker" &&
                <TableCell align="left">{t("business_name")}</TableCell>
                }
                {role == "business" &&
                <TableCell align="left">{t("worker_email")}</TableCell>
                }
                <TableCell align="left">{t("delete")}</TableCell>
                {view == "pending" &&
                  <TableCell align="left">{t("accept")}</TableCell>
                } 
              </TableRow>            
          </TableHead>
          <TableBody>{showContracts()}</TableBody>
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
