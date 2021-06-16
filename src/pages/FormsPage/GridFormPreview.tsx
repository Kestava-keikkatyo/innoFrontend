import React from "react"
import { Card, CardContent, Typography, CardHeader, Avatar, IconButton, CardActions, Menu, MenuItem } from "@material-ui/core"
import EditIcon from '@material-ui/icons/Edit'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { GridFormPreviewProps } from "../../types/props"
import { useDispatch } from "react-redux"
import { getFormById } from "../../actions/formActions"
import { useHistory } from "react-router"
import formServices from "../../services/formServices"
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import htmlToPdfmake from 'html-to-pdfmake'
import Form from './Form'

import ReactDOMServer from "react-dom/server";

const FormMenuDropDown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return(
    <>
      <IconButton aria-label="forms-settings" aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="forms-settings"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Open as copy</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </>
  )
}

/**
 * @component
 * @desc Modular component that displays forms from store.
 * @param {string} formTitle - title of the form to be viewed.
 * @param {string} formDesc - description of the form.
 * @todo OnHover preview? PIP?
 * @todo for now reads data from a constant JSON file --> implement redux here.
 */
const GridFormPreview: React.FC<GridFormPreviewProps> = ({ formTitle, formDesc, formId }) => {
  const dispatch = useDispatch()
  const history = useHistory();
  const handleClick = () => {
    dispatch(getFormById(formId))
    history.push(`/forms/edit-form`)
  }

  const handleDownload = async () => {

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

    pdfMake.createPdf(doc).download(formTitle);

  }

  return (
    <li>
      <Card style={{width: '400px'}}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <FormMenuDropDown />
          }
          title={formTitle}
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {formDesc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={handleClick}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="share" onClick={handleDownload}>
            <MoveToInboxIcon />
          </IconButton>
        </CardActions>
      </Card>
    </li>
  )
}

export default GridFormPreview
