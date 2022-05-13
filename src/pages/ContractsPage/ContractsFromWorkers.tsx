import React from 'react';
import { Typography, Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useDispatch } from 'react-redux';
import {
  declineBusinessContract,
  acceptBusinessContractFromWorker,
  sendBackBusinessContract,
} from '../../actions/businessContractActions';
import { setAlert } from '../../actions/alertActions';
import { severity } from '../../types/types';
import ContractsReceivedTable from './ContractsReceivedTable';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { deleteBusinessContractForm } from '../../actions/businessContractFormActions';

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
  receivedContracts: {
    businesses: [];
    workers: [];
  };
  agency: string;
}

/**
 * @component
 * @description
 * Currently not in use.
 *
 */
const WorkerSendContracts = (props: {
  businessContract: BusinessContractObject[];
}) => {
  const { businessContract } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const contracts = businessContract;

  const acceptContractFromWorker = (
    contractId: string,
    userId: string,
    formId: string
  ) => {
    dispatch(acceptBusinessContractFromWorker(contractId, userId, formId));
    dispatch(setAlert('Contract from Worker accepted.', severity.Info, 3));
  };

  const declineContract = (contractId: string, userId: string, formId: any) => {
    dispatch(declineBusinessContract(contractId, userId));
    if (formId) {
      dispatch(deleteBusinessContractForm(formId, userId));
    }
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

  if (!contracts[0]?.requestContracts?.workers?.length) {
    return (
      <Typography
        style={{ padding: '1rem' }}
        variant="h5"
        align="center"
        className="text-secondary"
      >
        {t('no_results')}
      </Typography>
    );
  }

  return <>
    <Grid
      container
      direction="column"
      spacing={1}
      justifyContent="center"
      alignItems="stretch"
    >
      <Grid item xs={12}>
        <Accordion className={classes.accordion} variant="outlined">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography gutterBottom variant="h5">
              {t(' contracts_received_from_the_workers')}
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
      </Grid>
    </Grid>
  </>;
};

const useStyles = makeStyles((theme) => ({
  accordion: {
    margin: theme.spacing(2, 0),
    width: '100%',
  },
}));

export default WorkerSendContracts;
