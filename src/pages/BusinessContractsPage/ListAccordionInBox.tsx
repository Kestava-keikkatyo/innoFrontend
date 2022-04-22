import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Theme,
  Divider,
  AccordionActions,
  IconButton,
  Button,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {
  sendBusinessContract,
  refuseBusinessContractById,
} from '../../actions/businessContractActions';
import { IRootState } from '../../utils/store';
import {
  deleteBusinessContractForm,
  getByIdAndSetBusinessContractForm,
  setBusinessContractForm,
} from '../../actions/businessContractFormActions';
import { severity } from '../../types/types';
import { setAlert } from '../../actions/alertActions';
import businessContractFormService from '../../services/businessContractFormService';
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import htmlToPdfmake from 'html-to-pdfmake';
import ReactDOMServer from 'react-dom/server';
import Form from '../FormsPage/Form';
import { getFormById } from '../../actions/formActions';
import VisibilityIcon from '@mui/icons-material/Visibility';

import SendIcon from '@mui/icons-material/Send';
import EditIcon from '@mui/icons-material/Edit';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import Tooltip from '@mui/material/Tooltip';

export const ListAccordionInBox = (prop: { contracts: any[] }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  const { contracts } = prop;

  const currentBusinessContractForm: any = useSelector(
    (state: IRootState) => state.businessContractForm
  );

  // const handleEsitteleLomaketta = (businessContractFormId: any) => {
  const handleEsitteleLomaketta = (formId: any) => {
    // dispatch(getByIdAndSetBusinessContractForm(businessContractFormId));
    // history.push(`/business-contracts/business-contract-preview`);
    dispatch(getFormById(formId));
    history.push({ pathname: '/forms/preview' });

  };

  const handleTäytäTaiMuokkaaLomaketta = async (
    businessContractFormId: any
  ) => {
    const businessContractForm: any =
      await businessContractFormService.fetchBusinessContractFormById(
        businessContractFormId
      );
    dispatch(setBusinessContractForm(businessContractForm));
    history.push({ pathname: `/business-contracts/business-contract-edit` });
  };

  const rejectContract = (
    agencyId: any,
    contractId: any,
    businessContractFormId: any
  ) => {
    dispatch(getByIdAndSetBusinessContractForm(businessContractFormId));
    if (window.confirm(`Poistetaanko ${currentBusinessContractForm.title}`)) {
      dispatch(refuseBusinessContractById(agencyId, contractId));
      dispatch(deleteBusinessContractForm(businessContractFormId, agencyId));
    }
  };

  const loadAndSendContract = (contractId: any) => {
    let status = "signed"
    dispatch(
      sendBusinessContract(
        contractId,
        status
      )
      // sendBusinessContract(
      //   agencyId,
      //   contractId,
      //   currentBusinessContractForm._id
      // )
    );
    dispatch(setAlert('Business contract form sent!', severity.Success));
  };

  // Print PDF
  const handleTulostaLomaketta = async (formId: any) => {
    let businessContractForm: any =
      await businessContractFormService.fetchBusinessContractFormById(formId);
    console.log('businessContractForm ', businessContractForm);

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    // pdf content
    let content: any = [];

    let html = ReactDOMServer.renderToString(
      <Form currentForm={businessContractForm} />
    );
    let htmlForm: any = htmlToPdfmake(html);

    content.push(htmlForm);

    // pdf document
    var doc = {
      content: content,
    };

    pdfMake.createPdf(doc).download(businessContractForm.title);
  };

  if (contracts.length < 1) {
    return <p>{t('no_results')}</p>;
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
                {/* <Avatar
                  alt="Remy Sharp"
                  src={contract.agency.profile.profilePicture}
                /> */}
              </div>
              <div className={classes.column}>
                <Typography className={classes.heading}>
                  {/* {contract.agency.name} */}
                  {contract.creator.name}
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.color}>
                  {t('unfinished')}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.info}>
                <Typography style={{ margin: '10px 5px' }}>
                  {/* Email: {contract.agency.email} */}
                  Email: contract.agency.email
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
                  {t('website')}
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
                  size="large">
                  <CloseIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Esikatsele Lomakettä" placement="top" arrow>
                <IconButton
                  onClick={() =>
                    // handleEsitteleLomaketta(contract.pendingContracts.formId)
                    handleEsitteleLomaketta(contract.form2)
                  }
                  size="large">
                  <VisibilityIcon />
                </IconButton>
              </Tooltip>

              <Tooltip
                title="Täytä tai muokkaa lomaketta"
                placement="top"
                arrow
              >
                <IconButton
                  onClick={() =>
                    handleTäytäTaiMuokkaaLomaketta(
                      contract.pendingContracts.formId
                    )
                  }
                  size="large">
                  <EditIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Tulosta pdf" placement="top" arrow>
                <IconButton
                  onClick={() =>
                    handleTulostaLomaketta(contract.pendingContracts.formId)
                  }
                  size="large">
                  <SaveAltIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Lähetä Sopimus" placement="top" arrow>
                <IconButton
                  style={{ color: '#eb5a00' }}
                  onClick={() =>
                    // loadAndSendContract(contract.agency._id, contract._id)
                    // loadAndSendContract(contract.creator._id, contract.form2)
                    loadAndSendContract(contract._id)
                  }
                  size="large">
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
