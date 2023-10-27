import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography'
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
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContractById, sendContract } from '../../actions/contractActions'
import { severity } from '../../types/types'
import { setAlert } from '../../actions/alertActions'
import {
  Send as SendIcon,
  Delete as DeleteIcon,
  DoneAll as AllSignedIcon,
  HourglassEmpty as PendingIcon,
} from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import Tooltip from '@mui/material/Tooltip'
import { loadUser } from '../../utils/storage'
import { green, red, yellow } from '@mui/material/colors'
import { fetchBusinessContacts, fetchWorkerContacts } from '../../actions/usersActions'
import i18next from 'i18next'

const ContractRow: React.FC<any> = ({ view, contract }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  function deleteContract(userId: string, contractId: string): void {
    dispatch(deleteContractById(contractId))
    dispatch(setAlert('Contract deleted!', severity.Success))
  }

  function signContract(id: string): void {
    let status = 'signed'
    dispatch(sendContract(id, status))
    dispatch(setAlert(i18next.t('contract_accepted_alert'), severity.Success))
  }

  return (
    <TableRow key={contract._id}>
      <TableCell component='th' scope='row' align='left'>
        {contract.status === 'signed' && (
          <>
            <Tooltip title={t('contract_tooltip_each_signed')} placement='top' arrow>
              <AllSignedIcon sx={{ color: green[500] }} />
            </Tooltip>
          </>
        )}
        {contract.status === 'pending' && (
          <>
            <Tooltip title={t('contract_tooltip_each_pending')} placement='top' arrow>
              <PendingIcon sx={{ color: yellow[800] }} />
            </Tooltip>
          </>
        )}
      </TableCell>
      <TableCell align='left'>{t('contact_request')}</TableCell>
      <TableCell align='left'>{contract.creator.companyName}</TableCell>
      <TableCell align='left'>{contract.target.email}</TableCell>
      <TableCell padding='none' align='left' style={{ paddingLeft: 5 }}>
        <Tooltip title='Delete and remove connection' placement='top' arrow>
          <IconButton onClick={() => deleteContract(contract.target, contract._id)} size='large'>
            <DeleteIcon sx={{ color: red[500] }} />
          </IconButton>
        </Tooltip>
      </TableCell>

      {view == 'pending' && (
        <TableCell padding='none' align='left' style={{ paddingLeft: 5 }}>
          <Tooltip title='Sign' placement='top' arrow>
            <IconButton
              style={{ color: '#eb5a00' }}
              onClick={() => signContract(contract._id)}
              size='large'
            >
              <SendIcon />
            </IconButton>
          </Tooltip>
        </TableCell>
      )}
    </TableRow>
  )
}

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

export default ContractRow

function removeAllContactData() {
  throw new Error('Function not implemented.')
}
