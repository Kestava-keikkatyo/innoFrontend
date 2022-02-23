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
  Theme,
  useTheme,
  useMediaQuery,
  Tooltip,
} from '@mui/material';
import withStyles from '@mui/styles/withStyles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { useSelector } from 'react-redux';
//import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'
import VisibilityIcon from '@mui/icons-material/Visibility';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
} from '@mui/material';

import { useDispatch } from 'react-redux';
import { getFormById } from '../../actions/formActions';
import { useHistory } from 'react-router';
import formServices from '../../services/formServices';
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import htmlToPdfmake from 'html-to-pdfmake';
import Form from './Form';

import ReactDOMServer from 'react-dom/server';

import { fetchFormList } from '../../actions/formListActions';
import { Search } from '@mui/icons-material';
//import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
/**
 * @component
 * @desc A table to get and search for my forms.
 */
const CommunityFormsTable: React.FC<any> = () => {
  const forms = useSelector((state: any) => state.formList.communityForms);
  const communityForms : any[] = Array.from(forms);

  const [filter, setFilter] = React.useState('');

  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md')); // sm: korkeintaan 960px

  const dispatch = useDispatch();

  const history = useHistory();

  const { t } = useTranslation();

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
        color: '#EB5A02',
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
              <StyledTableCell align="left">{t('title')}</StyledTableCell>
              <StyledTableCell align="left">{t('description')}</StyledTableCell>
              <StyledTableCell align="left">{t('preview')}</StyledTableCell>
              <StyledTableCell align="left">{t('download')}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {communityForms &&
              communityForms
                .filter((form: any) =>
                  form.title.toLowerCase().includes(filter.toLowerCase())
                )
                .map((form: any) => (
                  <StyledTableRow key={form._id}>
                    <TableCell align="left">{form.title}</TableCell>
                    <TableCell align="left">{form.description}</TableCell>

                    <TableCell padding="none" style={{ paddingLeft: 16 }}>
                      <IconButton
                        aria-label="add to favorites"
                        onClick={() => handlePreview(form._id)}
                        size="large">
                        <VisibilityIcon />
                      </IconButton>
                    </TableCell>

                    <TableCell padding="none" style={{ paddingLeft: 24 }}>
                      <IconButton aria-label="share" onClick={() => handleDownload(form._id)} size="large">
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
    return communityForms &&
    communityForms
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
                <IconButton onClick={() => handlePreview(form._id)} size="large">
                  <VisibilityIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Download pdf" placement="top" arrow>
                <IconButton onClick={() => handleDownload(form._id)} size="large">
                  <SaveAltIcon />
                </IconButton>
              </Tooltip>
            </AccordionActions>
          </Accordion>
        </div>
      ));
  };

  if (!communityForms)
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
              placeholder={t('search_by_title')}
              value={filter}
              onChange={handleFilterchange}
            />
            <IconButton size="large">
              <Search />
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
  })
);

export default CommunityFormsTable;
