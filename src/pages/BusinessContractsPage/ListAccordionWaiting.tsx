import React from 'react'
import Typography from '@mui/material/Typography'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Theme,
  Divider,
  AccordionActions,
  Tooltip,
  IconButton,
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getByIdAndSetBusinessContractForm } from '../../actions/businessContractFormActions'
import businessContractFormService from '../../services/businessContractFormService'
import pdfMake from 'pdfmake/build/pdfmake.js'
import pdfFonts from 'pdfmake/build/vfs_fonts.js'
import htmlToPdfmake from 'html-to-pdfmake'
import ReactDOMServer from 'react-dom/server'
import Form from '../FormsPage/Form'
import VisibilityIcon from '@mui/icons-material/Visibility'
import SaveAltIcon from '@mui/icons-material/SaveAlt'
import { useTranslation } from 'react-i18next'

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
    color: 'black',
  },
  info: {
    display: 'column',
    width: '30rem',
  },
}))

/**
 * @component
 * @description
 * Could be refactored for archived contracts.
 * Currently not in practical use.
 */
export const ListAccordionWaiting = (prop: { contracts: any[] }) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const history = useHistory()

  // Preview business contract form

  const handleEsitteleLomaketta = (businessContractFormId: any) => {
    //alert(formId);
    dispatch(getByIdAndSetBusinessContractForm(businessContractFormId))
    history.push(`/business-contracts/business-contract-preview`)
  }

  // Print PDF
  const handleTulostaLomaketta = async (formId: any) => {
    let businessContractForm: any = await businessContractFormService.fetchBusinessContractFormById(
      formId,
    )
    console.log('businessContractForm ', businessContractForm)

    pdfMake.vfs = pdfFonts.pdfMake.vfs

    // pdf content
    let content: any = []

    let html = ReactDOMServer.renderToString(<Form currentForm={businessContractForm} />)
    let htmlForm: any = htmlToPdfmake(html)

    content.push(htmlForm)

    // pdf document
    var doc = {
      content: content,
    }

    pdfMake.createPdf(doc).download(businessContractForm.title)
  }

  const { contracts } = prop
  if (contracts.length < 1) {
    return <p>{t('no_results')}</p>
  } else
    return (
      <div className={classes.root}>
        {contracts.map((contract: any) => (
          <Accordion key={contract._id}>
            {console.log('contract', contract)}
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div className={classes.logoColumn}>
                <Avatar alt='Remy Sharp' src={contract.agency.profile.profilePicture} />
              </div>
              <div className={classes.column}>
                <Typography className={classes.heading}>{contract.agency.name}</Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.color}>Odottaa</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.info}>
                <Typography style={{ margin: '10px 5px' }}>
                  {t('email')}: {contract.agency.email}
                </Typography>
                <Divider />
                <Typography style={{ margin: '10px 5px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                <Button style={{ margin: '5px' }} color='primary' variant='contained'>
                  {t('website')}
                </Button>
              </div>
            </AccordionDetails>
            <AccordionActions>
              <Tooltip title='Esikatsele Lomakettä' placement='top' arrow>
                <IconButton
                  onClick={() => handleEsitteleLomaketta(contract.requestContracts.formId)}
                  size='large'
                >
                  <VisibilityIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title='Tulosta pdf' placement='top' arrow>
                <IconButton
                  onClick={() => handleTulostaLomaketta(contract.requestContracts.formId)}
                  size='large'
                >
                  <SaveAltIcon />
                </IconButton>
              </Tooltip>
            </AccordionActions>
          </Accordion>
        ))}
      </div>
    )
}
export default ListAccordionWaiting
