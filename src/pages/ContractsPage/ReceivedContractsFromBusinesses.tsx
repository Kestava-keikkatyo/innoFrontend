import React from 'react'
import { Typography, Grid } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { useDispatch } from 'react-redux'
import {
  rejectContract,
  acceptContractFromBusiness,
  sendBackContract,
} from '../../actions/contractActions'
import { setAlert } from '../../actions/alertActions'
import { severity } from '../../types/types'
import ContractsRequestedTable from './ContractsRequestedTable'

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useTranslation } from 'react-i18next'

interface BusinessContractObject {
  _id: string
  requestContracts: {
    businesses: []
    workers: []
  }
  madeContracts: {
    businesses: []
    workers: []
  }
  pendingContracts: {
    businesses: []
    workers: []
  }
  receivedContracts: {
    businesses: []
    workers: []
  }
  agency: string
}

/**
 * @component
 * @description
 * Currently not in use.
 *
 */
const ReceivedContractsFromBusinesses = (props: { businessContract: BusinessContractObject[] }) => {
  const { businessContract } = props
  const classes = useStyles()
  const dispatch = useDispatch()
  const contracts = businessContract
  const { t } = useTranslation()

  console.log('contracts, Businesses', contracts)

  console.log(
    'contracts[0]?.receivedContracts?.businesses, Businesses',
    contracts[0]?.receivedContracts?.businesses,
  )

  const acceptContractFromBusiness = (contractId: string, userId: string, formId: string) => {
    dispatch(acceptContractFromBusiness(contractId, userId, formId))
    dispatch(setAlert('Contract from Business accepted.', severity.Info, 3))
  }

  const sendBackContract = (contractId: string, userId: string, formId: string) => {
    dispatch(sendBackContract(contractId, userId, formId))
    dispatch(setAlert('Contract sended back.', severity.Info, 3))
  }

  if (!contracts[0]?.receivedContracts?.businesses?.length) {
    return (
      <Typography
        style={{ padding: '1rem' }}
        variant='h1'
        align='center'
        className='text-secondary header2'
      >
        {t('no_results')}
      </Typography>
    )
  }

  return (
    <>
      <Grid container direction='column' spacing={1} justifyContent='center' alignItems='stretch'>
        <Grid item xs={12}>
          <Accordion className={classes.accordion} variant='outlined'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography gutterBottom variant='h1' className='header2'>
                {t('contracts_from_business')}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <ContractsRequestedTable
                contracts={contracts[0]?.receivedContracts?.businesses}
                contractId={businessContract[0]._id}
                acceptContract={acceptContractFromBusiness}
                sendBackContract={sendBackContract}
              />
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  accordion: {
    margin: theme.spacing(2, 0),
    width: '100%',
  },
}))

export default ReceivedContractsFromBusinesses
