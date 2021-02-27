import React, { useEffect } from 'react'

import { Button, Container, Typography } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { activateBusinessContract, fetchDocuments } from '../../actions/documentActions';
import Spacing from '../../components/Spacing';

const DocumentHome = () => {
  const { businessContracts } = useSelector(state => state.document)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDocuments())
  }, [dispatch])

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

  console.log(businessContracts);
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
        <DataGrid rows={businessContracts} columns={columns} pageSize={5} />
      </div>
    </Container>
  )
}

export default DocumentHome
