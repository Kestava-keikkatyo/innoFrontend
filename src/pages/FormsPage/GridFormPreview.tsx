import React from "react"
import { Card, CardContent, Typography, CardHeader, Avatar, IconButton, CardActions, Menu, MenuItem } from "@material-ui/core"
import EditIcon from '@material-ui/icons/Edit'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { GridFormPreviewProps } from "../../types/props"
import { useDispatch, useSelector } from "react-redux"
import { setFormById } from "../../actions/formActions"
import { useHistory } from "react-router"
import formServices from "../../services/formServices"

import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import htmlToPdfmake from 'html-to-pdfmake'

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
    dispatch(setFormById(formId))
    history.push(`/forms/newform`)
  }

  const handleDownload = async () => {
    let form:any = await formServices.fetchFormById(formId)
    console.log("form ", form)

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    // pdf styles
    let styles:any = {
      title: {
        fillColor: '#000',
        color:'#000',
        fontSize:16,
        bold: true,
        margin:[0,0,0,15]
      },
      description:{
        fillColor: '#000',
        color:'#00f',
        fontSize:12,
        margin:[0,0,0,15]
      },
      question: {
        width: '100%',
        fontSize: 14,
        bold: true,
        margin:[0,0,0,15],
      },
      answer: {
        width: '100%',
        fontSize: 12,
        margin:[0,0,0,15],
        color:'#57585a'
      },
      subTitle:{
        fontSize: 11,
        margin:[0,0,0,15],
        color:'darkGray'
      },
      date: {
        color:'#ff0000'
      },
      option:{
        width: '100%',
        fontSize: 12,
        color: 'red',
        margin:[0,0,0,15]
      }
    }

    // pdf content
    let content:any = []

    content.push([
      {text: formTitle,style: 'title'},
      {text: formDesc,style: 'description'}
    ]);


    {form.questions.map((q: any | null, k:number) => (

      // comment
      (q && q.questionType === 'comment' ? content.push(
          {text: q.title, style: 'question'}
        ) : null
      ),
      // text
      (q && q.questionType === 'text' ? content.push(
        [
          {text: q.title, style: 'question'},
          {text: q.subtitle,  style: 'subTitle'}
        ]
       ) : null
      ),
      // textarea
      (q && q.questionType === 'textarea' ? content.push(
        [
          {text: q.title, style: 'question'},
          {text: q.subtitle, style: 'subTitle'}
        ]
       ) : null
      ),
      // checkbox
      (q && q.questionType === 'checkbox' ? content.push(
        [
          {text: q.title, style: 'question'},
          {text: q.subtitle, style: 'subTitle'}
        ]
       ) : null
      ),
      // checkbox_group
      (q && q.questionType === 'checkbox_group' ? content.push(
        [
          {text: q.title, style: 'question'},
          {text: q.subtitle, style: 'subTitle'}
        ]
       ) : null,
       (q && q.questionType==='checkbox_group' && q.options ? q.options.map((option: any) => (
        (option ? content.push(
          {text: option, style: 'option'}
        ) : null)
       )): null)
      ),
      // radiobutton_group
      (q && q.questionType === 'radiobutton_group' ? content.push(
        [
          {text: q.title, style: 'question'},
          {text: q.subtitle, style: 'subTitle'}
        ]
       ) : null,
       (q && q.questionType==='radiobutton_group' && q.options ? q.options.map((option: any) => (
        (option ? content.push(
          {text: option, style: 'option'}
        ) : null)
       )): null)
      ),
      // radiobutton_group_horizontal
      (q && q.questionType === 'radiobutton_group_horizontal' ? content.push(
        [
          {text: q.title, style: 'question'},
          {text: q.subtitle, style: 'subTitle'} /*,
          {text: q.scaleOptionTitleCenter},
          {text: q.scaleOptionTitleLeft},
          {text:q.scaleOptionTitleRight} */
        ]
       ) : null,
       (q && q.questionType==='radiobutton_group_horizontal' && q.options ? q.options.map((option: any) => (
        (option ? content.push(
          {text: option, style: 'option'}
        ) : null)
       )): null)
      ),
      // "contact_information"
      (q && q.questionType === 'contact_information' ? content.push(
        [
          {text: q.title, style: 'question'},
          {text: q.subtitle, style: 'subTitle'}
        ]
       ) : null
      )

    ))
    };

    // test html to pdf make
    let p:any = htmlToPdfmake(`<p>date: 03.03.2017</p>`);
    content.push(p)

    // pdf document
    var doc = {
      content: content,
      styles: styles
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
