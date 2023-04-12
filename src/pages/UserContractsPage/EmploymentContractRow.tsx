import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Theme,
  IconButton,
  TableRow,
  TableCell,
  TableHead,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteEmploymentAgreement,
  signEmploymentAgreement,
} from '../../actions/businessContractActions';
import { severity, User } from '../../types/types';
import { setAlert } from '../../actions/alertActions';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import Tooltip from '@mui/material/Tooltip';
import { loadUser, removeContactData, removeContactDataById } from '../../utils/storage';
import { fetchBusinessContacts, fetchWorkerContacts } from '../../actions/usersActions';


const EmploymentContractRow: React.FC<any> = ({ view, contract }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();


  function deleteContract(contract: any): void {
    dispatch(deleteEmploymentAgreement(contract._id))
    dispatch(setAlert('Contract deleted!', severity.Success));

    removeContactData()
    switch(loadUser().role) {
      case "business":
        dispatch(fetchBusinessContacts())
        break
      case "worker":
        dispatch(fetchWorkerContacts())
        break
    }
  }

  function signContract(contract: any): void {
    dispatch(signEmploymentAgreement(contract._id))
    dispatch(setAlert('Contract accepted!', severity.Success));
    
    removeContactData()
    switch(loadUser().role) {
      case "business":
        dispatch(fetchBusinessContacts())
        break
      case "worker":
        dispatch(fetchWorkerContacts())
        break
    }
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
      <TableCell align="left">{t("employment_request")}</TableCell>
      <TableCell component="th" scope="row" align="left">{contract.status}</TableCell>
      <TableCell align="left">{contract.worker.email}</TableCell>
      <TableCell align="left">{contract.business.companyName}</TableCell>
      <TableCell
        padding="none"
        align="left"
        style={{ paddingLeft: 5 }}
      >
      <Tooltip title="Delete" placement="top" arrow>
        <IconButton
          onClick={() => deleteContract(contract)}
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
          onClick={() => signContract(contract)}
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

export default EmploymentContractRow;