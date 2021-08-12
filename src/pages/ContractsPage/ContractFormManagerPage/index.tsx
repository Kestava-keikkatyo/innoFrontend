import { Container } from '@material-ui/core'
import React from 'react'

import { useSelector } from 'react-redux'

import { Button, Grid, Typography } from '@material-ui/core'

import { makeStyles} from '@material-ui/core/styles';

import { useTranslation } from 'react-i18next'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Link, useHistory} from 'react-router-dom'
import pdfMake from 'pdfmake/build/pdfmake'
import ReactDOMServer from 'react-dom/server'
import Form from '../../FormsPage/Form'
import htmlToPdfmake from 'html-to-pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts.js';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


/**
 * @component
 * @desc A parent component to business contract form preview page.
 * Loops through all questions and shows corresponding
 * type of component.
 */
const ContractFormManagerPage: React.FC = () => {
  const businessContractForm:any = useSelector((state: any) => state.businessContractForm)

  const classes = useStyles();
  const history:any = useHistory()
  /*
  const location:any = useLocation()

  const formId:any = location.state.formId

  console.log("contract form manager:formId:", formId)

  useEffect(() => {

    dispatch(getFormByIdAndSetBusinessContractForm(formId))

  }, [formId, dispatch])
  */

  const { t } = useTranslation()

  console.log("contract form manager: contract form: ", businessContractForm)

  const handlePreview = () => {

    history.push('/contracts/contract-form-manager/contract-form-preview')
  }

  const handleEdit = () => {

    history.push('/contracts/contract-form-manager/contract-form-edit')
  }

  // Print PDF
  const handleDownload = () => {


    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    // pdf content
    let content:any = []

    let html = ReactDOMServer.renderToString(<Form currentForm={businessContractForm}/>)
    let htmlForm:any = htmlToPdfmake(html);

    content.push(htmlForm)

    // pdf document
    var doc = {
        content: content
    };

    pdfMake.createPdf(doc).download(businessContractForm.title);
  }

  return (
    <Container>
        <Grid container direction="row"
            justify="space-between">
            <Grid item xs={6}>
            <Typography variant="h4" color="secondary" >
                Contract Form Manager
            </Typography>
            </Grid>
            <Grid item xs={6} >
            <Grid container direction="row-reverse">
                <Button>
                <Link to="/contracts">{t("back")}</Link>
                </Button>
            </Grid>
            </Grid>
        </Grid>

        <Card className="contract-form-card">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {businessContractForm.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {businessContractForm.description}
                </Typography>
                <Typography variant="body2" component="p">
                    {businessContractForm.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={handlePreview}>{t("preview")}</Button>
                <Button size="small" color="primary"    onClick={handleEdit}>{t("edit")}</Button>
                <Button size="small" color="primary" onClick={handleDownload}>{t("download_pdf")}</Button>
            </CardActions>

        </Card>



    </Container>
  )
}



export default ContractFormManagerPage