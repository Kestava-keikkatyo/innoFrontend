import {  Grid, Hidden, Typography } from "@material-ui/core"
import ProgressPieChart from "../../components/ProgressPieChart"
import React from 'react'
import { averageFeeling, calculateCheer, getDataSet, getTotalDataSet } from "../../utils/feelingUtils"
import { useSelector } from "react-redux"

const WorkerStatisticsSummary = () => {
  const feelings = useSelector(state => state.feeling?.feelings)

  if(!feelings|| feelings.length === 0)
    return(
    <div className="worker-statistics-summary" spacing={1}>
      <Typography variant="h5" className="no-data-text">Oops! No data.</Typography>
      <Typography className="no-data-text">If you see this, then you haven't probably added any entries yet.</Typography>
    </div>
  )
  
  return(
      <Grid className="worker-statistics-summary" container spacing={1}>
        <Grid item xs={4}>
          <ProgressPieChart datasets={getDataSet(averageFeeling(feelings))}>
            <Typography variant="h5">{averageFeeling(feelings).toString()}</Typography>
            <Hidden xsDown>
              <Typography variant="h6">{calculateCheer(averageFeeling(feelings), 3)}</Typography>
            </Hidden>
          </ProgressPieChart>
          <Typography>Average</Typography>
        </Grid>
        <Grid item xs={4}>
          <ProgressPieChart datasets={getDataSet(feelings[feelings.length - 1]?.value)}>
            <Typography variant="h5">{feelings[feelings.length - 1]?.value}</Typography>
            <Hidden xsDown>
              <Typography variant="h6">{calculateCheer(feelings[feelings.length - 1]?.value, 3)}</Typography>
            </Hidden>
          </ProgressPieChart>
          <Typography>Current mood</Typography>
        </Grid>
        <Grid item xs={4}>
        <ProgressPieChart datasets={getTotalDataSet(feelings.length)}>
            <Typography variant="h5">{feelings.length}</Typography>
            <Hidden xsDown>
              <Typography variant="h6">{calculateCheer(feelings.length, 100)}</Typography>
            </Hidden>
          </ProgressPieChart>
          <Typography>Total entries</Typography>
        </Grid>
      </Grid>
  )
}

export default WorkerStatisticsSummary