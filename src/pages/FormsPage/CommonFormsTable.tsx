import React, { useEffect } from 'react';

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography,
  Box,
  InputBase,
  Divider,
  withStyles,
  Theme,
  createStyles,
  useTheme,
  useMediaQuery,
  makeStyles,
  Tooltip,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import FileCopyIcon from '@material-ui/icons/FileCopy';
//import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import VisibilityIcon from '@material-ui/icons/Visibility';
import { setAlert } from '../../actions/alertActions';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
} from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { getFormById, submitForm } from '../../actions/formActions';
import { useHistory } from 'react-router';
import formServices from '../../services/formServices';
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import htmlToPdfmake from 'html-to-pdfmake';
import Form from './Form';

import { useTranslation } from 'react-i18next'
import ReactDOMServer from 'react-dom/server';

import { fetchFormList } from '../../actions/formListActions';
import { SearchIcon } from '@material-ui/data-grid';
//import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/**
 * @component
 * @desc A table to get and search for my forms.
 */
const CommonFormsTable: React.FC<any> = () => {
  const commonForms = useSelector((state: any) => state.formList.commonForms);

  const [filter, setFilter] = React.useState('');

  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm')); // sm: korkeintaan 960px

  const dispatch = useDispatch();

  const { t } = useTranslation()

  const history = useHistory();

  useEffect(() => {
    dispatch(fetchFormList());
  }, [dispatch]);

  // handle user input in the search field
  const handleFilterchange = (event: any) => {
    setFilter(event.target.value);
  };

  const handlePreview = (formId: any) => {
    dispatch(getFormById(formId));
    history.push({ pathname: '/forms/preview' });
  };

  const handleCopy = async (formId: any) => {
    const form: any = await formServices.fetchFormById(formId);
    form._id = '';
    form.common = false;
    dispatch(submitForm(form));
    dispatch(setAlert('Form copied successfully!'));
    history.push('/forms');
  };

  const handleDownload = async (formId: any) => {
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

  // Table head styles
  const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
      head: {
        backgroundColor: '#CCCCCC',
        color: '#212121',
      },
    })
  )(TableCell);

  // Table row styles
  const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
      },
    })
  )(TableRow);

  // Table view for desktop devices
  const tableView = () => {
    return (
      <TableContainer style={{ overflow: 'auto' }}>
        <Table aria-label="searched workers">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">{t("title")}</StyledTableCell>
              <StyledTableCell align="left">{t("description")}</StyledTableCell>
              <StyledTableCell align="left">{t("preview")}</StyledTableCell>
              <StyledTableCell align="left">{t("copy_to_my_forms")}</StyledTableCell>
              <StyledTableCell align="left">{t("download")}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {commonForms.docs &&
              commonForms.docs
                .filter((form: any) =>
                  form.title.toLowerCase().includes(filter.toLowerCase())
                )
                .map((form: any) => (
                  <StyledTableRow key={form._id}>
                    <TableCell align="left">{form.title}</TableCell>
                    <TableCell align="left">{form.description}</TableCell>

                    <TableCell padding="none" align="center">
                      <IconButton
                        aria-label="add to favorites"
                        onClick={() => handlePreview(form._id)}
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </TableCell>

                    <TableCell padding="none" align="center">
                      <IconButton
                        aria-label="share"
                        onClick={() => handleCopy(form._id)}
                      >
                        <FileCopyIcon />
                      </IconButton>
                    </TableCell>

                    <TableCell padding="none" align="center">
                      <IconButton
                        aria-label="share"
                        onClick={() => handleDownload(form._id)}
                      >
                        <SaveAltIcon />
                      </IconButton>
                    </TableCell>
                  </StyledTableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  // Accordion view for mobile devices
  const accordionView = () => {
    return (
      commonForms.docs &&
      commonForms.docs
        .filter((form: any) =>
          form.title.toLowerCase().includes(filter.toLowerCase())
        )
        .map((form: any) => (
          <div key={form._id} className={classes.accordionDiv}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  {form.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.description}>
                  {form.description}
                </Typography>
              </AccordionDetails>
              <AccordionActions>
                <Tooltip title="Preview form" placement="top" arrow>
                  <IconButton onClick={() => handlePreview(form._id)}>
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Copy to my forms" placement="top" arrow>
                  <IconButton onClick={() => handleCopy(form._id)}>
                    <FileCopyIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Download pdf" placement="top" arrow>
                  <IconButton onClick={() => handleDownload(form._id)}>
                    <SaveAltIcon />
                  </IconButton>
                </Tooltip>
              </AccordionActions>
            </Accordion>
          </div>
        ))
    );
  };

  if (!commonForms.docs)
    return (
      <Typography
        style={{ padding: '1rem' }}
        variant="h6"
        align="center"
        className="text-secondary"
      >
        no results
      </Typography>
    );

  return (
    <div>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="wrap"
      >
        <form>
          <Box display="flex" alignItems="center">
            <InputBase
              placeholder="Search by title..."
              value={filter}
              onChange={handleFilterchange}
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>
        </form>
      </Box>
      <Divider />
      {matches ? accordionView() : tableView()}
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    },
    TableCellIcon: {},
  })
);

export default CommonFormsTable;
