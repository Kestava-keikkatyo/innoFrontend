import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Button, makeStyles, Theme } from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderBottom: "unset",
  },
  x: {
    display: "flex",
    just: "space-between",
  },
}));

function createData(name: string, field: string) {
  return {
    name,
    field,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const classes = useStyles();
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.field}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Typography variant="body1" color="textSecondary">
              <EmailIcon style={{marginBottom: -3, color: '#eb5a02', fontSize: 20, marginRight: '2%'}}
              />
              Sähköposti: tech@outlook.com
            </Typography>
            <Typography variant="body1" color="textSecondary">
              <PhoneIcon style={{marginBottom: -3, color: '#eb5a02', fontSize: 20, marginRight: '2%'}}/>
              Puhelin: 00122112
            </Typography>
            <Button 
            style={{marginTop: '1%'}}
            variant="outlined"
            >Valitse</Button>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("HP", "Tekniikka"),
  createData("NVIDIA", "Lääketiede"),
  createData("Dell", "Rakennus"),
  createData("Asus", "Huolto"),
  createData("Corsair", "Siivous"),
];

const AgencyGrid = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nimi</TableCell>
            <TableCell align="right">Toimiala</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AgencyGrid;
