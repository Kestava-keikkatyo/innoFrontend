import React from 'react'

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  Theme,
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import { Add as AddIcon } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { IRootState } from '../../utils/store'
import { useEffect, useState } from 'react'
import {
  Box,
  InputBase,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Tooltip,
} from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import { updateSearchList } from '../../actions/contractActions'
import { useDispatch } from 'react-redux'
import { roles } from '../../types/types'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useTranslation } from 'react-i18next'
import { Accordion, AccordionDetails, AccordionSummary, AccordionActions } from '@mui/material'
import ContentFlag from 'material-ui/svg-icons/content/flag'

const INIT_SEARCH_TYPE = roles.Worker

/**
 * @component
 * @desc A table to search workers or businesses to create new business contract (Agreement).
 * @param props
 * @param {Function} props.addWorkerOrBusiness add button click listener function,
 * which passes workers data to parent component state.
 */
const SearchTable: React.FC<any> = ({ addWorkerOrBusiness }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [searchType, setSearchType] = useState<any>(INIT_SEARCH_TYPE)
  const [filter, setFilter] = React.useState('')
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const theme = useTheme()
  const classes = useStyles()

  useEffect(() => {
    dispatch(updateSearchList('a', INIT_SEARCH_TYPE))
  }, [dispatch])

  // handle user input in the search field
  const handleFilterchange = (event: any) => {
    setFilter(event.target.value)
  }

  // handle radio button change
  const handleChange = (event: any) => {
    setSearchType(event.target.value)
    dispatch(updateSearchList('a', event.target.value))
  }

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const { searchList } = useSelector((state: IRootState) => state.businessContracts)
  const workersOrBusinesses = searchList

  if (!workersOrBusinesses.length)
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

  return (
    <Box
      display='flex'
      width='100%'
      maxWidth='100%'
      justifyContent='flex-start'
      alignItems='center'
      flexWrap='wrap'
    >
      <FormControl component='fieldset'>
        <RadioGroup
          aria-label='search type'
          row
          name='searchType'
          value={searchType}
          onChange={handleChange}
        >
          <FormControlLabel value={roles.Worker} control={<Radio />} label={t<string>('worker')} />
          <FormControlLabel
            value={roles.Business}
            control={<Radio />}
            label={t<string>('business')}
          />
        </RadioGroup>
      </FormControl>

      <form>
        <Box display='flex' alignItems='center'>
          <label htmlFor='search' style={{ display: 'none' }}>
            {t('search_by_email')}
          </label>
          <InputBase
            id='search'
            placeholder={t('search_by_email')}
            value={filter}
            onChange={handleFilterchange}
            aria-label='search'
          />
          <IconButton type='submit' size='large' aria-label='search icon'>
            <SearchIcon />
          </IconButton>
        </Box>
      </form>

      <div className={classes.tableDiv}>
        <TableContainer>
          <Table aria-label='searched workers'>
            <TableHead>
              <TableRow>
                <TableCell align='left'>{t('email')}</TableCell>
                <TableCell align='left'>{t('joined')}</TableCell>
                <TableCell align='left'>{t('add')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workersOrBusinesses
                .filter((workerOrBusiness: any) =>
                  workerOrBusiness.email.toLowerCase().includes(filter.toLowerCase()),
                )
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((workerOrBusiness: any) => (
                  <TableRow key={workerOrBusiness._id}>
                    <TableCell component='th' scope='row' align='left'>
                      {workerOrBusiness.email}
                    </TableCell>
                    <TableCell>
                      {new Date(workerOrBusiness.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell padding='none' align='left' style={{ paddingLeft: 5 }}>
                      <IconButton
                        aria-label='add to organization'
                        color='secondary'
                        onClick={() => addWorkerOrBusiness(workerOrBusiness)}
                        size='large'
                      >
                        <AddIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={workersOrBusinesses.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordionDiv: {
      width: '100%',
      marginTop: 12,
      border: '1px solid #E0E0E0',
      borderRadius: 5,
    },
    heading: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightRegular,
    },
    description: {
      fontSize: theme.typography.pxToRem(13),
      color: '#6C6C6C',
    },
    tableDiv: {
      width: '100%',
    },
  }),
)

export default SearchTable
