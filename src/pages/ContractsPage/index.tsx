import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { me } from '../../actions/userActions'

import PageLoading from '../../components/PageLoading'
import UserSearch from './UserSearch'
import SearchTable from './SearchTable'
import CurrentTable from './CurrentTable'
import ContractModal from './ContractModal'

import { Container, Typography, Divider, Card, CardContent, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0)
  },
}))

/**
 * @component
 * @description
 * - retrieves workers and businesses by name
 *
 * - Displays all the current businesscontracts, including pending ones (agency view, business view, worker view).
 * - Creates businesscontracts with businesses and workers (agency view).
 * - Accepts businesscontracts (worker view and business view).
 *
 * After agency has sent businesscontract and business/worker has accepted it,
 * agency can create workcontracts between worker and business in workerpage.
 * Only workers/businesses that have accepted businesscontract with agency will be shown
 * in workerpage
 */
const ContractsPage = () => {
  const { data, ...user } = useSelector((state: any) => state.user)
  const dispatch = useDispatch()
  const classes = useStyles()
  
  const [searchData, setSearchData] = useState(null)
  const [displayModal, setDisplayModal] = useState(false)

  //to be switched to retrieve contracts
  useEffect(() => {
    dispatch(me(data.role))
  }, [dispatch, data.role])

  const openModal = (worker: any) => {
    setSearchData(worker)
    setDisplayModal(true)
  }

  if (user.loading || !user.profile) {
    return (
      <PageLoading />
    )
  }

  return (
    <Container maxWidth="lg">
      <Typography style={{ paddingTop: '1rem' }} variant="h4" className="text-secondary">
        Contracts
      </Typography>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5">
            Make contract
          </Typography>
          <UserSearch />
          <Divider />
          <SearchTable
            addWorker={openModal} /> 
          <ContractModal
            displayModal={displayModal}
            closeModal={() => setDisplayModal(false)}
            workerData={searchData}
          />
        </CardContent>
      </Card>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5">
            Current contracts
          </Typography>
          <Divider />
          <CurrentTable />
        </CardContent>
      </Card>
    </Container>
  )
}

export default ContractsPage