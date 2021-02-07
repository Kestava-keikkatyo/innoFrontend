import { Button, Grid, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React from 'react'

const WorkerStatisticsButtonRow = () => {
  return (
    <Grid container className="worker-statistics-button-row">
      <Grid item xs={6}>
        <Typography variant="h4" className="text-secondary">Feel-o-meter</Typography>
      </Grid>
      <Grid item xs={6} className="worker-statistics-add-entry">
        <div>
          <Button variant="outlined" color="primary" size="large">
            <AddIcon /> New Entry
          </Button>
        </div>
        
      </Grid>
    </Grid>
  );
}

export default WorkerStatisticsButtonRow;
