import React from 'react';
import {
  Typography,
  TableContainer,
  TableHead,
  TableCell,
  Table,
  TableRow,
  TableBody,
  IconButton,
  Theme,
  useMediaQuery,
  useTheme,
  Tooltip,
} from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import ContractsRequestedInfoModal from './ContractsRequestedInfoModal';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { rejectContract } from '../../actions/contractActions';
import { severity } from '../../types/types';
import { setAlert } from '../../actions/alertActions';
import { useDispatch } from 'react-redux';
import { deleteBusinessContractForm } from '../../actions/businessContractFormActions';

/**
 * Used for business contract requests which sent from a worker or business.
 * This contract requests are listed in the business contract object as receivedContracts.
 * 
 * Currently not in use
 * 
 * @param prop
 * @returns
 */

const ContractsRequestedTable = (prop: {
  contracts: [];
  contractId: string;
  acceptContract: Function;
  sendBackContract: Function;
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [displayModal, setDisplayModal] = React.useState(false);
  const { t } = useTranslation();

  const declineContract = (contractId: string, userId: string, formId: any) => {
    dispatch(rejectContract(contractId, userId));
    if (formId) {
      dispatch(deleteBusinessContractForm(formId, userId));
    }
    dispatch(setAlert('Contract declined.', severity.Info, 3));
  };

  const handleOpen = () => {
    setDisplayModal(true);
  };

  const { contracts, contractId, acceptContract, sendBackContract } = prop;

  const tableView = () => {
    return (
      <TableContainer>
        <Table aria-label="searched workers">
          <TableHead>
            <TableRow>
              <TableCell align="left">{t('name')}</TableCell>
              <TableCell align="left">{t('email')}</TableCell>
              <TableCell align="left">{t('role')}</TableCell>
              <TableCell align="left">{t('status')}</TableCell>
              <TableCell align="left">{t('info')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log('contracts', contracts)}
            {contracts.map((contract: any) => (
              <TableRow key={contract._id}>
                <TableCell align="left">
                  {contract.businessId
                    ? contract.businessId.name
                    : contract.workerId.name}
                </TableCell>
                <TableCell align="left">
                  {contract.businessId
                    ? contract.businessId.email
                    : contract.workerId.email}
                </TableCell>
                <TableCell align="left">
                  {contract.businessId
                    ? contract.businessId.userType
                    : contract.workerId.userType}
                </TableCell>

                <TableCell align="left">{'Pending'}</TableCell>

                <TableCell
                  padding="none"
                  align="left"
                  style={{ paddingLeft: 5 }}
                >
                  <IconButton type="button" onClick={handleOpen} size="large">
                    <NotificationsIcon className={classes.buttonProperties} />
                  </IconButton>
                  <ContractsRequestedInfoModal
                    displayModal={displayModal}
                    closeModal={() => setDisplayModal(false)}
                    contractId={contractId}
                    contract={contract}
                    sendBackContract={sendBackContract}
                  />
                </TableCell>
                {/*
                <TableCell
                  padding="none"
                  align="left"
                  style={{ paddingLeft: 36 }}
                >
                  <IconButton
                    aria-label="decline contract"
                    color="secondary"
                    onClick={() =>
                      sendBackContract(
                        contractId,
                        contract.businessId
                          ? contract.businessId._id
                          : contract.workerId._id,
                        contract.formId
                      )
                    }
                  >
                    <ArrowBackIcon />
                  </IconButton>
                </TableCell>
                <TableCell
                  padding="none"
                  align="left"
                  style={{ paddingLeft: 16 }}
                >
                  <IconButton
                    aria-label="decline contract"
                    color="secondary"
                    onClick={() =>
                      declineContract(
                        contractId,
                        contract.businessId
                          ? contract.businessId._id
                          : contract.workerId._id,
                        contract.formId
                      )
                    }
                  >
                    <ClearIcon />
                  </IconButton>
                </TableCell>
                  */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const accordionView = () => {
    return contracts.map((contract: any) => (
      <div key={contract._id} className={classes.accordionDiv}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {contract.businessId
                ? contract.businessId.name
                : contract.workerId.name}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography className={classes.description}>
              Email:{' '}
              {contract.businessId
                ? contract.businessId.email
                : contract.workerId.email}
            </Typography>
          </AccordionDetails>

          <AccordionDetails>
            <Typography className={classes.description}>
              Type:{' '}
              {contract.businessId
                ? contract.businessId.userType
                : contract.workerId.userType}
            </Typography>
          </AccordionDetails>

          <AccordionDetails className={classes.description}>
            <Typography className={classes.description}>
              Status: Made
            </Typography>
          </AccordionDetails>

          <AccordionActions>
            <Tooltip title="Info" placement="top" arrow>
              <IconButton type="button" onClick={handleOpen} size="large">
                <NotificationsIcon className={classes.buttonProperties} />
              </IconButton>
            </Tooltip>

            <ContractsRequestedInfoModal
              displayModal={displayModal}
              closeModal={() => setDisplayModal(false)}
              contract={contract}
            />

            <Tooltip title="Send back" placement="top" arrow>
              <IconButton
                aria-label="Send back"
                color="secondary"
                onClick={() =>
                  sendBackContract(
                    contractId,
                    contract.businessId._id,
                    contract.formId
                  )
                }
                size="large">
                <ArrowBackIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Decline contract" placement="top" arrow>
              <IconButton
                aria-label="decline contract"
                color="secondary"
                onClick={() =>
                  declineContract(
                    contractId,
                    contract.businessId
                      ? contract.businessId._id
                      : contract.workerId._id,
                    contract.formId
                  )
                }
                size="large">
                <ClearIcon />
              </IconButton>
            </Tooltip>
          </AccordionActions>
        </Accordion>
      </div>
    ));
  };

  if (!contracts)
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
  else return <>{matches ? accordionView() : tableView()}</>;
};

export default ContractsRequestedTable;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      paddingLeft: '0.5em',
      paddingRight: '0.5em',
      padding: theme.spacing(1),
    },
    buttonProperties: {
      color: '#f50057',
    },
    companyHeader: {
      textAlign: 'center',
    },
    accordionDiv: {
      width: '100%',
      marginTop: 12,
      border: '1px solid #E0E0E0',
      borderRadius: 5,
    },
    heading: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightRegular,
    },
    description: {
      fontSize: theme.typography.pxToRem(13),
      color: '#6C6C6C',
      marginTop: 0,
    },
  })
);
