import React, { useEffect, useState } from 'react'
import WorkerSearch from './WorkerSearch'
import { Card, Container, Divider, CardContent, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../utils/store';
import { fetchWorkContracts } from '../../actions/workContractActions';
import { fetchContractsAsTarget } from '../../actions/contractActions';
import MakeWorkContracts from './MakeWorkContracts';
import WorkerModal from './WorkerModal';
import ManageWorkContracts from './ManageWorkContracts';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0)
  },
}))

/**
 * @deprecated
 * @component
 *
 * @desc
 * Root component for work contract page (agency).
 * - Displays all the current workers that agency has a businesscontract with (agency view).
 * - Displays all the current workcontracts that agency has made (agency view).
 * - Displays all the current workcontracts where business/worker is involved (worker view and business view).
 * - Creates workcontract between worker and business (agency view)
 */
const WorkerContractPage = () => {
  const { businessContract } = useSelector((state:IRootState) => state.businessContracts)
  const { workContracts } = useSelector((state: IRootState) => state.workContracts)
  const [workerData, setWorkerData] = useState(null)
  const [displayModal, setDisplayModal] = useState(false)
  const classes = useStyles()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchContractsAsTarget())
    dispatch(fetchWorkContracts())
  },[dispatch])

  const openModal = (worker: any) => {
    setWorkerData(worker)
    setDisplayModal(true)
  }

  return (
    <Container style={{backgroundColor: 'red'}} maxWidth="lg">
      <Typography style={{ paddingTop: '1rem' }} align="center" variant="h4">
        Make WorkContracts 
      </Typography>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" align="center">
            Make WorkContract for Business that has BusinessContract with you.
          </Typography>
          <WorkerSearch />
          <Divider />
          <MakeWorkContracts addWorker={openModal}
          madeContracts={businessContract.length >= 1 ? businessContract[0].madeContracts.businesses : []}/>
          <WorkerModal
          modalState={{displayModal,setDisplayModal}}
          workerData={workerData}/>
        </CardContent>
      </Card>
      <ManageWorkContracts workContracts={workContracts}/>
    </Container>
  )
}

export default WorkerContractPage