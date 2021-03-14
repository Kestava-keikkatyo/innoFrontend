import React, { useEffect } from 'react'

import { Button, Container, Typography } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import Spacing from '../../components/Spacing';
import { formatDate } from '../../utils/dateUtils';
import { activateBusinessContract, fetchBusinessContracts } from '../../actions/businessContractActions';
import { fetchWorkContracts } from '../../actions/workContractActions';

const DocumentHome = () => {
  const businessContracts = useSelector(state => state.businessContracts.madeContracts)
  const workContracts = useSelector(state => state.workContracts.madeContracts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBusinessContracts())
    dispatch(fetchWorkContracts())
  }, [dispatch])

  //id	Name	Email	Type	Status
  const workColumns = [
    // { field: 'id', headerName: 'ID', width: 250 },
    { field: 'createdAt', headerName: 'Created at', width: 250 },
    { field: 'agency', headerName: 'Agency', width: 250 },
    { field: 'business', headerName: 'Business', width: 250, },
    { field: 'user', headerName: 'User', width: 250, },
    { 
      field: 'validityPeriod',
      headerName: 'Validity Period',
      width: 200,
      renderCell: (params) => 
      <>
        {formatDate(params.getValue('validityPeriod'))}
      </>
      },
  ];
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'createdAt', headerName: 'Created at', width: 130 },
    { field: 'agency', headerName: 'agency', width: 130 },
    { field: 'user', headerName: 'user', width: 90, },
    { field: 'contractType', headerName: 'Type', width: 90, },
    { field: 'contractMade', headerName: 'Valid', width: 150, },
    {
      field: 'activate',
      headerName: 'Add contract',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => 
      <>
        {!params.getValue('contractMade') &&
        <Button 
        onClick={() => dispatch(activateBusinessContract(params.getValue('id')))}
        variant="contained" >
          Activate
        </Button>}
      </>
    },
  ];

  return (
    <Container>
      <Typography variant="h4" color="secondary">Documents</Typography>
      <Typography variant="h5" color="textSecondary">Business contracts</Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={businessContracts} columns={columns} pageSize={5} />
      </div>
      <Spacing mv4/>
      <Typography variant="h5" color="textSecondary">Work contracts</Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={workContracts} columns={workColumns} pageSize={5} />
      </div>
    </Container>
  )
}

export default DocumentHome
