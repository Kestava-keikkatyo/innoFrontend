import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography'
import { Accordion, AccordionDetails, AccordionSummary, Grid } from '@mui/material'
import responsibilities from '../../assets/tietopankki/vastuualueet.json'
import { roles } from '../../types/types'
import hp from '../../assets/pictures/henkilostopalveluyritys.svg'
import company from '../../assets/pictures/kayttajayritys.svg'
import worker from '../../assets/pictures/vuokratyontekija.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useTranslation } from 'react-i18next';
import topArrow from '../../assets/icons/sivunalkuun.svg'
import Footer from '../../components/Footer';
import Ingressi from '../../components/Ingressi';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2rem',
        width: '100%'
    },
}))

export interface RoleResponsibilitiesProps { }

const RoleResponsibilities: React.SFC<RoleResponsibilitiesProps> = () => {
    const classes = useStyles()
    const theme = useTheme()
    const [steps, setSteps] = useState(responsibilities.worker)
    const [header, setHeader] = useState<string>('Vuokratyöntekijä')
    const { t } = useTranslation();
    const [colors, setColors] = useState({ agency: "#F47D20", business: "", worker: "" })

    const handleSwitch = (role: roles) => {
        switch (role) {
            case roles.Agency:
                setColors({ ...colors, agency: "#F47D20", business: "#C0CFFA", worker: "#C0CFFA" })
                setHeader('Vuokratyöntekijä')
                setSteps(responsibilities.worker)
                break
            case roles.Business:
                setColors({ ...colors, agency: "#C0CFFA", business: "#F47D20", worker: "#C0CFFA" })
                setHeader('Vuokratyöfirma')
                setSteps(responsibilities.agency)
                break
            case roles.Worker:
                setColors({ ...colors, agency: "#C0CFFA", business: "#C0CFFA", worker: "#F47D20" })
                setHeader('Käyttäjäyritys')
                setSteps(responsibilities.business)
                break
        }
    }

    const handleToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const ingressi_header = "responsibilities"
    const summary = "responsibilities_summary"

    return (
      <Grid container className={classes.root}>
        <Ingressi header={ingressi_header} summary={summary}></Ingressi>
        <Grid style={{ backgroundColor: "#C0CFFA", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: '15px' }} item >
          <div style={{ backgroundColor: "#C0CFFA", width: "60%", display: "flex", justifyContent: "evenly", alignItems: "center" }}>
            <img style={{ width: "30%", padding: '30px' }} src={hp}></img>
            <img style={{ width: "30%", padding: '30px' }} src={company}></img>
            <img style={{ width: "30%", padding: '30px' }} src={worker}></img>
          </div>
        </Grid>
        <Grid style={{ backgroundColor: "#C0CFFA", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} item>
          <div style={{ backgroundColor: "#C0CFFA", width: "60%", display: "flex", justifyContent: "evenly", alignItems: "center", paddingBottom: '15px' }}>
            <button onClick={() => handleSwitch(roles.Agency)} style={{ backgroundColor: colors.agency }} className="responsibilities-button">{t('agency')}</button>
            <button onClick={() => handleSwitch(roles.Business)} style={{ backgroundColor: colors.business }} className="responsibilities-button">{t('business')}</button>
            <button onClick={() => handleSwitch(roles.Worker)} style={{ backgroundColor: colors.worker }} className="responsibilities-button">{t('worker')}</button>
          </div>
        </Grid>
        <Grid style={{ backgroundColor: "#DBE4FC", width: "100%", padding: "0" }}>
          <div style={{ backgroundColor: "#DBE4FC", width: "60%", margin: "auto", alignItems: "center", paddingTop: '15px'}}>
            {steps.map((step, index) => (
              <Accordion defaultExpanded key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <Typography style={{fontWeight: 'bold'} }>{step.tip}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li key={index}>{step.details}</li>
                  </ul>
                </AccordionDetails>
              </Accordion>
            ))}
            <div style={{ width: "100%", display: "flex", justifyContent: "right", padding: "10px" }}>
              <img style={{ width: "30px", height: "30px" }} onClick={handleToTop} src={topArrow}></img>
            </div>
          </div>
        </Grid>
        <Footer></Footer>
      </Grid>
    );
}
export default RoleResponsibilities
