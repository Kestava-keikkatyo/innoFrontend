import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  declineBusinessContract,
  acceptBusinessContract,
} from "../../actions/businessContractActions";
import { setAlert } from "../../actions/alertActions";
import { severity } from "../../types/types";
import ContractsReceivedTable from "./ContractsReceivedTable";
import ContractsSendTable from "./ContractsSendTable";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0),
    width: "100%",
  },
}));

interface BusinessContractObject {
  _id: string;
  receivedContracts: {
    businesses: [];
    workers: [];
  };
  madeContracts: {
    businesses: [];
    workers: [];
  };
}

const ContractsFromBusiness = (props: {
  businessContract: BusinessContractObject[];
}) => {
  const { businessContract } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const contracts = businessContract;

  const acceptContract = (
    contractId: string,
    userId: string,
    formId: string
  ) => {
    dispatch(acceptBusinessContract(contractId, userId, formId));
    dispatch(setAlert("Contract accepted.", severity.Info, 3));
  };

  const declineContract = (contractId: string, userId: string) => {
    dispatch(declineBusinessContract(contractId, userId));
    dispatch(setAlert("Contract declined.", severity.Info, 3));
  };

  if (
    contracts[0].receivedContracts.businesses === undefined ||
    !contracts.length
  )
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
                  Saapuneet sopimukset
                </Typography>
                <Divider />
                <Typography gutterBottom variant="h6">
                  Businesses
                </Typography>
                <Divider />
                <ContractsReceivedTable
                  contracts={contracts[0].receivedContracts.businesses}
                  contractId={businessContract[0]._id}
                  acceptContract={acceptContract}
                  declineContract={declineContract}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    );
};

export default ContractsFromBusiness;
