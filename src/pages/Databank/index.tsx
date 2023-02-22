import { Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer';
import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import responsibilities from '../../assets/tietopankki/vastuualueet.json'
import { roles } from '../../types/types'
import hp from '../../assets/pictures/henkilostopalveluyritys.svg'
import company from '../../assets/pictures/kayttajayritys.svg'
import worker from '../../assets/pictures/vuokratyontekija.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import topArrow from '../../assets/icons/sivunalkuun.svg'
import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import Ingressi from '../../components/Ingressi';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2rem',
    },
}))

export interface DatabankProps { }
const Databank: React.FC<DatabankProps> = () => {

    const classes = useStyles()
    const theme = useTheme()
    const [steps, setSteps] = useState(responsibilities.worker)
    const [header, setHeader] = useState<string>('Vuokratyöntekijä')
    const { t } = useTranslation();
    const [colors, setColors] = useState({ agency: "#C0CFFA", business: "#F47D20", worker: "#F47D20" })

    const handleSwitch = (role: roles) => {
        switch (role) {
            case roles.Agency:
                setColors({ ...colors, agency: "#C0CFFA", business: "#F47D20", worker: "#F47D20" })
                setHeader('Vuokratyöntekijä')
                setSteps(responsibilities.worker)
                break
            case roles.Business:
                setColors({ ...colors, agency: "#F47D20", business: "#C0CFFA", worker: "#F47D20" })
                setHeader('Vuokratyöfirma')
                setSteps(responsibilities.agency)
                break
            case roles.Worker:
                setColors({ ...colors, agency: "#F47D20", business: "#F47D20", worker: "#C0CFFA" })
                setHeader('Käyttäjäyritys')
                setSteps(responsibilities.business)
                break
        }
    }

    const handleToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const ingressi_header = "instructions"
    const summary = "instructions_summary"

    return (
      <Grid container className={classes.root}>
        <Ingressi header={ingressi_header} summary={summary}></Ingressi>
        <Grid style={{ backgroundColor: "#F47D20", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: '15px' }} item >
          <div style={{ backgroundColor: "#F47D20", width: "60%", display: "flex", justifyContent: "evenly", alignItems: "center" }}>
            <img style={{ width: "30%", padding: '30px'}} src={hp}></img>
            <img style={{ width: "30%", padding: '30px' }} src={company}></img>
            <img style={{ width: "30%", padding: '30px' }} src={worker}></img>
          </div>
        </Grid>
        <Grid style={{ backgroundColor: "#F47D20", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} item>
          <div style={{ backgroundColor: "#F47D20", width: "60%", display: "flex", justifyContent: "evenly", alignItems: "center", paddingBottom: '15px' }}>
            <button onClick={() => handleSwitch(roles.Agency)} style={{ backgroundColor: colors.agency }} className="responsibilities-button">{t('agency')}</button>
            <button onClick={() => handleSwitch(roles.Business)} style={{ backgroundColor: colors.business }} className="responsibilities-button">{t('business')}</button>
            <button onClick={() => handleSwitch(roles.Worker)} style={{ backgroundColor: colors.worker }} className="responsibilities-button">{t('worker')}</button>
          </div>
        </Grid>

      <div style={{ backgroundColor: "#FFDCBF", width: "100%", padding: "0" }}>
        <div style={{ backgroundColor: "#FFDCBF", width: "60%", margin: "auto", alignItems: "center", paddingTop: '15px' }}>
          {steps.map((step, index) => (
            <Accordion defaultExpanded key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
              <Typography style={{fontWeight: 'bold'}}>{step.tip}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li key={index}>{step.details}</li>
                </ul>
              </AccordionDetails>
            </Accordion>
          ))}
          <div style={{ width: "100%", display: "flex", justifyContent: "right", padding: "10px" }}>
            <img style={{ width: "30px", height: "30px"}} onClick={handleToTop} src={topArrow}></img>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Grid>
    );
}
export default Databank

