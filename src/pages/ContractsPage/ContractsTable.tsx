import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../utils/store";
import { Typography, Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import {
  rejectContract,
  acceptContractFromBusiness,
  acceptContractFromWorker,
  sendBackContract,
} from '../../actions/contractActions';
import { setAlert } from '../../actions/alertActions';
import { severity } from '../../types/types';
import ContractsReceivedTable from './ContractsReceivedTable';
import ContractsSendTable from './ContractsSendTable';
import ContractsMadeTable from './ContractsMadeTable';
import { useTranslation } from 'react-i18next';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  IconButton,
  useMediaQuery,
  useTheme,
  Theme,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { deleteBusinessContractForm } from '../../actions/businessContractFormActions';

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
  tableDiv: {
    width: '100%'
  }
}));

interface BusinessContractObject {
  _id: string;
  status: string;
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
const ContractsTable: React.FC<any> = ({ businessContract }) => {
  const profileData: any = useSelector((state: IRootState) => state.users.currentUser);

  const classes = useStyles();
  const dispatch = useDispatch();
  const contracts = businessContract;
  const { t } = useTranslation();
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  console.log({contracts})

  const acceptContractFromBusiness = (
    contractId: string,
    userId: string,
    formId: string
  ) => {
    dispatch(acceptContractFromBusiness(contractId, userId, formId));
    dispatch(setAlert('Contract from Business accepted.', severity.Info, 3));
  };

  const acceptContractFromWorker = (
    contractId: string,
    userId: string,
    formId: string
  ) => {
    dispatch(acceptContractFromWorker(contractId, userId, formId));
    dispatch(setAlert('Contract from Worker accepted.', severity.Info, 3));
  };

  const declineContract = (
    contractId: string,
    userId: string,
    formId: string
  ) => {
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

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  const temp = (contract: any) => {
    console.log('action', contract)
  }

  // Table view for desktop devices
  const tableView = () => {
    return (
      <div className={classes.tableDiv}>
      <TableContainer>
        <Table aria-label="searched workers">
          <TableHead>
            <TableRow>
              <TableCell align="left">{t("status")}</TableCell>
              <TableCell align="left">{t("name")}</TableCell>
              <TableCell align="left">{t("title")}</TableCell>
              <TableCell align="left">{t("action")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {businessContract */}
            {contracts
            // {contractsTest
              // .filter((workerOrBusiness: any) =>
              //   workerOrBusiness.name
              //     .toLowerCase()
              //     .includes(filter.toLowerCase())
              // )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((contract: any) => (
                <TableRow key={contract._id}>
                  <TableCell component="th" scope="row" align="left">
                    {contract.status}
                  </TableCell>
                  <TableCell align="left">{contract.target.name}</TableCell>
                  <TableCell align="left">{contract.form ? contract.form[0].title : ''}</TableCell>
                  {/* <TableCell align="left">contract.form.title</TableCell> */}
                  <TableCell
                    padding="none"
                    align="left"
                    style={{ paddingLeft: 5 }}
                  >
                    <IconButton
                      aria-label="add to organization"
                      color="secondary"
                      onClick={() => temp(contract)}
                      size="large">
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={businessContract.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </div>
    );
  };

  if (contracts[0] === undefined || !contracts.length) {
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
  }
  else return tableView()

    // Here below is the old, more complicated presentation. Saved for reference.
    //

    // return <>
    //   <Grid
    //     container
    //     direction="column"
    //     spacing={1}
    //     justifyContent="center"
    //     alignItems="stretch"
    //   >
    //     <Grid item xs={12}>
    //       <Accordion className={classes.card} variant="outlined">
    //         <AccordionSummary
    //           expandIcon={<ExpandMoreIcon />}
    //           aria-controls="panel1a-content"
    //           id="panel1a-header"
    //         >
    //           <Typography gutterBottom variant="h5">
    //             {t('sent_contracts')}
    //           </Typography>
    //         </AccordionSummary>

    //         <AccordionDetails>
    //           <Accordion className={classes.accordion} variant="outlined">
    //             <AccordionSummary
    //               expandIcon={<ExpandMoreIcon />}
    //               aria-controls="panel1a-content"
    //               id="panel1a-header"
    //             >
    //               <Typography gutterBottom variant="h6">
    //                 {t('businesses')}
    //               </Typography>
    //             </AccordionSummary>
    //             <AccordionDetails>
    //               <ContractsSendTable
    //                 contracts={contracts[0]?.pendingContracts?.businesses}
    //                 contractId={businessContract[0]._id}
    //                 declineContract={declineContract}
    //               />
    //             </AccordionDetails>
    //           </Accordion>
    //         </AccordionDetails>

    //         <AccordionDetails>
    //           <Accordion className={classes.accordion} variant="outlined">
    //             <AccordionSummary
    //               expandIcon={<ExpandMoreIcon />}
    //               aria-controls="panel1a-content"
    //               id="panel1a-header"
    //             >
    //               <Typography gutterBottom variant="h6">
    //                 {t('workers')}
    //               </Typography>
    //             </AccordionSummary>
    //             <AccordionDetails>
    //               <ContractsSendTable
    //                 contracts={contracts[0]?.pendingContracts?.workers}
    //                 contractId={businessContract[0]._id}
    //                 declineContract={declineContract}
    //               />
    //             </AccordionDetails>
    //           </Accordion>
    //         </AccordionDetails>
    //       </Accordion>
    //     </Grid>
    //     <Grid item xs={12}>
    //       <Accordion className={classes.card} variant="outlined">
    //         <AccordionSummary
    //           expandIcon={<ExpandMoreIcon />}
    //           aria-controls="panel1a-content"
    //           id="panel1a-header"
    //         >
    //           <Typography gutterBottom variant="h5">
    //             {t('waiting_contracts')}
    //           </Typography>
    //         </AccordionSummary>

    //         <AccordionDetails>
    //           <Accordion className={classes.accordion} variant="outlined">
    //             <AccordionSummary
    //               expandIcon={<ExpandMoreIcon />}
    //               aria-controls="panel1a-content"
    //               id="panel1a-header"
    //             >
    //               <Typography gutterBottom variant="h6">
    //                 {t('businesses')}
    //               </Typography>
    //             </AccordionSummary>
    //             <AccordionDetails>
    //               <ContractsReceivedTable
    //                 contracts={contracts[0]?.requestContracts?.businesses}
    //                 contractId={businessContract[0]._id}
    //                 acceptContract={acceptContractFromBusiness}
    //                 declineContract={declineContract}
    //                 sendBackContract={sendBackContract}
    //               />
    //             </AccordionDetails>
    //           </Accordion>
    //         </AccordionDetails>

    //         <AccordionDetails>
    //           <Accordion className={classes.accordion} variant="outlined">
    //             <AccordionSummary
    //               expandIcon={<ExpandMoreIcon />}
    //               aria-controls="panel1a-content"
    //               id="panel1a-header"
    //             >
    //               <Typography gutterBottom variant="h6">
    //                 {t('workers')}
    //               </Typography>
    //             </AccordionSummary>
    //             <AccordionDetails>
    //               <ContractsReceivedTable
    //                 contracts={contracts[0]?.requestContracts?.workers}
    //                 contractId={businessContract[0]._id}
    //                 acceptContract={acceptContractFromWorker}
    //                 declineContract={declineContract}
    //                 sendBackContract={sendBackContract}
    //               />
    //             </AccordionDetails>
    //           </Accordion>
    //         </AccordionDetails>
    //       </Accordion>
    //     </Grid>
    //     <Grid item xs={12}>
    //       <Accordion className={classes.card} variant="outlined">
    //         <AccordionSummary
    //           expandIcon={<ExpandMoreIcon />}
    //           aria-controls="panel1a-content"
    //           id="panel1a-header"
    //         >
    //           <Typography gutterBottom variant="h5">
    //             {t('done_contracts')}
    //           </Typography>
    //         </AccordionSummary>

    //         <AccordionDetails>
    //           <Accordion className={classes.accordion} variant="outlined">
    //             <AccordionSummary
    //               expandIcon={<ExpandMoreIcon />}
    //               aria-controls="panel1a-content"
    //               id="panel1a-header"
    //             >
    //               <Typography gutterBottom variant="h6">
    //                 {t('businesses')}
    //               </Typography>
    //             </AccordionSummary>
    //             <AccordionDetails>
    //               <ContractsMadeTable
    //                 contracts={contracts[0]?.madeContracts?.businesses}
    //                 contractId={businessContract[0]._id}
    //               />
    //             </AccordionDetails>
    //           </Accordion>
    //         </AccordionDetails>

    //         <AccordionDetails>
    //           <Accordion className={classes.accordion} variant="outlined">
    //             <AccordionSummary
    //               expandIcon={<ExpandMoreIcon />}
    //               aria-controls="panel1a-content"
    //               id="panel1a-header"
    //             >
    //               <Typography gutterBottom variant="h6">
    //                 {t('workers')}
    //               </Typography>
    //             </AccordionSummary>
    //             <AccordionDetails>
    //               <ContractsMadeTable
    //                 contracts={contracts[0]?.madeContracts?.workers}
    //                 contractId={businessContract[0]._id}
    //               />
    //             </AccordionDetails>
    //           </Accordion>
    //         </AccordionDetails>
    //       </Accordion>
    //     </Grid>
    //   </Grid>
    // </>;
};

export default ContractsTable;
