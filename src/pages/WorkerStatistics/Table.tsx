import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import moment from 'moment';
import imagePlaceholder from '../../assets/image-placeholder.png';

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography,
  Box,
  InputBase,
  Divider,
  withStyles,
  Theme,
  createStyles,
  makeStyles,
  useTheme,
  useMediaQuery,
  Tooltip,
  CardMedia,
} from '@material-ui/core';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
//import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import DeleteIcon from '@material-ui/icons/Delete';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { useHistory } from 'react-router-dom';
import PreviewImageModal from './PreviewImageModal';

/**
 * @component
 * @desc Custom table component in worker feel-o-meter
 * page. Displays workers feeling entry history.
 */
export default function CustomizedTables() {
  const classes = useStyles();
  const feelings = useSelector((state: any) => state.feeling?.feelings);

  const [isPreviewImageOpen, setIsPreviewImageOpen] = useState(false);
  const [imageSource, setImageSource] = useState('');

  console.log('feelings TAble', feelings);

  const dispatch = useDispatch();

  const history = useHistory();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm')); // sm: korkeintaan 960px

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

  const handleImageClick = (src: string) => {
    setIsPreviewImageOpen(!isPreviewImageOpen);
    setImageSource(src);
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
              <StyledTableCell align="left">Mood</StyledTableCell>
              <StyledTableCell align="left">Comment</StyledTableCell>
              <StyledTableCell align="left">Date</StyledTableCell>
              <StyledTableCell align="left">Image</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feelings.docs &&
              feelings.docs.map((feel: any) => (
                <StyledTableRow key={feel._id}>
                  <TableCell align="left">{getIcon(feel.value)}</TableCell>
                  <TableCell align="left">{feel.note}</TableCell>
                  <TableCell align="left">
                    {moment(feel.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell padding="none" align="left">
                    <>
                      <img
                        src={feel.fileUrl ? feel.fileUrl : imagePlaceholder}
                        style={{
                          width: 50,
                          height: 50,
                          margin: 5,
                          cursor: 'pointer',
                        }}
                        alt="image"
                        onClick={() => handleImageClick(feel.fileUrl)}
                      />
                      <PreviewImageModal />
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
    <>
      {/*<TableContainer component={Paper} className="table-container">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell align="right">Rate</StyledTableCell>
              <StyledTableCell align="right">Details</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feelings.docs.map((feel: any, i: number) => (
              <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row">
                  6.7.2021
                </StyledTableCell>
                <StyledTableCell align="right">{feel.value}</StyledTableCell>
                <StyledTableCell align="right">{feel.note}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
            </TableContainer>*/}
      <br />
      {tableView()}
    </>
  );
}

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  moodIcon: {
    width: 30,
    height: 30,
  },
});
