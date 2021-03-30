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
import { deleteWorkContractById, fetchWorkContracts } from '../../actions/workContractActions'
import { setAlert } from '../../actions/alertActions'
import { IRootState } from '../../utils/store'

/**
 * @component
 * @desc A table to show all active work contracts.
 * @todo make table responsive
 */
const CurrentWorkerTable = () => {
  const { madeContracts } = useSelector((state: IRootState) => state.workContracts)
  const dispatch = useDispatch()
  const contracts = madeContracts

  useEffect(() => {
    if(!madeContracts.length)
      dispatch(fetchWorkContracts())
  }, [dispatch, madeContracts.length])

  const deleteContract = (id: any) => {
    dispatch(deleteWorkContractById(id))
    dispatch(setAlert("Deleted "+id+" contract."))
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
            <TableCell align="right">Created at</TableCell>
            <TableCell align="right">Business</TableCell>
            <TableCell align="right">User</TableCell>
            <TableCell align="right">Validity Period</TableCell>
            <TableCell align="right">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contracts.map((contract: any) => (
            <TableRow key={contract._id}>
              <TableCell component="th" scope="row">{contract._id}</TableCell>
              <TableCell align="right">{contract.createdAt}</TableCell>
              <TableCell align="right">{contract.business}</TableCell>
              <TableCell align="right">{contract.user}</TableCell>
              <TableCell align="right">{contract.validityPeriod}</TableCell>
              <TableCell padding="none" align="right">
                <IconButton
                  aria-label="remove from organization"
                  color="secondary"
                  onClick={() => deleteContract(contract._id)}>
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

export default CurrentWorkerTable