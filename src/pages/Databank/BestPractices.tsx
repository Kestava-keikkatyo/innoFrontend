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
      <div className={classes.root}>
        <Ingressi header={header} summary={summary}></Ingressi>
        <div style={{ width: '100%', backgroundColor: "#DBE4FC" }} >
          <div style={{ width: '60%', padding: '15px 0px 15px 0px', margin: 'auto'}}>
            {BestPractices.map((e, i) => (
              <Accordion key={i}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                <Typography style={{ fontWeight: 'bold' }} >{e.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {e.details.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ))}
            <div style={{ width: "100%", display: "flex", justifyContent: "right", alignItems: "right", padding: "10px" }}>
              <img style={{ width: "30px", height: "30px", alignContent: "right" }} onClick={handleToTop} src={topArrow}></img>
            </div>
          </div>
        </div>
      <Footer></Footer>
      </div>

  )
}

export default BestPractices
