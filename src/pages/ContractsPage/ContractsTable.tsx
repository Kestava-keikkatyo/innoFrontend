import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {
  declineBusinessContract,
  acceptBusinessContractFromBusiness,
  acceptBusinessContractFromWorker,
  sendBackBusinessContract,
} from '../../actions/businessContractActions';
import { setAlert } from '../../actions/alertActions';
import { severity } from '../../types/types';
import ContractsReceivedTable from './ContractsReceivedTable';
import ContractsSendTable from './ContractsSendTable';
import { useTranslation } from 'react-i18next';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0),
  },
  accordion: {
    width: '100%',
    marginTop: 12,
    border: '1px solid #E0E0E0',
    borderRadius: 5,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
  description: {
    fontSize: theme.typography.pxToRem(13),
    color: '#6C6C6C',
  },
}));

interface BusinessContractObject {
  _id: string;
  requestContracts: {
    businesses: [];
    workers: [];
  };
  madeContracts: {
    businesses: [];
    workers: [];
  };
  pendingContracts: {
    businesses: [];
    workers: [];
  };
}

/**
 * @component
 * @description
 * - Returns Grid with two cards.
 * - Cards show Agency Made BusinessContracts and Requested BusinessContracts.
 * - Agency can accept BusinessContract from Requested BusinessContracts.
 * - If Agecy accepts BusinessContracts requested contracts moves to Made contracts.
 * @returns Grid
 */
const ContractsTable = (props: {
  businessContract: BusinessContractObject[];
}) => {
  const { businessContract } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const contracts = businessContract;
  const { t } = useTranslation();

  const acceptContractFromBusiness = (
    contractId: string,
    userId: string,
    formId: string
  ) => {
    dispatch(acceptBusinessContractFromBusiness(contractId, userId, formId));
    dispatch(setAlert('Contract from Business accepted.', severity.Info, 3));
  };

  const acceptContractFromWorker = (
    contractId: string,
    userId: string,
    formId: string
  ) => {
    dispatch(acceptBusinessContractFromWorker(contractId, userId, formId));
    dispatch(setAlert('Contract from Worker accepted.', severity.Info, 3));
  };

  const declineContract = (contractId: string, userId: string) => {
    dispatch(declineBusinessContract(contractId, userId));
    dispatch(setAlert('Contract declined.', severity.Info, 3));
  };

  const sendBackContract = (
    contractId: string,
    userId: string,
    formId: string
  ) => {
    dispatch(sendBackBusinessContract(contractId, userId, formId));
    dispatch(setAlert('Contract sended back.', severity.Info, 3));
  };

  if (contracts[0] === undefined || !contracts.length)
    return (
      <Typography
        style={{ padding: '1rem' }}
        variant="h6"
        align="center"
        className="text-secondary"
      >
        {t('no_results')}
      </Typography>
    );
  else
    return (
      <>
        <Grid
          container
          direction="column"
          spacing={1}
          justify="center"
          alignItems="stretch"
        >
          <Grid item xs={12}>
            <Accordion className={classes.card} variant="outlined">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography gutterBottom variant="h5">
                  {t('sent_contracts')}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Accordion className={classes.accordion} variant="outlined">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography gutterBottom variant="h6">
                      {t('businesses')}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ContractsSendTable
                      contracts={contracts[0]?.pendingContracts?.businesses}
                      contractId={businessContract[0]._id}
                      declineContract={declineContract}
                    />
                  </AccordionDetails>
                </Accordion>
              </AccordionDetails>

              <AccordionDetails>
                <Accordion className={classes.accordion} variant="outlined">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography gutterBottom variant="h6">
                      {t('workers')}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ContractsSendTable
                      contracts={contracts[0]?.pendingContracts?.workers}
                      contractId={businessContract[0]._id}
                      declineContract={declineContract}
                    />
                  </AccordionDetails>
                </Accordion>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion className={classes.card} variant="outlined">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography gutterBottom variant="h5">
                  {t('waiting_contracts')}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Accordion className={classes.accordion} variant="outlined">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography gutterBottom variant="h6">
                      {t('businesses')}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ContractsReceivedTable
                      contracts={contracts[0]?.requestContracts?.businesses}
                      contractId={businessContract[0]._id}
                      acceptContract={acceptContractFromBusiness}
                      declineContract={declineContract}
                      sendBackContract={sendBackContract}
                    />
                  </AccordionDetails>
                </Accordion>
              </AccordionDetails>

              <AccordionDetails>
                <Accordion className={classes.accordion} variant="outlined">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography gutterBottom variant="h6">
                      {t('workers')}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ContractsReceivedTable
                      contracts={contracts[0]?.requestContracts?.workers}
                      contractId={businessContract[0]._id}
                      acceptContract={acceptContractFromWorker}
                      declineContract={declineContract}
                      sendBackContract={sendBackContract}
                    />
                  </AccordionDetails>
                </Accordion>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion className={classes.card} variant="outlined">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography gutterBottom variant="h5">
                  {t('done_contracts')}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Accordion className={classes.accordion} variant="outlined">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography gutterBottom variant="h6">
                      {t('businesses')}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ContractsSendTable
                      contracts={contracts[0]?.madeContracts?.businesses}
                      contractId={businessContract[0]._id}
                      declineContract={declineContract}
                    />
                  </AccordionDetails>
                </Accordion>
              </AccordionDetails>

              <AccordionDetails>
                <Accordion className={classes.accordion} variant="outlined">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography gutterBottom variant="h6">
                      {t('workers')}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ContractsSendTable
                      contracts={contracts[0]?.madeContracts?.workers}
                      contractId={businessContract[0]._id}
                      declineContract={declineContract}
                    />
                  </AccordionDetails>
                </Accordion>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </>
    );
};

export default ContractsTable;
