import React from 'react'
import Typography from '@mui/material/Typography'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Theme,
  Divider,
  AccordionActions,
  IconButton,
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import { useDispatch } from 'react-redux'
import { deleteContractById } from '../../actions/contractActions'
import Tooltip from '@mui/material/Tooltip'
import CloseIcon from '@mui/icons-material/Close'
import { useTranslation } from 'react-i18next'
import { deleteBusinessContractForm } from '../../actions/businessContractFormActions'
import { severity } from '../../types/types'
import { setAlert } from '../../actions/alertActions'
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
    color: 'black',
  },
  info: {
    width: 'fit-content',
  },
}))

/**
 * @component
 * @description
 * Business contracts that Worker or Business has sent to Agencies (Agreement, type: request)
 *
 * TODO: removal of request (old code, pre user model refactoring)
 */
export const ListAccordioSent = (prop: { contracts: any[] }) => {
  const { contracts } = prop
  const classes = useStyles()

  const dispatch = useDispatch()
  const { t } = useTranslation()

  const cancelContract = (contract: any) => {
    if (window.confirm(t('delete_request'))) {
      dispatch(deleteContractById(contract._id))

      if (contract.receivedContracts.formId) {
        dispatch(deleteBusinessContractForm(contract.receivedContracts.formId, contract.agency._id))
      }

      dispatch(setAlert('Contract request canceled.', severity.Info, 3))
    }
  }

  if (contracts.length < 1) {
    return <p>{t('no_results')}</p>
  } else
    return (
      <div className={classes.root}>
        {contracts.map((contract: any) => (
          <Accordion key={contract._id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.logoColumn}>
                {/* <Avatar
                  alt="Remy Sharp"
                  src={contract.agency.profile.profilePicture}
                /> */}
              </div>
              <div className={classes.column}>
                <Typography className={classes.heading}>{contract.creator.name}</Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.color}>{contract.status}</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.info}>
                <Typography style={{ margin: '10px 5px' }}>Email: contract.agency.email</Typography>
                <Divider />
                <Typography style={{ margin: '10px 5px' }}>Yrityksen lyhyt kuvaus.</Typography>
                <Button style={{ margin: '5px' }} color='primary' variant='contained'>
                  {t('company_sites')}
                </Button>
              </div>
            </AccordionDetails>
            <AccordionActions>
              <Tooltip title='Peruuta' placement='top' arrow>
                <IconButton onClick={() => cancelContract(contract)} size='large'>
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </AccordionActions>
          </Accordion>
        ))}
      </div>
    )
}
export default ListAccordioSent
