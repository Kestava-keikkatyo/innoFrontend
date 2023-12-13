import { DataGrid, GridColumns } from '@mui/x-data-grid'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { IRootState } from '../../utils/store'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAgencyContacts, fetchAllBusinesses } from '../../actions/usersActions'
import makeStyles from '@mui/styles/makeStyles'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { ThemeProvider, createTheme } from '@mui/material'
import DeleteDialogItem from '../../components/DeleteDialogItem'
import {
  deleteContractById,
  fetchContractsAsAgency,
  fetchContractsAsTarget,
} from '../../actions/contractActions'
import { setAlert } from '../../actions/alertActions'
import { severity } from '../../types/types'

const Businesses: React.FC = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  const dispatch = useDispatch()
  const contracts = useSelector((state: IRootState) => state.businessContracts.contracts)
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [contractToDelete, setContractToDelete] = React.useState('')

  const businessContracts: any[] = []

  if (contracts[0]) {
    contracts.forEach((contract: any) => {
      if (contract.target.userType == 'business') {
        businessContracts.push(contract)
      }
    })
  }

  const handleCloseDialog = (businessId: string) => {
    setContractToDelete(businessId)
    setDialogOpen(false)
  }

  const deleteContract = (contractId: string) => {
    dispatch(deleteContractById(contractId))
    setContractToDelete('')
    for (const contract of businessContracts) {
      if (contract.target._id === contractId) {
        dispatch(setAlert('Failure: Contract not deleted!', severity.Error, 3))
        break
      }
    }
    dispatch(setAlert(i18next.t('contract_deleted_alert'), severity.Success))
  }

  useEffect(() => {
    dispatch(fetchContractsAsAgency())
  }, [dispatch])

  useEffect(() => {
    if (contractToDelete) {
      deleteContract(contractToDelete)
    }
  }, [contractToDelete])

  const rows = businessContracts

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
            <Link className={classes.link} to={'/businesses/profile/' + params.row.target._id}>
              {params.row.target.companyName}
            </Link>
          </div>
        )
      },
    },
    {
      field: 'category',
      headerName: i18next.t('list_category'),
      minWidth: 140,
      flex: 1,
      headerClassName: 'super-app-theme--header',
      renderCell: (params) => {
        return (
          <Typography className={classes.tableCellText}>{params.row.target.category}</Typography>
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
        return <Typography className={classes.tableCellText}>{params.row.target.email}</Typography>
      },
    } /*
    {
      field: 'city',
      headerName: (i18next.t('list_city')),
      minWidth: 100,
      flex: 1,
      headerClassName: 'super-app-theme--header',
    }, */,
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
            style={{ marginTop: '30px', marginBottom: '20px', fontWeight: 'bold' }}
          >
            {t('list_title_businesses')}
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
    fontSize: '0.9375rem',
    lineHeight: '1.43',
  },
}))

export default Businesses
