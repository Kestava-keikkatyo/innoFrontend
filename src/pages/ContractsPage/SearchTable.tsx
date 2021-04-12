import React from 'react'

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography
} from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { IRootState } from '../../utils/store'

/**
 * @component
 * @desc A table to search worker users to create new business contract.
 * @param props
 * @param {Function} props.addWorker add button click listener function,
 * which passes workers data to parent component state.
 */
const SearchTable: React.FC<any> = ({ addWorker }) => {
  const { searchList } = useSelector((state: IRootState) => state.businessContracts)
  const workers = searchList

  if(!workers.length) return (
    <Typography style={{ padding: '1rem' }} variant="h6" align="center" className="text-secondary">
      no results
    </Typography>
  )

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
            <TableRow key={worker._id}>
              <TableCell component="th" scope="row">{worker._id}</TableCell>
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