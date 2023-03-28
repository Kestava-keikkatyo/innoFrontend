import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Theme,
  IconButton,
  TableRow,
  TableCell,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  refuseEmploymentAgreement,
  acceptEmploymentAgreement,
} from '../../actions/businessContractActions';
import { severity, User } from '../../types/types';
import { setAlert } from '../../actions/alertActions';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import Tooltip from '@mui/material/Tooltip';


const EmploymentRow: React.FC<any> = ({ view, contract }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();


  function rejectContract(contractId: string): void {
    dispatch(refuseEmploymentAgreement(contractId))
    dispatch(setAlert('Employment request refused!', severity.Success));
  }

  function signContract(contractId: string): void {
    const status = "signed"
    dispatch(acceptEmploymentAgreement(contractId))
    dispatch(setAlert('Employment request accepted!', severity.Success));
  }

  if (!contract)
  return (
    <Typography
      style={{ padding: '1rem' }}
      variant="h6"
      align="center"
      className="text-secondary"
    >
      {t("no_results")}
    </Typography>
  )

  return (
    <TableRow key={contract._id}>
      <TableCell align="left">{contract.creator.companyName}</TableCell>
      <TableCell component="th" scope="row" align="left">{contract.status}</TableCell>
      <TableCell align="left">{t("employment_request")}</TableCell>
      <TableCell align="left">{contract.worker.email}</TableCell>
      <TableCell align="left">{contract.business.companyName}</TableCell>
      <TableCell
        padding="none"
        align="left"
        style={{ paddingLeft: 5 }}
      >
        <Tooltip title="Reject" placement="top" arrow>
          <IconButton
            onClick={() => rejectContract(contract._id)}
            size="large">
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
      {view == "pending" &&
        <TableCell
          padding="none"
          align="left"
          style={{ paddingLeft: 5 }}
        >
          <Tooltip title="Sign" placement="top" arrow>
            <IconButton
              style={{ color: '#eb5a00' }}
              onClick={() => signContract(contract._id)}
              size="large">
              <SendIcon />
            </IconButton>
          </Tooltip>
        </TableCell>
      }
    </TableRow>
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
}))

export default EmploymentRow;