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
import RCTable from "./RCTable"
import MCTable from "./MCTable"

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0),
    
  },
}));

interface BusinessContractObject {
  _id: string
  requestContracts: {
    businesses: []
    workers: []
  }
  madeContracts: {
    businesses: []
    workers: []
  }
  pendingContracts: {
    businesses: []
    workers: []
  }
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
const ContractsTable = (props: { businessContract: BusinessContractObject[] }) => {
  const { businessContract } = props 
  const classes = useStyles()
  const dispatch = useDispatch()
  const contracts = businessContract

  const acceptContract = (contractId: string, userId: string, formId:string) => {
    dispatch(acceptBusinessContract(contractId, userId, formId))
    dispatch(setAlert("Contract accepted.", severity.Info, 3))
  }

  const declineContract = (contractId: string, userId: string) => {
    dispatch(declineBusinessContract(contractId, userId))
    dispatch(setAlert("Contract declined.", severity.Info, 3))
  }

  if (contracts[0] === undefined || !contracts.length)
    return (
      <Typography
        style={{ padding: "1rem" }}
        variant="h6"
        align="center"
        className="text-secondary"
      >
        no results
      </Typography>
    )
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
                  contractId={businessContract[0]._id}
                  declineContract={declineContract}
                />
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Workers
                </Typography>
                <Divider />
                <MCTable
                  contracts={contracts[0].pendingContracts.workers}
                  contractId={businessContract[0]._id}
                  declineContract={declineContract}
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
                  contractId={businessContract[0]._id}
                  declineContract={declineContract}
                />
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Workers
                </Typography>
                <Divider />
                <MCTable
                  contracts={contracts[0].madeContracts.workers}
                  contractId={businessContract[0]._id}
                  declineContract={declineContract}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    )
}

export default ContractsTable
