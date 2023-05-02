import React, { useEffect } from 'react';
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
  deleteEmploymentContractAsWorkerOrBusiness,
  fetchEmploymentContractsAsWorkerOrBusiness,
  signEmploymentContract,
} from '../../actions/contractActions';
import { severity, User } from '../../types/types';
import { setAlert } from '../../actions/alertActions';
import { 
  Send as SendIcon, 
  Delete as DeleteIcon,
  DoneAll as AllSignedIcon,
  HourglassEmpty as PendingIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import Tooltip from '@mui/material/Tooltip';
import { loadUser, removeContactData as removeAllContactData } from '../../utils/storage';
import { fetchBusinessContacts, fetchWorkerContacts } from '../../actions/usersActions';
import { green, red, yellow } from '@mui/material/colors';


const EmploymentContractRow: React.FC<any> = ({ view, contract }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const role = loadUser().role


  function deleteContract(contract: any): void {
    dispatch(deleteEmploymentContractAsWorkerOrBusiness(contract._id))
    dispatch(setAlert('Contract deleted!', severity.Success))
    removeAllContactData()
    switch(role) {
      case "business":
        dispatch(fetchBusinessContacts())
        break
      case "worker":
        dispatch(fetchWorkerContacts())
        break
    }
  }

  function signContract(contract: any): void {
    dispatch(signEmploymentContract(contract._id))
    dispatch(setAlert('Contract accepted!', severity.Success))
    removeAllContactData()
    switch(role) {
      case "business":
        dispatch(fetchBusinessContacts())
        break
      case "worker":
        dispatch(fetchWorkerContacts())
        break
    }
  }

  useEffect(() => {
    dispatch(fetchEmploymentContractsAsWorkerOrBusiness());
  }, [dispatch])

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
      <TableCell component="th" scope="row" align="left">
          {contract.status === "signed" && 
            <><Tooltip title="Each recipient has signed" placement="top" arrow>
              <AllSignedIcon sx={{ color: green[500] }}/>
            </Tooltip></>}
          {contract.status === "pending" && 
            <><Tooltip title="Pending until each recipient has signed" placement="top" arrow>
                <PendingIcon sx={{ color: yellow[800] }} />
            </Tooltip></>}
      </TableCell>  
      <TableCell align="left">{t("employment_request")}</TableCell>
      <TableCell align="left">{contract.creator.companyName}</TableCell>
      {role == "worker" &&
      <TableCell align="left">{contract.business.companyName}</TableCell> 
      }
      {role == "business" &&
      <TableCell align="left">{contract.worker.email}</TableCell>
      }
      <TableCell
        padding="none"
        align="left"
        style={{ paddingLeft: 5 }}
      >
      <Tooltip title="Delete and remove connection between recipients" placement="top" arrow>
        <IconButton
          onClick={() => deleteContract(contract)}
          size="large">
            <DeleteIcon sx={{ color: red[500] }}/>
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