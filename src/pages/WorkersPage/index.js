import React, { useState } from 'react'
import WorkerSearch from './WorkerSearch'
import SearchTable from './SearchTable'
import WorkerModal from './WorkerModal'
import CurrentWorkerTable from "./CurrentWorkerTable";

import {
  Card,
  Container,
  Divider,
  CardContent,
  Typography,
  makeStyles
} from '@material-ui/core'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0)
  },
}))

/**
 * demo version
 *
 * TODO:
 * - Displays all the current workers that agency has a businesscontract with (agency view).
 * - Displays all the current workcontracts that agency has made (agency view).
 * - Displays all the current workcontracts where business/worker is involved (worker view and business view).
 * - Creates workcontract between worker and business (agency view)
 */
const WorkersPage = () => {
  const workContracts = useSelector(state => state.workContracts)
  const [workerData, setWorkerData] = useState(null)
  const [displayModal, setDisplayModal] = useState(false)
  const classes = useStyles()

  const openModal = (worker) => {
    setWorkerData(worker)
    setDisplayModal(true)
  }

  return (
    <Container maxWidth="lg">
      <Typography style={{ paddingTop: '1rem' }} align="center" variant="h4">
        Workers
      </Typography>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" align="center">
            add workers to businesses
          </Typography>
          <WorkerSearch />
          <Divider />
          {workContracts.searchList.length ?
            <SearchTable
              addWorker={openModal}  /> :
            <Typography style={{ padding: '1rem' }} variant="h6" align="center">
              nothing here
            </Typography>
          }
        </CardContent>
      </Card>
      <WorkerModal
        modalState={{displayModal, setDisplayModal}}
        workerData={workerData}
      />
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" align="center">
            current workers
          </Typography>
          <CurrentWorkerTable />
        </CardContent>
      </Card>
    </Container>
  )
}

export default WorkersPage