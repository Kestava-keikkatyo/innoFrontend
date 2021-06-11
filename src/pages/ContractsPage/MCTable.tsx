import React from "react"
import { 
  Typography, TableContainer, TableHead, TableCell,
  Table, TableRow, TableBody, IconButton  } 
from "@material-ui/core"
import { Delete as DeleteIcon } from "@material-ui/icons"

const MCTable = (prop: { contracts: []; declineContract: Function; contractId: string; }) => {
  const { contracts, contractId, declineContract } = prop
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
    )
  else
    return (
      <TableContainer>
        <Table aria-label="searched workers">
          <TableHead>
            <TableRow>
              <TableCell align="center">Remove</TableCell>
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
                    aria-label="remove from organization"
                    color="secondary"
                    onClick={() => declineContract(contractId, contract.businessId._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">{contract.businessId.name}</TableCell>
                <TableCell align="right">{contract.businessId.email}</TableCell>
                <TableCell align="right">{contract.businessId.userType}</TableCell>
                <TableCell align="right">{"Made"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}
export default MCTable