import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import bestPractices from '../../assets/tietopankki/hyvat-kaytannot.json'
import bestPractices_en from '../../assets/tietopankki/hyvat-kaytannot-en.json'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import makeStyles from '@mui/styles/makeStyles';
import Ingressi from '../../components/Ingressi'
import Footer from '../../components/Footer'
import topArrow from '../../assets/icons/sivunalkuun.svg'
import { Grid } from '@mui/material'
import bestPracticesImage from '../../assets/pictures/vtm_A_hyvat_kaytannot_2.png'
import RentalWorkModel from '../RentalWorkModelPage/RentalWorkModel'

const BestPractices: React.FC = () => {

  const useStyles = makeStyles(() => ({
    root: {
      marginTop: '2rem',
    },
  }))

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  let BestPractices;
  if (i18next.language === 'en') {
    BestPractices = bestPractices_en;
  } else {
    BestPractices = bestPractices;
  }

  const { t } = useTranslation();
  const classes = useStyles()
  const header = "good_practises";
  const summary = "good_practises_summary";

  return (
    <Grid container className={classes.root}>

      {/* Ingressi */}
      <Ingressi header={header} summary={summary}></Ingressi>

      <Grid style={{ width: '100%', backgroundColor: "#DBE4FC" }}>
        <Grid sx={{ width: { xs: '90%', md: '60%' } }} style={{ paddingTop: '30px', margin: 'auto' }}>
            <img style={{width: '100%'}} src={bestPracticesImage}></img>
          <div style={{ width: "100%", display: "flex", justifyContent: "right", padding: "10px" }}>
            <img style={{ width: "30px", height: "30px" }} onClick={handleToTop} src={topArrow}></img>
          </div>
        </Grid>
      </Grid>
      <Footer></Footer>
    </Grid>
  )
}
export default BestPractices

     /*{BestPractices.map((e, i) => (
            <Accordion defaultExpanded key={i} style={{ borderRadius: '25px', backgroundColor: "#FDFDFD" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography style={{ fontWeight: 'bold', backgroundColor: "#FDFDFD" }} >{e.title}</Typography>
              </AccordionSummary>
              <AccordionDetails style={{ borderRadius: '25px' }}>
                {e.details.map((item, j) => (
                  <li style={{ listStyleType: "none" }} key={j}>{item}</li>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}*/