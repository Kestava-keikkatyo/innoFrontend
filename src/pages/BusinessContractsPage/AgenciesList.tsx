import React, { ReactNode, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  InputBase,
  IconButton,
  FormControl,
  useMediaQuery,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid,
  SelectChangeEvent,
  TablePagination,
} from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllAgencies } from '../../actions/allUsersActions'
import { IRootState } from '../../utils/store'
import AgencyCard from './AgencyCard'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useTheme, Theme } from '@mui/material/styles'

import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'

/**
 * @component
 * @desc
 * A searchbar for searching agencies.
 * Agencies can be filtered by their selected category.
 */
const AgenciesList = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const { agencies } = useSelector((state: IRootState) => state.allUsers)
  const [alignment, setAlignment] = React.useState('Kaikki')
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const classes = useStyles()
  const { t } = useTranslation()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [count, setCount] = React.useState(agencies.length)
  const [search, setSearch] = React.useState(false)
  const [filter, setFilter] = React.useState(false)

  useEffect(() => {
    dispatch(fetchAllAgencies())
  }, [dispatch])

  useEffect(() => {
    const filteredAgencies = agencies.filter((agency: any) => agency.category === alignment)
    const searchedAgencies = agencies.filter((agency: any) =>
      agency.name.toLowerCase().includes(input.toLowerCase()),
    )
    const searchedAndFilteredAgencies = agencies
      .filter((agency: any) => agency.category === alignment)
      .filter((agency: any) => agency.name.toLowerCase().includes(input.toLowerCase()))

    if (search && filter) {
      setCount(searchedAndFilteredAgencies.length)
    } else if (search) {
      setCount(searchedAgencies.length)
    } else {
      alignment === 'Kaikki' ? setCount(agencies.length) : setCount(filteredAgencies.length)
    }
  }, [alignment, input])

  const handleChange = (event: React.MouseEvent<HTMLElement>, value: string) => {
    event.preventDefault()
    setInput('')
    setSearch(false)
    value === 'Kaikki' ? setFilter(false) : setFilter(true)
    setAlignment(value)
  }

  const handleMobileChange = (event: SelectChangeEvent<{ value: unknown }>, child: ReactNode) => {
    event.preventDefault()
    setAlignment(event.target.value as string)
  }

  const handleQuerySearchChange = (event: any) => {
    setInput(event.target.value)
    if (event.target.value === '') {
      setAlignment('Kaikki')
      setSearch(false)
    } else {
      setSearch(true)
    }
  }

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const noResults = () => {
    return (
      <>
        <Typography>{t('no_results')}</Typography>
      </>
    )
  }

  const showAgencyCards = (type: string) => {
    switch (type) {
      case 'Kaikki':
        if (search) {
          const query = agencies.filter((agency: any) =>
            agency.name.toLowerCase().includes(input.toLowerCase()),
          )
          if (query.length > 0) {
            return query
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((agency: any) => <AgencyCard key={agency._id} agency={agency} />)
          } else {
            return <>{noResults()}</>
          }
        } else {
          return agencies
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((agency: any) => <AgencyCard key={agency._id} agency={agency} />)
        }
      default:
        if (search) {
          const filteredAndSearched = agencies
            .filter((agency: any) => agency.category === alignment)
            .filter((agency: any) => agency.name.toLowerCase().includes(input.toLowerCase()))
          if (filteredAndSearched.length > 0) {
            return filteredAndSearched
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((agency: any) => <AgencyCard key={agency._id} agency={agency} />)
          } else {
            return <>{noResults()}</>
          }
        } else {
          const filtered = agencies.filter((agency: any) => agency.category === alignment)
          if (filtered.length > 0) {
            return filtered
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((agency: any) => <AgencyCard key={agency._id} agency={agency} />)
          } else {
            return <>{noResults()}</>
          }
        }
    }
  }

  const fields = [
    { field: t('all'), category: 'Kaikki' },
    { field: t('construction'), category: 'Rakennus, asennus ja huolto' },
    { field: t('it'), category: 'IT- ja tietoliikenne' },
    { field: t('education'), category: 'Koulutus- ja opetusala' },
    { field: t('medicine'), category: 'Lääketeollisuus- ja farmasia' },
    { field: t('estate'), category: 'Kiinteistö' },
  ]

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box className={classes.searchBar}>
            <label htmlFor='search' style={{ display: 'none' }}>
              {t('search_by_name')}
            </label>
            <InputBase
              id='search'
              placeholder={t('search_by_name')}
              value={input}
              onChange={handleQuerySearchChange}
              aria-label='search'
            />
            <IconButton type='submit' size='large' aria-label='search icon'>
              <SearchIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          {matches ? (
            <FormControl style={{ minWidth: '100%' }}>
              <InputLabel>Category</InputLabel>
              <Select autoWidth={true} value={alignment as any} onChange={handleMobileChange}>
                {fields.map((f) => (
                  <MenuItem key={f.field} value={f.category}>
                    {f.field}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <ToggleButtonGroup
              classes={{ root: classes.buttonGroupRoot }}
              className={classes.buttonGroup}
              value={alignment}
              exclusive
              onChange={handleChange}
              orientation='vertical'
            >
              {fields.map((f) => (
                <ToggleButton key={f.field} value={f.category}>
                  {f.field}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          )}
        </Grid>
        <Grid item xs={12} sm={9}>
          <div>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component='div'
              count={count}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
            {showAgencyCards(alignment)}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBar: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: '1%',
      marginBottom: '1%',
      marginLeft: '0.5%',
    },
    buttonGroup: {
      display: 'inline-grid',
      borderRadius: '0px',
    },
    buttonGroupRoot: {
      borderRadius: '0px',
    },
  }),
)

export default AgenciesList
