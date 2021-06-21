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
  createStyles
} from '@material-ui/core'
import { useSelector } from 'react-redux'

import EditIcon from '@material-ui/icons/Edit'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import DeleteIcon from '@material-ui/icons/Delete';

import { useDispatch } from "react-redux"
import { DeleteFormById, getFormById } from "../../actions/formActions"
import { useHistory } from "react-router"
import formServices from "../../services/formServices"
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import htmlToPdfmake from 'html-to-pdfmake'
import Form from './Form'

import ReactDOMServer from "react-dom/server";
import { setAlert } from '../../actions/alertActions'
import { fetchFormList } from '../../actions/formListActions'
import { SearchIcon } from '@material-ui/data-grid'


/**
 * @component
 * @desc A table to get and search for my forms.
 */
const MyFormsTable: React.FC<any> = () => {

  const  myForms  = useSelector((state: any) => state.formList.myForms)

  const [filter, setFilter] = React.useState('')

  const dispatch = useDispatch()

  const history = useHistory()

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


  if(!myForms.docs) return (
    <Typography style={{ padding: '1rem' }} variant="h6" align="center" className="text-secondary">
      no results
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
      <TableContainer style={{overflow:'auto'}}>
        <Table aria-label="searched workers">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Title</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">Edit</StyledTableCell>
              <StyledTableCell align="left">Delete</StyledTableCell>
              <StyledTableCell align="left">Download</StyledTableCell>
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

                <TableCell>
                  <IconButton aria-label="share" onClick={() => handleDelete(form._id)}>
                      <DeleteIcon />
                  </IconButton>
                </TableCell>

                <TableCell>
                  <IconButton aria-label="share" onClick={() => handleDownload(form._id)}>
                      <MoveToInboxIcon />
                  </IconButton>
                </TableCell>

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default MyFormsTable