import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
  Theme,
  Divider,
  AccordionActions,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getFormById } from '../../actions/formActions';
import { getFormByIdAndSetBusinessContractForm } from '../../actions/businessContractFormActions';
import formServices from '../../services/formServices';
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import htmlToPdfmake from 'html-to-pdfmake';
import ReactDOMServer from 'react-dom/server';
import Form from '../FormsPage/Form';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  logoColumn: {
    flexBasis: '20%',
  },
  column: {
    flexBasis: '40%',
    wordWrap: 'break-word',
    marginLeft: '10px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  color: {
    color: 'gold',
  },
  info: {
    display: 'column',
    width: '30rem',
  },
}));

export const ListAccordionWaiting = (prop: { contracts: any[] }) => {
  const classes = useStyles();
  const { t } = useTranslation()
  const dispatch = useDispatch();

  const history = useHistory();

  // Preview business contract form

  const handleEsitteleLomaketta = (formId: any) => {
    //alert(formId);
    dispatch(getFormByIdAndSetBusinessContractForm(formId));
    history.push(`/business-contracts/business-contract-preview`);
  };

  // Print PDF
  const handleTulostaLomaketta = async (formId: any) => {
    //alert(formId);
    let form: any = await formServices.fetchFormById(formId);
    console.log('form ', form);

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    // pdf content
    let content: any = [];

    let html = ReactDOMServer.renderToString(<Form currentForm={form} />);
    let htmlForm: any = htmlToPdfmake(html);

    content.push(htmlForm);

    // pdf document
    var doc = {
      content: content,
    };

    pdfMake.createPdf(doc).download(form.title);
  };

  const { contracts } = prop;
  if (contracts.length < 1) {
    return <p>{t("no_results")}</p>;
  } else
    return (
      <div className={classes.root}>
        {contracts.map((contract: any) => (
          <Accordion key={contract._id}>
            {console.log('contract', contract)}
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className={classes.logoColumn}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </div>
              <div className={classes.column}>
                <Typography className={classes.heading}>
                  {contract.agency.name}
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.color}>Odottaa</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.info}>
                <Typography style={{ margin: '10px 5px' }}>
                  {t("email")}: {contract.agency.email}
                </Typography>
                <Divider />
                <Typography style={{ margin: '10px 5px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
                <Button
                  style={{ margin: '5px' }}
                  color="primary"
                  variant="contained"
                >
                  {t("website")}
                </Button>
              </div>
            </AccordionDetails>
            <AccordionActions>
              <Tooltip title="Esikatsele Lomakettä" placement="top" arrow>
                <IconButton
                  onClick={() =>
                    handleEsitteleLomaketta(contract.requestContracts.formId)
                  }
                >
                  <VisibilityIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Tulosta pdf" placement="top" arrow>
                <IconButton
                  onClick={() =>
                    handleTulostaLomaketta(contract.requestContracts.formId)
                  }
                >
                  <SaveAltIcon />
                </IconButton>
              </Tooltip>
            </AccordionActions>
          </Accordion>
        ))}
      </div>
    );
};
export default ListAccordionWaiting;
