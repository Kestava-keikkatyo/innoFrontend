import React from 'react'

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography
} from '@material-ui/core'

import { useSelector } from 'react-redux'

import EditIcon from '@material-ui/icons/Edit'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'

import { useDispatch } from "react-redux"

import { useHistory } from "react-router"
import formServices from "../../services/formServices"
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import htmlToPdfmake from 'html-to-pdfmake'
import Form from './Form'

import ReactDOMServer from "react-dom/server";


/**
 * @component
 * @desc A table to get and search for community forms.
 */
const CommunityFormsTable: React.FC<any> = () => {

  const { communityForms } = useSelector((state: any) => state.formList)

  const dispatch = useDispatch()

  const history = useHistory()


  const handlePreview= (formId: any) => {

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

  if(!communityForms.docs) return (
    <Typography style={{ padding: '1rem' }} variant="h6" align="center" className="text-secondary">
      no results
    </Typography>
  )

  return (
    <TableContainer>
      <Table aria-label="searched workers">
        <TableHead>
          <TableRow>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Preview</TableCell>
            <TableCell align="left">Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {communityForms.docs.map((form: any) => (
            <TableRow key={form._id}>
              <TableCell align="left">{form.title}</TableCell>
              <TableCell align="left">{form.description}</TableCell>

              <TableCell padding="none" align="left">
                <IconButton aria-label="add to favorites" onClick={() => handlePreview(form._id)}>
                    <EditIcon />
                </IconButton>
              </TableCell>

              <TableCell>
                <IconButton aria-label="share" onClick={() => handleDownload(form._id)}>
                    <MoveToInboxIcon />
                </IconButton>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CommunityFormsTable