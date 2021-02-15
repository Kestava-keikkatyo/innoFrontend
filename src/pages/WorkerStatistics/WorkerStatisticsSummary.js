import {  Grid, Hidden, Typography } from "@material-ui/core"
import ProgressPieChart from "../../components/ProgressPieChart"
import React from 'react'

const WorkerStatisticsSummary = () => {
  return(
      <Grid className="worker-statistics-summary" container spacing={1}>
        <Grid item xs={4}>
          <ProgressPieChart>
            <Typography variant="h5">4.5</Typography>
            <Hidden xsDown>
              <Typography variant="h6">Satisfied</Typography>
            </Hidden>
          </ProgressPieChart>
          <Typography>Average</Typography>
        </Grid>
        <Grid item xs={4}>
          <ProgressPieChart>
            <Typography variant="h5">5</Typography>
            <Hidden xsDown>
              <Typography variant="h6">Great!</Typography>
            </Hidden>
          </ProgressPieChart>
          <Typography>Current mood</Typography>
        </Grid>
        <Grid item xs={4}>
        <ProgressPieChart>
            <Typography variant="h5">48</Typography>
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