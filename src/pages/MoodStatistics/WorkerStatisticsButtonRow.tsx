import { Button, Grid, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import { useState } from 'react';
import NewFeelingEntryModal from './NewFeelingEntryModal';
import { useTranslation } from 'react-i18next'
/**
 * @component
 * Header for feel-o-meter statistics page.
 */
const WorkerStatisticsButtonRow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation()
  return (
    <>
      <Grid
        container
        className="worker-statistics-button-row"
        style={{ marginTop: 16 }}
      >
        <Grid item xs={6}>
          <Typography variant="h4" className="text-secondary">
            {t('mood_stats')}
          </Typography>
        </Grid>
        <Grid item xs={6} className="worker-statistics-add-entry">
          <div>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AddIcon /> {t('entry')}
            </Button>
          </div>
        </Grid>
      </Grid>
      <NewFeelingEntryModal modalState={{ isOpen, setIsOpen }} />
    </>
  );
};

export default WorkerStatisticsButtonRow;
