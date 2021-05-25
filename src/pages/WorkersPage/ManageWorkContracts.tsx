import React, { useState } from "react"
import Accordion from '@material-ui/core/Accordion';
import { AccordionDetails, AccordionSummary, Button, Card, CardContent, Checkbox, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper, Typography } from "@material-ui/core";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0)
  },
  column: {
    flexBasis: '100%',
  },
  paper: {
    width: 200,
    height: 230,
    overflow: 'auto',
  },
}))

const ManageWorkContracts:React.FC<{workContracts:any}> = ({workContracts}) => {
    const contracts = workContracts
    const classes = useStyles()
    if (!contracts.length) {
      return (
        <Typography style={{ padding: '1rem' }} variant="h6" align="center" className="text-secondary">
          no results
        </Typography>
      )
    }
    return (
        <>
        {contracts.map((contract:any) => (
          <Accordion key={contract._id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography >Yritys: {contract.business}         Keikkatöitä luotu: {contract.contracts.length}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {contract.contracts.map((job:any) => (
              <Accordion key={job._id} className={classes.column}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}>
                  <Typography>Keikkatyö: {job._id}  Created: {job.createdAt}</Typography>
                  <Typography></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <WorkContractsTable contracts={job}/>
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionDetails>
          </Accordion>
        ))}
        </>
    )
}

const WorkContractsTable:React.FC<{contracts:any}> = ({contracts}) => {
  const [checked, setChecked] = React.useState([0]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);
  const job = contracts
  const classes = useStyles()

  const acceptedStatus = (status:boolean) => {
    if (status) {
      return (
        <>True</>
      )
    } else {
      return (
        <>False</>
      )
    }
  }
  const handleToggle = (value:number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  }
  const customList = (items:number[]) => (
    <Paper>
      <List dense component="div" role="list">
        {items.map((value:number) => {
          const labelId = `transfer-list-item-${value}-label`;
          return (
            <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  )
  return (
    <>
    <Grid container spacing={1} justify="center" alignItems="stretch">
      <Grid item xs={12} md={6}>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h5"> 
              Accepted Workers
            </Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h6"> 
              Workers
            </Typography>
            <Divider />
            {customList(left)}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h5">
              Requested Workers
            </Typography>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h6"> 
              Workers
            </Typography>
            <Divider />
            {customList(right)}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Typography gutterBottom variant="h5">
              Accepted status:
            </Typography>
            <Divider/>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h6"> 
              Business:{acceptedStatus(job.acceptedBusiness)}
            </Typography>
            <Typography gutterBottom variant="h6"> 
              Agency:{acceptedStatus(job.acceptedAgency)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <Button
              variant="contained"
              color="primary"
              endIcon={<DoneOutlineIcon>Accept</DoneOutlineIcon>}
            >Accept
            </Button>
          </CardContent>
          <Divider/>
          <CardContent>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ClearIcon>Decline</ClearIcon>}
            >Decline
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </>
  )
}

export default ManageWorkContracts