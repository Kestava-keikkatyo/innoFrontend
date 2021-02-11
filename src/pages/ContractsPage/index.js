import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { me } from '../../actions/userActions'
import contractsService from '../../services/contractsService'

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
 * demo version, currently only retrieves workers and businesses by name
 *
 * TODO:
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
  const { data, ...user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const classes = useStyles()

  const [searchList, setSearchList] = useState([])
  const [searchData, setSearchData] = useState(null)
  const [currentList, setCurrentList] = useState([])
  const [displayModal, setDisplayModal] = useState(false)
  const [currentType, setCurrentType] = useState('worker');

  //to be switched to retrieve contracts
  useEffect(() => {
    async function fetchContracts() {
      const res = await contractsService.showBusinessContracts()
      setCurrentList(res.data)
    }

    dispatch(me(data.role))
    fetchContracts()
  }, [dispatch, data.role])

  const fetchWorkers = async (input, searchType) => {
    // siirto reduxiin
    const result = await contractsService.searchUsers(input, searchType)
    setCurrentType(searchType)
    setSearchList(result.data)
  }

  const openModal = (worker) => {
    setSearchData(worker)
    setDisplayModal(true)
  }

  const addContract = () => {
    if (!currentList.some((value) => value.id === searchData.id)) {
      setCurrentList(prevList => [searchData, ...prevList])
    }
    contractsService.addBusinessContract(searchData.id, currentType)
    setDisplayModal(false)
  }

  /**
   * TODO: Check when route is working in backend
   * @param {*} id 
   */
  const removeContract = async (id) => {
    const res = await contractsService.deleteBusinessContractById(id)
    console.log(res);
    setCurrentList(prevList => prevList.filter((value) => value.id !== id))
  }

  if (user.loading || !user.profile) {
    return (
      <PageLoading />
    )
  }

  return (
    <Container maxWidth="lg">
      <Typography style={{ paddingTop: '1rem' }} align="center" variant="h4">
        Contracts
      </Typography>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" align="center">
            make contracts
          </Typography>
          <UserSearch fetchWorkers={fetchWorkers} />
          <Divider />
          {searchList.length ?
            <SearchTable
              workers={searchList}
              addWorker={openModal} /> :
            <Typography style={{ padding: '1rem' }} variant="h6" align="center">
              no results
            </Typography>
          }
          <ContractModal
            displayModal={displayModal}
            closeModal={() => setDisplayModal(false)}
            addContract={addContract}
            workerData={searchData}
          />
        </CardContent>
      </Card>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" align="center">
            current contracts
          </Typography>
          <Divider />
          {currentList.length ?
            <CurrentTable
              contracts={currentList}
              removeContract={removeContract} /> :
            <Typography style={{ padding: '1rem' }} variant="h6" align="center">
              no contracts
            </Typography>
          }
        </CardContent>
      </Card>
    </Container>
  )
}

export default ContractsPage