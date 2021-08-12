import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {
  declineBusinessContract,
  acceptBusinessContractFromBusiness,
  sendBackBusinessContract,
} from '../../actions/businessContractActions';
import { setAlert } from '../../actions/alertActions';
import { severity } from '../../types/types';
import ContractsReceivedTable from './ContractsReceivedTable';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

const ContractsFromBusiness = (props: {
  businessContract: BusinessContractObject[];
}) => {
  const { businessContract } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const contracts = businessContract;

  const acceptContractFromBusiness = (
    contractId: string,
    userId: string,
    formId: string
  ) => {
    dispatch(acceptBusinessContractFromBusiness(contractId, userId, formId));
    dispatch(setAlert('Contract from Business accepted.', severity.Info, 3));
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

  if (!contracts[0]?.requestContracts?.businesses?.length) {
    return (
      <Typography
        style={{ padding: '1rem' }}
        variant="h5"
        align="center"
        className="text-secondary"
      >
        No results
      </Typography>
    );
  }

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
          <Accordion className={classes.accordion} variant="outlined">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography gutterBottom variant="h5">
                Käyttäjäyritykseltä saapuneet sopimukset
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
        </Grid>
      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  accordion: {
    margin: theme.spacing(2, 0),
    width: '100%',
  },
}));

export default ContractsFromBusiness;
