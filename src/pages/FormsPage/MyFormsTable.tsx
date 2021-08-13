import React, { useEffect } from 'react'

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
  makeStyles,
  useTheme,
  useMediaQuery,
  Tooltip
} from '@material-ui/core'
import { useSelector } from 'react-redux'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
} from "@material-ui/core";

import EditIcon from '@material-ui/icons/Edit'
//import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import DeleteIcon from '@material-ui/icons/Delete';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

import { useDispatch } from "react-redux"
import { DeleteFormById, getFormById } from "../../actions/formActions"
import { useHistory } from "react-router"
import formServices from "../../services/formServices"
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import htmlToPdfmake from 'html-to-pdfmake'
import Form from './Form'
import { useTranslation } from 'react-i18next'
import ReactDOMServer from "react-dom/server";
import { setAlert } from '../../actions/alertActions'
import { fetchFormList } from '../../actions/formListActions'
import { SearchIcon } from '@material-ui/data-grid'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";



/**
 * @component
 * @desc A table to get and search for my forms.
 */
const MyFormsTable: React.FC<any> = () => {

  const  myForms:any  = useSelector((state: any) => state.formList.myForms)

  const [filter, setFilter] = React.useState('')

  const dispatch = useDispatch()

  const history = useHistory()

  const classes = useStyles();

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm')) // sm: korkeintaan 960px

  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchFormList())
  }, [dispatch])

  // handle user input in the search field
  const handleFilterchange = (event:any) => {
    setFilter(event.target.value)

  }

  const handleEdit = (formId: any) => {
    dispatch(getFormById(formId))
    history.push(`/forms/edit-form`)
  }

  const handleDelete = (formId: any) => {
    dispatch(DeleteFormById(formId))
    dispatch(setAlert("Form deleted successfully!"))
  }

  const handleDownload = async (formId: any) => {

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

  // Table head styles
  const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: '#CCCCCC',
      color: '#212121',
    }
  }),
  )(TableCell);


  // Table row styles
  const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
      },
    }),
  )(TableRow);


  // Table view for desktop devices
  const tableView = () => {
    return (
    <TableContainer style={{overflow:'auto'}}>
      <Table aria-label="searched workers">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">{t("title")}</StyledTableCell>
            <StyledTableCell align="left">{t("description")}</StyledTableCell>
            <StyledTableCell align="left">{t("edit")}</StyledTableCell>
            <StyledTableCell align="left">{t("delete")}</StyledTableCell>
            <StyledTableCell align="left">{t("download")}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myForms.docs && myForms.docs.filter((form: any) => (
            form.title.toLowerCase().includes(filter.toLowerCase())
          )).map((form: any) => (
            <StyledTableRow key={form._id}>
            <TableCell align="left">{form.title}</TableCell>
            <TableCell align="left">{form.description}</TableCell>

            <TableCell padding='none' align="center">
              <IconButton aria-label="add to favorites" onClick={() => handleEdit(form._id)}>
                  <EditIcon />
              </IconButton>
            </TableCell>

            <TableCell padding="none" align="center">
              <IconButton aria-label="share" onClick={() => handleDelete(form._id)}>
                  <DeleteIcon />
              </IconButton>
            </TableCell>

            <TableCell padding="none" align="center">
              <IconButton aria-label="share" onClick={() => handleDownload(form._id)}>
                  <SaveAltIcon />
              </IconButton>
            </TableCell>

          </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    )
  }

  // Accordion view for mobile devices
  const accordionView = () => {

    return (
      myForms.docs && myForms.docs.filter((form: any) => (
        form.title.toLowerCase().includes(filter.toLowerCase())
      )).map((form: any) => (
        <div key={form._id} className={classes.accordionDiv}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{form.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.description}>{form.description}</Typography>
            </AccordionDetails>
            <AccordionActions>

              <Tooltip title="Edit form" placement="top" arrow>
                <IconButton onClick={() => handleEdit(form._id)}>
                  <EditIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Delete form" placement="top" arrow>
                <IconButton onClick={() => handleDelete(form._id)}>
                  <DeleteIcon />
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

    )

  }

  if(!myForms.docs) return (
    <Typography style={{ padding: '1rem' }} variant="h6" align="center" className="text-secondary">
      {t("no_results")}
    </Typography>
  )

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
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordionDiv: {
      width: '100%',
      marginTop: 12,
      border: '1px solid #E0E0E0',
      borderRadius: 5
    },
    heading: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightRegular,
    },
    description: {
      fontSize: theme.typography.pxToRem(13),
      color: '#6C6C6C'
    },
  }),
);

export default MyFormsTable