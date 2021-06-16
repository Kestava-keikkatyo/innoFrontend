import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
  Theme,
  Divider,
  AccordionActions
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { refuseBusinessContractById, sendBusinessContract } from "../../actions/businessContractActions";
import { getFormById } from "../../actions/formActions";
import { getFormByIdAndSetBusinessContractForm } from "../../actions/businessContractFormActions";
import formServices from "../../services/formServices"
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import htmlToPdfmake from 'html-to-pdfmake'
import ReactDOMServer from "react-dom/server";
import Form from "../FormsPage/Form";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  column: {
    flexBasis: "33.33%",
  },
  color: {
    color: "gold",
  },
  display: {
    display: "column",
    width: "30em"
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
              <div className={classes.column}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </div>
              <div className={classes.column}>
                <Typography className={classes.heading}>{contract.agency.name}</Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.color}>Odottaa</Typography>
              </div>
              <div className={classes.column}>
                <Button>Siirry yrityksen nettisivuille</Button>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.display}>
                <Typography>
                  Email: {contract.agency.email}
                </Typography>
                <Divider />
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
            </Typography>
              </div>
            </AccordionDetails>
            <AccordionActions>
              <Button onClick={() => rejectContract(contract._id)}>Hylkää sopimus</Button>
            </AccordionActions>
          </Accordion>
        ))}
      </div>
    );
};
export default ListAccordioSent;
