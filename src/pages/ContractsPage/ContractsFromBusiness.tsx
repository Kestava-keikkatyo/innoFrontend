import React from 'react';
import { Typography, Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useDispatch } from 'react-redux';
import {
  rejectContract,
  acceptContractFromBusiness,
  sendBackContract,
} from '../../actions/contractActions';
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
const ContractsFromBusiness = (props: {
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
    dispatch(acceptContractFromBusiness(contractId, userId, formId));
    dispatch(setAlert('Contract from Business accepted.', severity.Info, 3));
  };

  const declineContract = (contractId: string, userId: string, formId: any) => {
    dispatch(rejectContract(contractId, userId));
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
    dispatch(sendBackContract(contractId, userId, formId));
    dispatch(setAlert('Contract sended back.', severity.Info, 3));
  };

  if (!contracts[0]?.requestContracts?.businesses?.length) {
    return (
      <Typography
        style={{ padding: '1rem' }}
        variant="h1"
        align="center"
        className="text-secondary header2"
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
            <Typography gutterBottom variant="h1" className='header2'>
              {t('contracts_from_business')}
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
  </>;
};

const useStyles = makeStyles((theme) => ({
  accordion: {
    margin: theme.spacing(2, 0),
    width: '100%',
  },
}));

export default ContractsFromBusiness;
