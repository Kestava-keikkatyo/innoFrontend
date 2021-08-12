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
  createStyles,
  makeStyles,
  Theme,
  useMediaQuery,
  useTheme,
  Tooltip,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import InfoModal from './InfoModal';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useTranslation } from 'react-i18next'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const RCTable = (prop: {
  contracts: [];
  contractId: string;
  acceptContract: Function;
  declineContract: Function;
  sendBackContract: Function;
}) => {
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const [displayModal, setDisplayModal] = React.useState(false);
  const { t } = useTranslation()

  const handleOpen = () => {
    setDisplayModal(true);
  };

  const {
    contracts,
    contractId,
    acceptContract,
    declineContract,
    sendBackContract,
  } = prop;

  const tableView = () => {
    return (
      <TableContainer>
        <Table aria-label="searched workers">
          <TableHead>
            <TableRow>
              <TableCell align="left">{t("name")}</TableCell>
              <TableCell align="left">{t("email")}</TableCell>
              <TableCell align="left">{t("role")}</TableCell>
              <TableCell align="left">{t("status")}</TableCell>
              <TableCell align="left">{t("accept")}</TableCell>
              <TableCell align="left">{t("info")}</TableCell>
              <TableCell align="left">{t("send_back")}</TableCell>
              <TableCell align="left">{t("decline")}</TableCell>
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
                  style={{ paddingLeft: 12 }}
                >
                  <IconButton
                    aria-label="accept contract"
                    color="secondary"
                    onClick={() =>
                      acceptContract(
                        contractId,
                        contract.businessId
                          ? contract.businessId._id
                          : contract.workerId._id,
                        contract.formId
                      )
                    }
                  >
                    <DoneIcon />
                  </IconButton>
                </TableCell>

                <TableCell
                  padding="none"
                  align="left"
                  style={{ paddingLeft: 5 }}
                >
                  <IconButton type="button" onClick={handleOpen}>
                    <NotificationsIcon className={classes.buttonProperties} />
                  </IconButton>
                  <InfoModal
                    displayModal={displayModal}
                    closeModal={() => setDisplayModal(false)}
                    contract={contract}
                  />
                </TableCell>
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
                          : contract.workerId._id
                      )
                    }
                  >
                    <ClearIcon />
                  </IconButton>
                </TableCell>
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
            <Tooltip title="Accept contract" placement="top" arrow>
              <IconButton
                aria-label="Accept contract"
                color="secondary"
                onClick={() =>
                  acceptContract(
                    contractId,
                    contract.businessId
                      ? contract.businessId._id
                      : contract.workerId._id,
                    contract.formId
                  )
                }
              >
                <DoneIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Info" placement="top" arrow>
              <IconButton type="button" onClick={handleOpen}>
                <NotificationsIcon className={classes.buttonProperties} />
              </IconButton>
            </Tooltip>

            <InfoModal
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
              >
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
                      : contract.workerId._id
                  )
                }
              >
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
        no results
      </Typography>
    );
  else return <>{matches ? accordionView() : tableView()}</>;
};

export default RCTable;

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
