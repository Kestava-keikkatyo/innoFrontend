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
import { Add as AddIcon } from '@material-ui/icons'
import { useSelector } from 'react-redux'

const SearchTable: React.FC<any> = ({ addWorker }) => {
  const workers = useSelector((state: any) => state.workContracts.searchList)
  return (
    <TableContainer>
      <Table aria-label="searched workers">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">add</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workers.map((worker: any) => (
            <TableRow key={worker.id}>
              <TableCell component="th" scope="row">{worker.id}</TableCell>
              <TableCell align="right">{worker.name}</TableCell>
              <TableCell align="right">{worker.email}</TableCell>
              <TableCell padding="none" align="right">
                <IconButton
                  aria-label="add to organization"
                  color="secondary"
                  onClick={() => addWorker(worker)}>
                  <AddIcon />
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