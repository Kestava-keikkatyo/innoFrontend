import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../utils/store";
import { Typography, Grid, Tooltip } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import {
  declineBusinessContract,
  acceptBusinessContractFromBusiness,
  acceptBusinessContractFromWorker,
  sendBackBusinessContract,
  deleteBusinessContractById,
  deleteEmploymentAgreement,
  fetchEmploymentContractsAsAgency,
} from '../../actions/businessContractActions';
import { setAlert } from '../../actions/alertActions';
import { severity } from '../../types/types';
import { useTranslation } from 'react-i18next';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  IconButton
} from '@mui/material';
import { 
  Delete as DeleteIcon, 
  Check as SignedIcon,
  DoneAll as AllSignedIcon,
  HourglassEmpty as PendingIcon
} from '@mui/icons-material';
import { green, red, yellow } from '@mui/material/colors';

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

/**
 * @component
 * @description
 * - Returns Grid with all employment proposals that agency has created
 * @returns Grid
 */
const EmploymentContractsTable: React.FC<any> = ({ employmentContracts }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const contracts = employmentContracts;
  const { t } = useTranslation();
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const deleteContract = (contractId: string) => {
    dispatch(deleteEmploymentAgreement(contractId));
    dispatch(setAlert('Contract deleted.', severity.Info, 3));
  };

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  useEffect(() => {
    dispatch(fetchEmploymentContractsAsAgency());
  }, [dispatch]);

  // Table view for desktop devices
  const tableView = () => {
    return (
      <div className={classes.tableDiv}>
        <TableContainer>
          <Table aria-label="searched workers">
            <TableHead>
              <TableRow>
                <TableCell align="left">{t("status")}</TableCell>
                <TableCell align="left">{t("business_name")}</TableCell>
                <TableCell align="left">{t("business_signed")}</TableCell>
                <TableCell align="left">{t("worker_email")}</TableCell>
                <TableCell align="left">{t("worker_signed")}</TableCell>
                <TableCell align="left">{t("action")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
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
                      {contract.status === "signed" &&
                        <><Tooltip title="Each recipient has signed" placement="top" arrow>
                            <AllSignedIcon sx={{ color: green[500] }} />
                        </Tooltip></>}
                      {contract.status === "pending" && 
                        <><Tooltip title="Pending until each recipient has signed" placement="top" arrow>
                            <PendingIcon sx={{ color: yellow[800] }} />
                        </Tooltip></>}
                    </TableCell>

                    <TableCell align="left">
                      {contract.business.companyName}
                    </TableCell>

                    <TableCell align="left">
                      {contract.businessSigned &&
                        <><Tooltip title="Signed" placement="top" arrow>
                      <SignedIcon sx={{ color: green[500] }} />
                    </Tooltip></>}
                      {!contract.businessSigned && 
                        <><Tooltip title="Pending" placement="top" arrow>
                            <PendingIcon sx={{ color: yellow[800] }} />
                        </Tooltip></>}
                    </TableCell>

                    <TableCell align="left">
                      {contract.worker.email}
                    </TableCell>

                    <TableCell align="left">
                      {contract.workerSigned &&
                        <><Tooltip title="Signed" placement="top" arrow>
                        <SignedIcon sx={{ color: green[500] }} />
                      </Tooltip></>}
                      {!contract.workerSigned && 
                        <><Tooltip title="Pending" placement="top" arrow>
                            <PendingIcon sx={{ color: yellow[800] }} />
                        </Tooltip></>}
                    </TableCell>

                    <TableCell padding="none" align="left" style={{ paddingLeft: 5 }}>
                      <Tooltip title="Delete and remove connection between recipients" placement="top" arrow>
                        <IconButton
                          aria-label="delete contract"
                          color="secondary"
                          onClick={() => deleteContract(contract._id)}
                          size="large">
                            <DeleteIcon sx={{ color: red[500] }}/>
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={employmentContracts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    );
  };

  // if no contracts or an empty result "docs: []"
  if (!contracts || contracts.docs) {
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

};

export default EmploymentContractsTable;
