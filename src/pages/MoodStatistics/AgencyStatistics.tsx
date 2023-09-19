import React, { useEffect } from 'react'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import { Box, Container } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import AgencyStatisticsSummary from './AgencyStatisticsSummary'
import { addFeelings } from '../../actions/feelingActions'
import { IRootState } from '../../utils/store'
import { fetchFeelings } from '../../actions/feelingActions'

const AgencyStatistics = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const users = useSelector((state: IRootState) => state.user.contacts)
  const workers: any[] = []

  useEffect(() => {
    if (users[0]) {
      users.forEach((user) => {
        if (user.userType == 'worker') {
          workers.push(user)
          //console.log("Worker: " + user.firstName);
        }
      })
    }

    dispatch(fetchFeelings())
    workers.map((worker: any) => {
      if (users[0]) {
        users.forEach((user) => {
          if (user.userType == 'worker') {
            if (worker.feelings.worker == user._id) {
              workers.push(user)
              return dispatch(addFeelings(worker.feelings))
            }
          }
        })
      }
    })
  }, [dispatch])

  return (
    <Container maxWidth='lg' id='maxContainer' className={classes.container}>
      <Box style={{ paddingTop: 10, paddingBottom: 10 }}>
        <AgencyStatisticsSummary />
      </Box>
    </Container>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      marginTop: 10,
      paddingBottom: 20,
    },
  }),
)

export default AgencyStatistics

/*useEffect(() => {
  allUsersService.getAgencyWorkers().then((res: any) => {
    const agencyWorkers = res.data;
    console.log('agency workers: ' + agencyWorkers)
    users.map((worker: any) => {
      console.log("Worker feeelings" + worker.feelings);
      return dispatch(addFeelings(worker.feelings));
    });
  });
}, [dispatch]);*/
