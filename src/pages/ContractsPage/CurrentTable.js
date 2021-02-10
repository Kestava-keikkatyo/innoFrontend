import React from 'react'

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton
} from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'

const SearchTable = ({ contracts, removeContract }) => {
  return (
    <TableContainer>
      <Table aria-label="searched workers">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">accepted</TableCell>
            <TableCell align="right">remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contracts.map((contract) => (
            <TableRow key={contract.id}>
              <TableCell component="th" scope="row">{contract.id}</TableCell>
              <TableCell align="right">{contract.name}</TableCell>
              <TableCell align="right">{contract.email}</TableCell>
              <TableCell align="right">false</TableCell>
              <TableCell padding="none" align="right">
                <IconButton
                  aria-label="remove from organization"
                  color="secondary"
                  onClick={() => removeContract(contract.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SearchTable