import { Button, Grid, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React from 'react'
import { useState } from 'react';
import NewFeelingEntryModal from './NewFeelingEntryModal';

/**
 * @component
 * Header for feel-o-meter statistics page.
 */
const WorkerStatisticsButtonRow = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <Grid container className="worker-statistics-button-row">
      <Grid item xs={6}>
        <Typography variant="h4" className="text-secondary">Mood statistics</Typography>
      </Grid>
      <Grid item xs={6} className="worker-statistics-add-entry">
        <div>
          <Button variant="outlined" color="primary" onClick={() => setIsOpen(!isOpen)} >
            <AddIcon /> New Entry
          </Button>
        </div>
      </Grid>
    </Grid>
    <NewFeelingEntryModal modalState={{isOpen, setIsOpen}} />
    </>
  );
}

export default WorkerStatisticsButtonRow;
