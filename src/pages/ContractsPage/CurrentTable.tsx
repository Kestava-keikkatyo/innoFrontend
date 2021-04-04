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
import { setAlert } from '../../actions/alertActions'
import { IRootState } from '../../utils/store'

/**
 * @component
 * @desc A table to show all active business contracts.
 * @todo make table responsive
 */
const SearchTable = () => {
  const { madeContracts } = useSelector((state: IRootState) => state.businessContracts)
  const dispatch = useDispatch()
  const contracts = madeContracts

  useEffect(() => {
    if(!madeContracts.length)
      dispatch(fetchBusinessContracts())
  }, [dispatch, madeContracts.length])

  const deleteContract = (id: string, name: string) => {
    dispatch(deleteBusinessContractById(id))
    dispatch(setAlert("Deleted "+name+" contract."))
  }

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
          {contracts.map((contract: any) => (
            <TableRow key={contract._id}>
              <TableCell component="th" scope="row">{contract._id}</TableCell>
              <TableCell align="right">{contract.user?.name || contract.business?.name}</TableCell>
              <TableCell align="right">{contract.user?.email || contract.business?.email}</TableCell>
              <TableCell align="right">{contract.contractType}</TableCell>
              <TableCell align="right">{contract.contractMade ? 'made': 'pending'}</TableCell>
              <TableCell padding="none" align="right">
                <IconButton
                  aria-label="remove from organization"
                  color="secondary"
                  onClick={() => deleteContract(contract._id, contract.user?.name || contract.business?.name)}>
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