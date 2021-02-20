import {  Grid, Hidden, Typography } from "@material-ui/core"
import ProgressPieChart from "../../components/ProgressPieChart"
import React from 'react'
import { averageFeeling, getDataSet, getTotalDataSet } from "../../utils/feelingUtils"
import { useSelector } from "react-redux"

const WorkerStatisticsSummary = () => {
  const feelings = useSelector(state => state.feeling?.feelings)
  return(
      <Grid className="worker-statistics-summary" container spacing={1}>
        <Grid item xs={4}>
          <ProgressPieChart datasets={getDataSet(averageFeeling(feelings))}>
            <Typography variant="h5">{averageFeeling(feelings)}</Typography>
            <Hidden xsDown>
              <Typography variant="h6">Satisfied</Typography>
            </Hidden>
          </ProgressPieChart>
          <Typography>Average</Typography>
        </Grid>
        <Grid item xs={4}>
          <ProgressPieChart datasets={getDataSet(feelings[0]?.value)}>
            <Typography variant="h5">{feelings[0]?.value}</Typography>
            <Hidden xsDown>
              <Typography variant="h6">Great!</Typography>
            </Hidden>
          </ProgressPieChart>
          <Typography>Current mood</Typography>
        </Grid>
        <Grid item xs={4}>
        <ProgressPieChart datasets={getTotalDataSet(feelings.length)}>
            <Typography variant="h5">{feelings.length}</Typography>
            <Hidden xsDown>
              <Typography variant="h6">Keep it up!</Typography>
            </Hidden>
          </ProgressPieChart>
          <Typography>Total entries</Typography>
        </Grid>
      </Grid>
  )
}

export default WorkerStatisticsSummary