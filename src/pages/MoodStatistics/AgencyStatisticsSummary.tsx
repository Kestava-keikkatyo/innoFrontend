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
  fetchEmploymentContractsAsWorkerOrBusiness,
} from '../../actions/contractActions'
import { IRootState } from '../../utils/store'
import { roles } from '../../types/types'

type Feeling = {
  comment: string
  createdAt: string
  feeling: number
  worker: string
  __v: number
  _id: string
}

/**
 * @component
 */
const AgencyStatisticsSummary: React.FC = () => {
  const { data } = useSelector((state: IRootState) => state.user)
  const role = data.role //Current role: Agency or Business

  const workersList: string[] = [] //IDs of all workers associated with Business or Agency
  const { feelings } = useSelector((state: IRootState) => state.feeling)
  const allFeelings: Feeling[] = feelings.data ? [...feelings.data] : [] //All feelings
  const feelingsList: number[] = [] //Feelings of only workers associated with the Business/Agency as numeric values
  const dispatch = useDispatch()

  if (role === roles.Agency) {
    const contractsAgency = useSelector((state: IRootState) => state.businessContracts.contracts)

    if (contractsAgency && contractsAgency.length > 0) {
      contractsAgency.forEach((contract: any) => {
        if (contract.target.userType == 'worker') {
          workersList.push(contract.target._id)
        }
      })
    }
  }

  if (role === roles.Business) {
    const contractsBusiness = useSelector((state: any) => state.employmentAgreements.agreements)

    if (contractsBusiness && contractsBusiness.length > 0) {
      contractsBusiness.forEach((contract: any) => {
        workersList.push(contract.worker._id)
      })
    }
  }

  useEffect(() => {
    if (role === roles.Agency) {
      dispatch(fetchContractsAsAgency())
    }
    if (role === roles.Business) {
      dispatch(fetchEmploymentContractsAsWorkerOrBusiness())
    }
  }, [dispatch])

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
