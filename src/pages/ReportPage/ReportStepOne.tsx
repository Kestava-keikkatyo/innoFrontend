import { Typography, FormControl, MenuItem, Select, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllAgencies, fetchAllBusinesses } from '../../actions/allUsersActions'
import { setReport } from '../../actions/reportActions'
import SearchBox from '../../components/SearchBox'
import { useTranslation } from 'react-i18next'
import { User } from '../../types/types'

export interface ReportStepOneProps {}

/**First step (page) of the new report form. */
const ReportStepOne: React.FC<ReportStepOneProps> = () => {
  const currentReport: any = useSelector((state: any) => state.report.currentReport)
  /**TODO: When choosing report recipient, show more relevant list of
   * agencies/businesses, not all.Maybe just those the worker has a contract with.
   * */
  const userContacts: User[] = useSelector((state: any) => state.user.contacts)
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const businesses: User[] = []
  const agencies: User[] = []

  userContacts.forEach((user) => {
    if (user.userType == 'agency') {
      agencies.push(user)
    } else if (user.userType == 'business') {
      businesses.push(user)
    }
  })

  /**TODO: More user friendly way of showing filtered recipients. Currently
   * user writes a search term and after that has to click Select-component
   * before seeing search results.
   */
  const [filterAgencies, setFilterAgencies] = useState('')
  const [filterBusinesses, setFilterBusinesses] = useState('')

  /**If current report has some recipients already (received from redux store),
   * set those as default. Important when coming back from step two or three.
   * */
  const [selectedBusiness, setSelectedBusiness] = useState(
    currentReport.business ? currentReport.business : '',
  )
  const [selectedAgency, setSelectedAgency] = useState(
    currentReport.agency ? currentReport.agency : '',
  )

  const handleFilterAgencies = (event: any) => {
    setFilterAgencies(event.target.value)
  }

  const handleFilterBusinesses = (event: any) => {
    setFilterBusinesses(event.target.value)
  }

  /**Select recipient agency */
  const handleSelectedAgency = (event: any) => {
    setSelectedAgency(event.target.value)
    /**Mui Select does not accept null for empty value. So we need
     * to use "" but send null to store when clearing selection.
     * */
    const valueForDB = event.target.value === '' ? null : event.target.value
    dispatch(setReport({ ...currentReport, agency: valueForDB }))
  }

  /**Select recipient business */
  const handleSelectedBusiness = (event: any) => {
    setSelectedBusiness(event.target.value)
    /**Mui Select does not accept null for empty value. So we need
     * to use "" but send null to store when clearing selection.
     * */
    const valueForDB = event.target.value === '' ? null : event.target.value
    dispatch(setReport({ ...currentReport, business: valueForDB }))
  }

  return (
    <Grid container style={{ marginTop: 16 }}>
      {/**Helper text for user to choose report recipient. */}
      <Grid item xs={12}>
        <Typography variant='h2' className='header5'>
          {' '}
          {t('select_report_handler')}
        </Typography>
        <Typography variant='body2' style={{ color: '#757575' }}>
          {t('select_report_helper_text')}
        </Typography>
      </Grid>
      {/* Business grid */}
      <Grid item xs={12} style={{ marginTop: 32 }}>
        <Typography>{t('business')}</Typography>
        <SearchBox
          placeholder={t('search_by_name')}
          value={filterBusinesses}
          onChange={handleFilterBusinesses}
        />
        <FormControl>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={selectedBusiness}
            style={{ maxHeight: 50 }}
            onChange={handleSelectedBusiness}
          >
            {businesses
              .sort((a: any, b: any) => a.name.localeCompare(b.name)) // Sort alphabetically and filter by search term. Return a list of Menuitems
              .filter((business: any) =>
                business.companyName.toLowerCase().includes(filterBusinesses.toLowerCase()),
              )
              .map((business: any) => (
                <MenuItem key={business._id} value={business._id}>
                  {business.companyName}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
      {/* Agency grid */}
      <Grid item xs={12} style={{ marginTop: 32 }}>
        <Typography>{t('agency')}</Typography>
        <SearchBox
          placeholder={t('search_by_name')}
          value={filterAgencies}
          onChange={handleFilterAgencies}
        />
        <FormControl>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={selectedAgency}
            onChange={handleSelectedAgency}
            style={{ maxHeight: 50 }}
          >
            {agencies
              .sort((a: any, b: any) => a.name.localeCompare(b.name)) // Sort alphabetically and filter by search term. Return a list of Menuitems
              .filter((agency: any) =>
                agency.companyName.toLowerCase().includes(filterAgencies.toLowerCase()),
              )
              .map((agency: any) => (
                <MenuItem key={agency._id} value={agency._id}>
                  {agency.companyName}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default ReportStepOne
