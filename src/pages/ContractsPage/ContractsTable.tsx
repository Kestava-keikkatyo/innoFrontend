import React, { useEffect } from "react";

import {
  TableContainer,
  Table,
  IconButton,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBusinessContractById,
  fetchBusinessContracts,
  addBusinessContract,
  declineBusinessContract,
} from "../../actions/businessContractActions";
import { setAlert } from "../../actions/alertActions";
import { IRootState } from "../../utils/store";
import { severity } from "../../types/types";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0),
  },
}));

/**
 * @component
 * @description
 * - Returns Grid with two cards.
 * - Cards show Agency Made BusinessContracts and Requested BusinessContracts.
 * - Agency can accept BusinessContract from Requested BusinessContracts.
 * - If Agecy accepts BusinessContracts requested contracts moves to Made contracts.
 * @returns Grid
 */
const ContractsTable = () => {
  const { businessContract } = useSelector(
    (state: IRootState) => state.businessContracts
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const contracts = businessContract;

  useEffect(() => {
    dispatch(fetchBusinessContracts());
  }, [dispatch]);

  const deleteContract = (id: string, name: string) => {
    dispatch(deleteBusinessContractById(id));
    dispatch(setAlert("Deleted " + name + " contract.", severity.Info, 3));
  };

  const acceptContract = (contractId: string, userId: string) => {
    dispatch(addBusinessContract(contractId, userId));
    dispatch(setAlert("Contract accepted.", severity.Info, 3));
  };

  const declineContract = (contractId: string, userId: string) => {
    dispatch(declineBusinessContract(contractId, userId));
    dispatch(setAlert("Contract declined.", severity.Info, 3));
  };

  if (!contracts.length)
    return (
      <Typography
        style={{ padding: "1rem" }}
        variant="h6"
        align="center"
        className="text-secondary"
      >
        no results
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
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Lähetetyt sopimukset
                </Typography>
                <Typography gutterBottom variant="h6">
                  Businesses
                </Typography>
                <Divider />
                <MCTable
                  contracts={contracts[0].pendingContracts.businesses}
                  deleteContract={deleteContract}
                />
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Workers
                </Typography>
                <Divider />
                <MCTable
                  contracts={contracts[0].pendingContracts.workers}
                  deleteContract={deleteContract}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Saapuneet sopimukset
                </Typography>
                <Typography gutterBottom variant="h6">
                  Businesses
                </Typography>
                <Divider />
                <RCTable
                  contracts={contracts[0].requestContracts.businesses}
                  contractId={businessContract[0]._id}
                  acceptContract={acceptContract}
                  declineContract={declineContract}
                />
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Workers
                </Typography>
                <Divider />
                <RCTable
                  contracts={contracts[0].requestContracts.workers}
                  contractId={businessContract[0]._id}
                  acceptContract={acceptContract}
                  declineContract={declineContract}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Valmiit sopimukset
                </Typography>
                <Typography gutterBottom variant="h6">
                  Businesses
                </Typography>
                <Divider />
                <MCTable
                  contracts={contracts[0].madeContracts.businesses}
                  deleteContract={deleteContract}
                />
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Workers
                </Typography>
                <Divider />
                <MCTable
                  contracts={contracts[0].madeContracts.workers}
                  deleteContract={deleteContract}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
      </>
    );
};

const MCTable = (prop: { contracts: []; deleteContract: Function }) => {
  const { contracts, deleteContract } = prop;
  if (!contracts.length)
    return (
      <Typography
        style={{ padding: "1rem" }}
        variant="h6"
        align="center"
        className="text-secondary"
      >
        no results
      </Typography>
    );
  else
    return (
      <TableContainer>
        <Table aria-label="searched workers">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contracts.map((contract: any) => (
              <TableRow key={contract._id}>
                <TableCell component="th" scope="row">
                  {contract._id}
                </TableCell>
                <TableCell align="right">{contract.name}</TableCell>
                <TableCell align="right">{contract.email}</TableCell>
                <TableCell align="right">{contract.userType}</TableCell>
                <TableCell align="right">{"Made"}</TableCell>
                <TableCell padding="none" align="right">
                  <IconButton
                    aria-label="remove from organization"
                    color="secondary"
                    onClick={() => deleteContract(contract._id, contract.name)}
                  >
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

const RCTable = (prop: {
  contracts: [];
  contractId: string;
  acceptContract: Function;
  declineContract: Function;
}) => {
  const { contracts, contractId, acceptContract, declineContract } = prop;

  if (!contracts.length)
    return (
      <Typography
        style={{ padding: "1rem" }}
        variant="h6"
        align="center"
        className="text-secondary"
      >
        no results
      </Typography>
    );
  else
    return (
      <TableContainer>
        <Table aria-label="searched workers">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Accept</TableCell>
              <TableCell align="right">Decline</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contracts.map((contract: any) => (
              <TableRow key={contract._id}>
                <TableCell component="th" scope="row">
                  {contract._id}
                </TableCell>
                <TableCell align="right">{contract.name}</TableCell>
                <TableCell align="right">{contract.email}</TableCell>
                <TableCell align="right">{contract.userType}</TableCell>
                <TableCell align="right">{"Pending"}</TableCell>
                <TableCell padding="none" align="right">
                  <IconButton
                    aria-label="accept contract"
                    color="secondary"
                    onClick={() => acceptContract(contractId, contract._id)}
                  >
                    <DoneIcon />
                  </IconButton>
                </TableCell>
                <TableCell padding="none" align="right">
                  <IconButton
                    aria-label="decline contract"
                    color="secondary"
                    onClick={() => declineContract(contractId, contract._id)}
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

export default ContractsTable;
