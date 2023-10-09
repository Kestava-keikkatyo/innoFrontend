import { Grid, Hidden, Typography } from '@mui/material'
import ProgressPieChart from '../../components/ProgressPieChart'
import React, { useEffect } from 'react'
import {
  averageFeeling,
  calculateCheer,
  getDataSet,
  getTotalDataSet,
} from '../../utils/feelingUtils'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  fetchContractsAsAgency,
  fetchEmploymentContractsAsAgency,
} from '../../actions/contractActions'
import { IRootState } from '../../utils/store'

/**
 * @component
 */
const AgencyStatisticsSummary: React.FC<any> = () => {
  const workers = useSelector((state: IRootState) => state.businessContracts.contracts)
  const feelingsList = []
  const workersList: any = []
  const allFeelings: any = []
  const dispatch = useDispatch()

  if (workers[0]) {
    workers.forEach((contract: any) => {
      if (contract.target.userType == 'worker') {
        workersList.push(contract.target._id)
      }
    })
  }

  useEffect(() => {
    dispatch(fetchContractsAsAgency())
  }, [dispatch])

  const { feelings } = useSelector((state: any) => state.feeling)

  if (feelings.length != 0) {
    for (let i = 0; i < feelings.data.length - 1; i++) {
      allFeelings.push(feelings.data[i])
    }
  }

  if (allFeelings.length != 0) {
    for (let i = 0; i < allFeelings.length - 1; i++) {
      if (workersList.includes(allFeelings[i].worker)) {
        feelingsList.push(allFeelings[i].feeling)
      }
    }
  }

  const { t } = useTranslation()
  if (!feelings) {
    return (
      <div className='worker-statistics-summary'>
        <Typography variant='h5' className='no-data-text'>
          {t('no_data')}
        </Typography>
      </div>
    )
  }

  return (
    <Grid className='worker-statistics-summary' container>
      <Grid item style={{ padding: '0' }}>
        <ProgressPieChart datasets={getDataSet(averageFeeling(feelingsList))}>
          <Typography variant='h2' className='header2'>
            {averageFeeling(feelingsList).toString()}
          </Typography>
          <Hidden smDown>
            <Typography variant='h3' className='header4'>
              {calculateCheer(averageFeeling(feelingsList), 4)}
            </Typography>
          </Hidden>
        </ProgressPieChart>
        <Typography>{t('average')}</Typography>
      </Grid>
      <Grid item style={{ padding: '0' }}>
        <ProgressPieChart datasets={getTotalDataSet(feelingsList.length)}>
          <Typography variant='h2' className='header2'>
            {feelingsList.length}
          </Typography>
          <Hidden smDown>
            <Typography variant='h3' className='header4'>
              {calculateCheer(feelingsList.length, 100)}
            </Typography>
          </Hidden>
        </ProgressPieChart>
        <Typography>{t('total')}</Typography>
      </Grid>
    </Grid>
  )
}

export default AgencyStatisticsSummary

/*useEffect(() => {
  dispatch(fetchFeelings())
    users.map((worker: any) => {
      console.log("Worker feeelings" + worker.feelings);
      return dispatch(addFeelings(worker.feelings));
    });
}, [dispatch]);*/
