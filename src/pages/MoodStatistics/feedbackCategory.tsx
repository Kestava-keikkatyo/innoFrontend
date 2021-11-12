import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  withStyles,
  Theme,
  createStyles,
  makeStyles,
  Grid,
} from '@material-ui/core';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';


/**
 * @component
 * @desc Custom table component in worker feel-o-meter
 * page. Displays workers feeling entry history.
 */
export default function CustomizedTables() {
  const classes = useStyles();
  const { t } = useTranslation()

  // Table head styles
  const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
      head: {
        backgroundColor: theme.palette.common.white,
        color: '#eb5a02',
      },
    })
  )(TableCell);

  // Table view for desktop devices
  const tableView = () => {
    return (
      <TableContainer
        style={{ overflow: 'auto' }}
        component={Paper}
        className="table-container"
      >
        <Table aria-label="searched workers">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">{t('category0')}</StyledTableCell>
              <StyledTableCell align="left">{t('description0')}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                  <TableCell align="left">{ t('cheer_one')}</TableCell>
                  <TableCell align="left">{t('description1')}</TableCell>
          </TableBody>
          <TableBody>
                  <TableCell align="left">{ t('cheer_two')}</TableCell>
                  <TableCell align="left">{t('description2')}</TableCell>
          </TableBody>
          <TableBody>
                  <TableCell align="left">{ t('cheer_three')}</TableCell>
                  <TableCell align="left">{t('description3')}</TableCell>
          </TableBody>
          <TableBody>
                  <TableCell align="left">{ t('cheer_four')}</TableCell>
                  <TableCell align="left">{t('description4')}</TableCell>
          </TableBody>
          <TableBody>
                  <TableCell align="left">{ t('cheer_five')}</TableCell>
                  <TableCell align="left">{t('description5')}</TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <div style={{ marginTop: 16 }}>
      <Grid item xs={12}>
        <Accordion className={classes.card} variant="outlined">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography gutterBottom variant="h5">
              {t('mood_category')}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>{tableView()}</AccordionDetails>
        </Accordion>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 300,
  },
  moodIcon: {
    width: 30,
    height: 30,
  },
  card: {
    margin: theme.spacing(2, 0),
  },
  accordion: {
    width: '100%',
    marginTop: 12,
    border: '1px solid #E0E0E0',
    borderRadius: 5,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
  description: {
    fontSize: theme.typography.pxToRem(13),
    color: '#6C6C6C',
  },
}));
