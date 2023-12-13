import { DataGrid, GridColumns } from '@mui/x-data-grid'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { IRootState } from '../../utils/store'
import { useDispatch, useSelector } from 'react-redux'
import makeStyles from '@mui/styles/makeStyles'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import {
  deleteContractById,
  deleteEmploymentContractAsWorkerOrBusiness,
  fetchEmploymentContractsAsWorkerOrBusiness,
} from '../../actions/contractActions'
import { useEffect } from 'react'
import { setAlert } from '../../actions/alertActions'
import { severity } from '../../types/types'
import { createTheme, ThemeProvider } from '@mui/material'
import DeleteDialogItem from '../../components/DeleteDialogItem'

const AgencyWorkers: React.FC = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const dispatch = useDispatch()
  const contracts = useSelector((state: any) => state.employmentAgreements.agreements)
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [contractToDelete, setContractToDelete] = React.useState('')

  const handleCloseDialog = (businessId: string) => {
    setContractToDelete(businessId)
    setDialogOpen(false)
  }

  const deleteContract = (contractId: string) => {
    dispatch(deleteEmploymentContractAsWorkerOrBusiness(contractId))
    setContractToDelete('')
    for (const contract of contracts) {
      if (contract.worker._id === contractId) {
        dispatch(setAlert('Failure: Contract not deleted!', severity.Error, 3))
        break
      }
    }
    dispatch(setAlert(i18next.t('contract_deleted_alert'), severity.Success))
  }

  useEffect(() => {
    dispatch(fetchEmploymentContractsAsWorkerOrBusiness())
  }, [dispatch])

  useEffect(() => {
    if (contractToDelete) {
      deleteContract(contractToDelete)
    }
  }, [contractToDelete])

  const rows = contracts

  const columns: GridColumns = [
    {
      field: 'name',
      headerName: i18next.t('list_name'),
      minWidth: 160,
      flex: 1,
      headerClassName: 'super-app-theme--header',
      renderCell: (params) => {
        return (
          <div className={classes.userListUser}>
            <img className={classes.userListImg} src={params.row.profilePicture} alt='' />
            <Link className={classes.link} to={'/workers/profile/' + params.row.worker._id}>
              {params.row.worker.firstName} {params.row.worker.lastName}
            </Link>
          </div>
        )
      },
    },
    {
      field: 'email',
      headerName: i18next.t('list_email'),
      minWidth: 200,
      flex: 1,
      headerClassName: 'super-app-theme--header',
      renderCell: (params) => {
        return <Typography className={classes.tableCellText}>{params.row.worker.email}</Typography>
      },
    },
    /*
    {
      field: 'city', 
      headerName: (i18next.t('list_city')), 
      width: 200 
    },
    */
    {
      field: 'delete',
      headerName: i18next.t('delete'),
      minWidth: 20,
      flex: 1,
      headerClassName: 'super-app-theme--header',
      renderCell: (params) => {
        return (
          <DeleteDialogItem
            title={t('list_delete_connection')}
            itemId={params.id}
            onConfirm={handleCloseDialog}
          />
        )
      },
    },
  ]

  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: '75vh', width: '100%', padding: '0 1rem' }}>
        <div>
          <Typography
            variant='h6'
            style={{ marginBottom: '20px', marginTop: '30px', fontWeight: 'bold' }}
          >
            {t('list_title_workers')}
          </Typography>
        </div>
        <DataGrid
          sx={{
            '& .super-app-theme--header': {
              backgroundColor: '#C0CFFA',
              borderRight: '3px solid white',
            },
            '.MuiDataGrid-columnSeparator': {
              display: 'none',
            },
            '&.MuiDataGrid-root': {
              border: 'none',
            },
          }}
          style={{ marginTop: '20px', border: '3px solid #C0CFFA', borderRadius: '0' }}
          getRowId={(row) => row._id}
          rows={rows}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </ThemeProvider>
  )
}

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, serif',
    fontSize: 15,
    allVariants: {
      color: 'black',
    },
  },
})

const useStyles = makeStyles(() => ({
  title: {
    marginTop: '25px',
    marginBottom: '15px',
  },
  userListUser: {
    display: 'flex',
    alignItems: 'center',
  },
  userListImg: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '10px',
  },
  link: {
    color: '#000000',
  },
  tableCellText: {
    fontFamily: 'Montserrat,serif',
    fontWeight: '400',
    fontSize: '15',
    lineHeight: '1.43',
  },
}))

export default AgencyWorkers
