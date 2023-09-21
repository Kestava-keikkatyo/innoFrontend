import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../utils/store'
import { Typography, Grid, Tooltip } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Link } from 'react-router-dom'
import {
  deleteEmploymentContractAsAgency,
  fetchEmploymentContractsAsAgency,
} from '../../actions/contractActions'
import { setAlert } from '../../actions/alertActions'
import { EmploymentAgreement, severity } from '../../types/types'
import { useTranslation } from 'react-i18next'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  IconButton,
} from '@mui/material'
import {
  Delete as DeleteIcon,
  Check as SignedIcon,
  DoneAll as AllSignedIcon,
  HourglassEmpty as PendingIcon,
} from '@mui/icons-material'
import { green, red, yellow } from '@mui/material/colors'
import SearchBox from '../../components/SearchBox'
import DeleteDialog from '../../components/DeleteDialog'
import DeleteDialogItem from '../../components/DeleteDialogItem'

/**
 * @component
 * @description
 * - Returns Grid with all employment proposals that agency has created
 * @returns Grid
 */
const EmploymentContractsTable: React.FC<any> = ({ employmentContracts }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const contracts = employmentContracts
  const { t } = useTranslation()
  const [page, setPage] = React.useState(0)
  const [rows, setRows] = useState([])
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [searchInput, setSearchInput] = useState('')
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [contractToDelete, setContractToDelete] = React.useState('')

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleFilterContracts = () => {
    const filteredRows = contracts?.filter((contract: any) => {
      return (
        contract.business.companyName.toLowerCase().includes(searchInput.toLowerCase()) ||
        contract.worker.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
        contract.worker.lastName.toLowerCase().includes(searchInput.toLowerCase())
      )
    })
    setRows(filteredRows)
  }

  const handleSearchChange = (event: any) => {
    event.preventDefault()
    setSearchInput(event.target.value)
  }

  const handleCloseDialog = (contractId: string) => {
    setContractToDelete(contractId)
    setDialogOpen(false)
  }

  const deleteContract = (contractId: string) => {
    dispatch(deleteEmploymentContractAsAgency(contractId))
    setContractToDelete('')
    for (let contract of contracts) {
      if (contract._id === contractId) {
        dispatch(setAlert('Failure: Contract not deleted!', severity.Error, 3))
        break
      }
    }
    dispatch(setAlert('Success: Contract deleted!', severity.Success, 3))
  }

  useEffect(() => {
    dispatch(fetchEmploymentContractsAsAgency())
  }, [dispatch])

  useEffect(() => {
    setRows(contracts)
  }, [contracts])

  useEffect(() => {
    handleFilterContracts()
  }, [searchInput])

  useEffect(() => {
    if (contractToDelete) {
      deleteContract(contractToDelete)
    }
  }, [contractToDelete])

  // Table view for desktop devices
  const tableView = () => {
    return (
      <div className={classes.tableDiv}>
        <Typography
          style={{ paddingTop: '1rem', marginBottom: '2%' }}
          variant='h1'
          className='header'
        >
          {t('employment_contracts_overview')}
        </Typography>
        <TableContainer>
          <SearchBox
            placeholder={t('search_by_name')}
            value={searchInput}
            onChange={handleSearchChange}
          />
          <Table aria-label='searched workers'>
            <TableHead>
              <TableRow>
                <TableCell align='left'>{t('status')}</TableCell>
                <TableCell align='left'>{t('business_name')}</TableCell>
                <TableCell align='left'>{t('business_signed')}</TableCell>
                <TableCell align='left'>{t('worker_email')}</TableCell>
                <TableCell align='left'>{t('worker_signed')}</TableCell>
                <TableCell align='left'>{t('delete')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                // {contractsTest
                // .filter((workerOrBusiness: any) =>
                //   workerOrBusiness.name
                //     .toLowerCase()
                //     .includes(filter.toLowerCase())
                // )
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((contract: any) => (
                  <TableRow key={contract._id}>
                    <TableCell component='th' scope='row' align='left'>
                      {contract.status === 'signed' && (
                        <>
                          <Tooltip title='Each recipient has signed' placement='top' arrow>
                            <AllSignedIcon sx={{ color: green[500] }} />
                          </Tooltip>
                        </>
                      )}
                      {contract.status === 'pending' && (
                        <>
                          <Tooltip
                            title='Pending until each recipient has signed'
                            placement='top'
                            arrow
                          >
                            <PendingIcon sx={{ color: yellow[800] }} />
                          </Tooltip>
                        </>
                      )}
                    </TableCell>

                    <TableCell align='left'>
                      <Link
                        className={classes.link}
                        to={'/businesses/profile/' + contract.business._id}
                      >
                        {contract.business.companyName}
                      </Link>
                    </TableCell>

                    <TableCell align='left'>
                      {contract.businessSigned && (
                        <>
                          <Tooltip title='Signed' placement='top' arrow>
                            <SignedIcon sx={{ color: green[500] }} />
                          </Tooltip>
                        </>
                      )}
                      {!contract.businessSigned && (
                        <>
                          <Tooltip title='Pending' placement='top' arrow>
                            <PendingIcon sx={{ color: yellow[800] }} />
                          </Tooltip>
                        </>
                      )}
                    </TableCell>

                    <TableCell align='left'>
                      <Link className={classes.link} to={'/workers/profile/' + contract.worker._id}>
                        {contract.worker.firstName} {contract.worker.lastName}
                      </Link>
                    </TableCell>

                    <TableCell align='left'>
                      {contract.workerSigned && (
                        <>
                          <Tooltip title='Signed' placement='top' arrow>
                            <SignedIcon sx={{ color: green[500] }} />
                          </Tooltip>
                        </>
                      )}
                      {!contract.workerSigned && (
                        <>
                          <Tooltip title='Pending' placement='top' arrow>
                            <PendingIcon sx={{ color: yellow[800] }} />
                          </Tooltip>
                        </>
                      )}
                    </TableCell>

                    <TableCell padding='none' align='left' style={{ paddingLeft: 5 }}>
                      <DeleteDialogItem
                        title='Delete and permanently remove connection between the recipients?'
                        itemId={contract._id}
                        onConfirm={handleCloseDialog}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    )
  }

  // if no contracts or an empty result "docs: []"
  if (!contracts || contracts.docs) {
    return (
      <Typography
        style={{ padding: '1rem' }}
        variant='h6'
        align='center'
        className='text-secondary'
      >
        {t('no_results')}
      </Typography>
    )
  } else return tableView()
}

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0),
  },
  accordion: {
    width: '100%',
    marginTop: 12,
    border: '1px solid #E0E0E0',
    borderRadius: 5,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
  description: {
    fontSize: theme.typography.pxToRem(13),
    color: '#6C6C6C',
  },
  tableDiv: {
    width: '100%',
  },
  link: {
    color: '#000000',
  },
}))

export default EmploymentContractsTable
