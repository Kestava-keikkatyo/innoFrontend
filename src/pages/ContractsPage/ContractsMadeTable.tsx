import React from 'react';
import {
  Typography,
  TableContainer,
  TableHead,
  TableCell,
  Table,
  TableRow,
  TableBody,
  IconButton,
  useMediaQuery,
  useTheme,
  Tooltip,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import pdfMake from 'pdfmake/build/pdfmake';
import ReactDOMServer from 'react-dom/server';
import Form from '../FormsPage/Form';
import htmlToPdfmake from 'html-to-pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import businessContractFormService from '../../services/businessContractFormService';

const ContractsMadeTable = (prop: { contracts: []; contractId: string }) => {
  const { contracts, contractId } = prop;

  console.log('contracts', contracts);
  console.log('contractId', contractId);

  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  // Print PDF
  const handleDownload = async (formId: any) => {
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

  const tableView = () => {
    return (
      <TableContainer>
        <Table aria-label="searched workers">
          <TableHead>
            <TableRow>
              <TableCell align="left">{t('name')}</TableCell>
              <TableCell align="left">{t('email')}</TableCell>
              <TableCell align="left">{t('role')}</TableCell>
              <TableCell align="left">{t('status')}</TableCell>
              <TableCell align="left">{t('download')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contracts.map((contract: any) => (
              <TableRow key={contract._id}>
                <TableCell align="left">
                  {contract.businessId
                    ? contract.businessId.name
                    : contract.workerId.name}
                </TableCell>

                <TableCell align="left">
                  {contract.businessId
                    ? contract.businessId.email
                    : contract.workerId.email}
                </TableCell>

                <TableCell align="left">
                  {contract.businessId
                    ? contract.businessId.userType
                    : contract.workerId.userType}
                </TableCell>

                <TableCell align="left">{'Made'}</TableCell>

                <TableCell
                  padding="none"
                  align="left"
                  style={{ paddingLeft: 16 }}
                >
                  <IconButton
                    aria-label="Download"
                    color="secondary"
                    onClick={() => handleDownload(contract.formId)}
                  >
                    <SaveAltIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const accordionView = () => {
    return contracts.map((contract: any) => (
      <div key={contract._id} className={classes.accordionDiv}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {contract.businessId
                ? contract.businessId.name
                : contract.workerId.name}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography className={classes.description}>
              Email:{' '}
              {contract.businessId
                ? contract.businessId.email
                : contract.workerId.email}
            </Typography>
          </AccordionDetails>

          <AccordionDetails>
            <Typography className={classes.description}>
              Type:{' '}
              {contract.businessId
                ? contract.businessId.userType
                : contract.workerId.userType}
            </Typography>
          </AccordionDetails>

          <AccordionDetails className={classes.description}>
            <Typography className={classes.description}>
              Status: Made
            </Typography>
          </AccordionDetails>

          <AccordionActions>
            <Tooltip title="Download" placement="top" arrow>
              <IconButton
                aria-label="download"
                color="secondary"
                onClick={() => handleDownload(contract.formId)}
              >
                <SaveAltIcon />
              </IconButton>
            </Tooltip>
          </AccordionActions>
        </Accordion>
      </div>
    ));
  };

  if (!contracts)
    return (
      <Typography
        style={{ padding: '1rem' }}
        variant="h6"
        align="center"
        className="text-secondary"
      >
        {t('no_results')}
      </Typography>
    );
  else
    return (
      <div className={classes.container}>
        {matches ? accordionView() : tableView()}
      </div>
    );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
    },
    accordionDiv: {
      width: '100%',
      marginTop: 12,
      border: '1px solid #E0E0E0',
      borderRadius: 5,
    },
    heading: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightRegular,
    },
    description: {
      fontSize: theme.typography.pxToRem(13),
      color: '#6C6C6C',
      marginTop: 0,
    },
  })
);
export default ContractsMadeTable;
