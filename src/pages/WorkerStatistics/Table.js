import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeelings } from '../../actions/feelingActions';
import { formatDate } from '../../utils/dateUtils';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const feelings = useSelector(state => state.feeling?.feelings)
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch(fetchFeelings())
  }, [dispatch])
  console.log(feelings);
  return (
    <TableContainer component={Paper} className="table-container">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Rate</StyledTableCell>
            <StyledTableCell align="right">Details</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {feelings.map((feel, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {formatDate(feel.createdAt)}
              </StyledTableCell>
              <StyledTableCell align="right">{feel.value}</StyledTableCell>
              <StyledTableCell align="right">{feel.note}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
