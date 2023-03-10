import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Theme,
  Divider,
  AccordionActions,
  IconButton,
  Button,
  TableRow,
  TableCell,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import {
  refuseBusinessContractById,
  sendBusinessContract,
} from '../../actions/businessContractActions';
import { severity } from '../../types/types';
import { setAlert } from '../../actions/alertActions';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import Tooltip from '@mui/material/Tooltip';


const ContractRow: React.FC<any> = ({ view, contract }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function rejectContract(userId: string, contractId: string): void {
    dispatch(
      refuseBusinessContractById(
        userId,
        contractId
      )
    )
    dispatch(setAlert('Business contract form sent!', severity.Success));
  }

  function signContract(id: string): void {
    let status = "signed"
    dispatch(
      sendBusinessContract(
        id,
        status
      )
    )
    dispatch(setAlert('Business contract form sent!', severity.Success));
  }

  return (
    <TableRow key={contract._id}>
      <TableCell component="th" scope="row" align="left">
        {contract.status}
      </TableCell>
      <TableCell align="left">{contract.creator.name}</TableCell>
      <TableCell align="left">{contract.type}</TableCell>
      <TableCell
        padding="none"
        align="left"
        style={{ paddingLeft: 5 }}
      >
        <Tooltip title="Hylkää Sopimus" placement="top" arrow>
          <IconButton
            onClick={() => rejectContract(contract.target, contract._id)}
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
          <Tooltip title="Allekirjoita sopimus" placement="top" arrow>
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

export default ContractRow;