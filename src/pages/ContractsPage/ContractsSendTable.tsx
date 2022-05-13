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
  useMediaQuery,
  useTheme,
  Tooltip,
  Theme,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/**
 * @component
 * @description
 * Currently not in use.
 *
 */
const ContractsSendTable = (prop: {
  contracts: [];
  declineContract: Function;
  contractId: string;
}) => {
  const { contracts, contractId, declineContract } = prop;

  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

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
              <TableCell align="left">{t('delete')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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

                <TableCell align="left">{'Made'}</TableCell>

                <TableCell
                  padding="none"
                  align="left"
                  style={{ paddingLeft: 16 }}
                >
                  <IconButton
                    aria-label="remove from organization"
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
                    <DeleteIcon />
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
            <Tooltip title="Remove" placement="top" arrow>
              <IconButton
                aria-label="remove from organization"
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
                <DeleteIcon />
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
export default ContractsSendTable;
