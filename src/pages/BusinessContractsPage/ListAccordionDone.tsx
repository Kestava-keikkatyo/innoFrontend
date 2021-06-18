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
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
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
    color: "green",
  },
  display: {
    display: "column",
    width: "30em"
  }
}));

export const ListAccordionDone = (prop: { contracts: any[]}) => {
  const classes = useStyles()

  const history = useHistory()

  const dispatch = useDispatch()

  // Preview buisness contract form
  const handleEsitteleLomaketta =  (formId:any) => {
    dispatch(getFormByIdAndSetBusinessContractForm(formId))
    history.push(`/business-contracts/business-contract-preview`)
  }

  // Print PDF
  const handleTulostaLomaketta =  async (formId:any) => {
    let form:any = await formServices.fetchFormById(formId)
    console.log("form ", form)

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    // pdf content
    let content:any = []

    let html = ReactDOMServer.renderToString(<Form currentForm={form}/>)
    let htmlForm:any = htmlToPdfmake(html);

    content.push(htmlForm)

    // pdf document
    var doc = {
        content: content
    };

    pdfMake.createPdf(doc).download(form.title);
  }

  const {contracts} = prop
  if (contracts.length < 1) {
    return <p>no results</p>;
  } else
  return (
    <div className={classes.root}>
      {contracts.map((contract:any) =>(
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
            <Typography className={classes.heading}> Name: {contract.agency.name}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.color}>Valmis</Typography>
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
            <Divider/>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </div>
        </AccordionDetails>
        <AccordionActions>
              <Button onClick={() => handleEsitteleLomaketta(contract.madeContracts.formId)}>Esikatsele lomaketta</Button>
              <Button onClick={() => handleTulostaLomaketta(contract.madeContracts.formId)}>Tulosta pdf</Button>
        </AccordionActions>
      </Accordion>
      ))}
    </div>
  )}
export default ListAccordionDone;
