import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import moment from 'moment';
import imagePlaceholder from '../../assets/image-placeholder.png';
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

import PreviewImageModal from './PreviewImageModal';

/**
 * @component
 * @desc Custom table component in worker feel-o-meter
 * page. Displays workers feeling entry history.
 */
export default function CustomizedTables() {
  const classes = useStyles();
  const feelings = useSelector((state: any) => state.feeling?.feelings);
  const { t } = useTranslation()
  const [displayModal, setDisplayModal] = useState(false);
  const [imageSource, setImageSource] = useState('');

  // Table head styles
  const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
      head: {
        backgroundColor: theme.palette.common.white,
        color: '#eb5a02',
      },
    })
  )(TableCell);

  // Table row styles
  const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
      root: {
        '&:nth-of-type(odd)': {
          //backgroundColor: theme.palette.action.hover,
        },
      },
    })
  )(TableRow);

  const getIcon = (value: number) => {
    switch (value) {
      case 0:
        return (
          <SentimentVeryDissatisfiedIcon
            className={`${'mood-icon'} ${classes.moodIcon}`}
          />
        );
      case 1:
        return (
          <SentimentDissatisfiedIcon
            className={`${'mood-icon'} ${classes.moodIcon}`}
          />
        );
      case 2:
        return (
          <SentimentSatisfiedIcon
            className={`${'mood-icon'} ${classes.moodIcon}`}
          />
        );
      case 3:
        return (
          <SentimentSatisfiedAltIcon
            className={`${'mood-icon'} ${classes.moodIcon}`}
          />
        );
      case 4:
        return (
          <SentimentVerySatisfiedIcon
            className={`${'mood-icon'} ${classes.moodIcon}`}
          />
        );
      default:
        return null;
    }
  };

  const openImageModal = (src: string) => {
    setImageSource(src);
    setDisplayModal(true);
  };

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
              <StyledTableCell align="left">{t('mood')}</StyledTableCell>
              <StyledTableCell align="left">{t('comment')}</StyledTableCell>
              <StyledTableCell align="left">{t('date')}</StyledTableCell>
              <StyledTableCell align="left">{t('image')}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feelings &&
              feelings.map((feel: any) => (
                <StyledTableRow key={feel._id}>
                  <TableCell align="left">{getIcon(feel.value)}</TableCell>
                  <TableCell align="left">{feel.note}</TableCell>
                  <TableCell align="left">
                    {moment(feel.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell padding="none" align="left">
                    <>
                      <img
                        alt="details"
                        src={feel.fileUrl ? feel.fileUrl : imagePlaceholder}
                        style={{
                          width: 50,
                          height: 50,
                          margin: 5,
                          cursor: 'pointer',
                        }}
                        onClick={() => openImageModal(feel.fileUrl)}
                      />
                    </>
                  </TableCell>
                </StyledTableRow>
              ))}
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
              {t('mood_table')}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>{tableView()}</AccordionDetails>
        </Accordion>
      </Grid>
      <PreviewImageModal
        displayModal={displayModal}
        closeModal={() => setDisplayModal(false)}
        imageSource={imageSource}
      />
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
