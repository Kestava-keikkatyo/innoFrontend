import React from "react";
import { 
    Typography, TableContainer, TableHead, TableCell,
    Table, TableRow, TableBody, IconButton  
} from "@material-ui/core";
import NotificationsIcon from '@material-ui/icons/Notifications';
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";

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
                <TableCell align="center">Accept</TableCell>
                <TableCell align="center">Info</TableCell>
                <TableCell align="center">Decline</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contracts.map((contract: any) => (
                <TableRow key={contract._id}>
                  <TableCell padding="none" align="center">
                    <IconButton
                      aria-label="accept contract"
                      color="secondary"
                      onClick={() => acceptContract(contractId, contract.businessId._id, contract.formId)}
                    >
                      <DoneIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      aria-label="remove from organization"
                      color="secondary"
                      onClick={() => {console.log(contract.formId)}}
                    >
                      <NotificationsIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell padding="none" align="center">
                    <IconButton
                      aria-label="decline contract"
                      color="secondary"
                      onClick={() => declineContract(contractId, contract.businessId._id)}
                    >
                      <ClearIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">{contract.businessId.name}</TableCell>
                  <TableCell align="right">{contract.businessId.email}</TableCell>
                  <TableCell align="right">{contract.businessId.userType}</TableCell>
                  <TableCell align="right">{"Pending"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )
}

export default RCTable
