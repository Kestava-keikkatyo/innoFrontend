import React, { useEffect } from 'react'

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
import { Delete as DeleteIcon } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBusinessContractById, fetchBusinessContracts } from '../../actions/businessContractActions'

/**
 * 
 * @param {*} param0 
 * @todo make table responsive
 */
const SearchTable = () => {
  const { madeContracts } = useSelector(state => state.businessContracts)
  const dispatch = useDispatch()
  const contracts = madeContracts

  useEffect(() => {
    if(!madeContracts.length)
      dispatch(fetchBusinessContracts())
  }, [dispatch, madeContracts.length])

  if(!contracts.length) return (
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
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contracts.map((contract) => (
            <TableRow key={contract.id}>
              <TableCell component="th" scope="row">{contract.id}</TableCell>
              <TableCell align="right">{contract.name}</TableCell>
              <TableCell align="right">{contract.email}</TableCell>
              <TableCell align="right">{contract.type}</TableCell>
              <TableCell align="right">{contract.contractMade ? 'made': 'pending'}</TableCell>
              <TableCell padding="none" align="right">
                <IconButton
                  aria-label="remove from organization"
                  color="secondary"
                  onClick={() => dispatch(deleteBusinessContractById(contract.id))}>
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