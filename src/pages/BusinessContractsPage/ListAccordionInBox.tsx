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
  IconButton,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  sendBusinessContract,
  refuseBusinessContractById,
} from '../../actions/businessContractActions';
import { getFormById } from '../../actions/formActions';
import { IRootState } from '../../utils/store';
import {
  getFormByIdAndSetBusinessContractForm,
  setBusinessContractForm,
} from '../../actions/businessContractFormActions';
import { severity } from '../../types/types';
import { setAlert } from '../../actions/alertActions';
import formServices from '../../services/formServices';
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import htmlToPdfmake from 'html-to-pdfmake';
import ReactDOMServer from 'react-dom/server';
import Form from '../FormsPage/Form';
import VisibilityIcon from '@material-ui/icons/Visibility';

import SendIcon from '@material-ui/icons/Send';
import EditIcon from '@material-ui/icons/Edit';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import CloseIcon from '@material-ui/icons/Close';
import ListAltIcon from '@material-ui/icons/ListAlt';

import Tooltip from '@material-ui/core/Tooltip';
import { useLocation } from 'react-router-dom';

export const ListAccordionInBox = (prop: { contracts: any[] }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location: any = useLocation();
  /*
  isSubmitted used to prevent the user form filling the form again immideately after
  the form is submitted. By default isSubmitted = undefined, when business contract form is
  submitted (BusinessContractPreviewPage > SubmitHeader) then submitted = true
  */
  const isSubmitted: any | undefined = location?.state?.isSubmitted;

  const { contracts } = prop;

  const currentForm: any = useSelector((state: IRootState) => state.form);
  const currentBusinessContractForm: any = useSelector(
    (state: IRootState) => state.businessContractForm
  );

  const handleEsitteleLomaketta = (formId: any) => {
    dispatch(getFormByIdAndSetBusinessContractForm(formId));
    history.push(`/business-contracts/business-contract-preview`);
  };

  const handleTäytäLomaketta = async (formId: any, contractId: string) => {
    if (isSubmitted) {
      dispatch(
        setAlert(
          'Lomake on jo täydetty, voit editoida täydettyä lomakettä!',
          severity.Error
        )
      );
    } else {
      const form: any = await formServices.fetchFormById(formId);
      dispatch(setBusinessContractForm(form));
      if (form.filled) {
        dispatch(
          setAlert(
            'Lomake on jo täydetty, voit editoida täydettyä lomakettä!',
            severity.Error
          )
        );
      } else {
        history.push({
          pathname: `/business-contracts/business-contract-fill`,
          state: { contractId: contractId },
        });
      }
    }
  };

  const handleMuokkaaTäytettyäLomaketta = async (formId: any) => {
    if (isSubmitted) {
      history.push(`/business-contracts/business-contract-edit`);
    } else {
      const form: any = await formServices.fetchFormById(formId);
      if (form.filled) {
        history.push(`/business-contracts/business-contract-edit`);
      } else {
        dispatch(setAlert('Lomake ei ole vielä täydetty', severity.Error));
      }
    }
  };

  const rejectContract = (agencyId: any, contractId: any, formId: any) => {
    dispatch(getFormById(formId));
    if (window.confirm(`Poistetaanko ${currentForm.title}`)) {
      dispatch(refuseBusinessContractById(agencyId, contractId));
    }
  };

  const loadAndSendContract = (agencyId: any, contractId: any) => {
    dispatch(
      sendBusinessContract(
        agencyId,
        contractId,
        currentBusinessContractForm._id
      )
    );
    dispatch(setAlert('Business contract form sent!', severity.Success));
  };

  // Print PDF
  const handleTulostaLomaketta = async (formId: any) => {
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

  if (contracts.length < 1) {
    return <p>no results</p>;
  } else
    return (
      <div className="listAccordion-div">
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
                <Typography className={classes.heading}>
                  {contract.agency.name}
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.color}>
                  Käsittelemätön
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.info}>
                <Typography style={{ margin: '10px 5px' }}>
                  Email: {contract.agency.email}
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
                  Yrityksen Nettisivu
                </Button>
              </div>
            </AccordionDetails>

            <AccordionActions disableSpacing>
              <Tooltip title="Hylkää Sopimus" placement="top" arrow>
                <IconButton
                  onClick={() =>
                    rejectContract(
                      contract.agency._id,
                      contract._id,
                      contract.pendingContracts.formId
                    )
                  }
                >
                  <CloseIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Esikatsele Lomakettä" placement="top" arrow>
                <IconButton
                  onClick={() =>
                    handleEsitteleLomaketta(contract.pendingContracts.formId)
                  }
                >
                  <VisibilityIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Täytä lomaketta" placement="top" arrow>
                <IconButton
                  onClick={() =>
                    handleTäytäLomaketta(
                      contract.pendingContracts.formId,
                      contract._id
                    )
                  }
                >
                  <ListAltIcon />
                </IconButton>
              </Tooltip>

              <Tooltip
                title="Muokkaa Täytettyä lomaketta"
                placement="top"
                arrow
              >
                <IconButton
                  onClick={() =>
                    handleMuokkaaTäytettyäLomaketta(
                      contract.pendingContracts.formId
                    )
                  }
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Tulosta pdf" placement="top" arrow>
                <IconButton
                  onClick={() =>
                    handleTulostaLomaketta(contract.pendingContracts.formId)
                  }
                >
                  <SaveAltIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Lähetä Sopimus" placement="top" arrow>
                <IconButton
                  style={{ color: '#eb5a00' }}
                  onClick={() =>
                    loadAndSendContract(contract.agency._id, contract._id)
                  }
                >
                  <SendIcon />
                </IconButton>
              </Tooltip>
            </AccordionActions>
          </Accordion>
        ))}
      </div>
    );
};

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
    color: 'red',
  },
  info: {
    display: 'column',
    width: '30rem',
  },
}));

export default ListAccordionInBox;
