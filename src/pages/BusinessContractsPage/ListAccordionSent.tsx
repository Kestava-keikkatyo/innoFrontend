import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
  Theme,
  Divider,
  AccordionActions,
  IconButton
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { useDispatch } from "react-redux";
import { refuseBusinessContractById } from "../../actions/businessContractActions";
import Tooltip from '@material-ui/core/Tooltip';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  logoColumn:{
    flexBasis: '20%'
  },
  column: {
    flexBasis: '40%',
    wordWrap:'break-word',
    marginLeft:'10px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  color: {
    color: "gold",
  },
  info: {
    display:'column',
    width: "30rem",
  }

}));

export const ListAccordioSent = (prop: { contracts: any[] }) => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const rejectContract = (contractId: any) => {
    if (window.confirm(`Poistetaanko sopimuspyyntö?`)) {
      dispatch(refuseBusinessContractById(contractId));
    }
  }

  const { contracts } = prop
  if (contracts.length < 1) {
    return <p>no results</p>;
  } else
    return (
      <div className={classes.root}>
        {contracts.map((contract: any) => (
          <Accordion key={contract._id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className={classes.logoColumn}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </div>
              <div className={classes.column}>
                <Typography className={classes.heading}>{contract.agency.name}</Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.color}>Odottaa</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.info}>
                <Typography style={{margin:'10px 5px'}}>Email: {contract.agency.email}</Typography>
                <Divider />
                <Typography style={{margin:'10px 5px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
                <Button style={{margin:'5px'}} color='primary' variant='contained'>
                  Yrityksen Nettisivu
                </Button>

              </div>
            </AccordionDetails>
            <AccordionActions>
              <Tooltip title="Hylkää Sopimus" placement="top" arrow>
                <IconButton onClick={() => rejectContract(contract._id)}>
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </AccordionActions>
          </Accordion>
        ))}
      </div>
    );
};
export default ListAccordioSent;
