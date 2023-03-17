import { Button, CardMedia, Container, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer';
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
React.useLayoutEffect = React.useEffect

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2rem',
    },
}))

export interface DatabankProps { }
const Databank: React.FC<DatabankProps> = () => {

    const classes = useStyles()
    const [steps, setSteps] = useState(responsibilities.worker)
    const { t } = useTranslation();
    const [colors, setColors] = useState({ agency: "#C0CFFA", business: "#F47D20", worker: "#F47D20" })

    const handleSwitch = (role: roles) => {
        switch (role) {
            case roles.Agency:
                setColors({ ...colors, agency: "#C0CFFA", business: "#F47D20", worker: "#F47D20" })
                setSteps(responsibilities.worker)
                break
            case roles.Business:
                setColors({ ...colors, agency: "#F47D20", business: "#C0CFFA", worker: "#F47D20" })
                setSteps(responsibilities.agency)
                break
            case roles.Worker:
                setColors({ ...colors, agency: "#F47D20", business: "#F47D20", worker: "#C0CFFA" })
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
        <div className={classes.root} style={{ justifyContent: 'center' }}>

            {/* Ingressi */}
            <Ingressi header={ingressi_header} summary={summary}></Ingressi>

            {/* Pictures and buttons (agency, business, worker) */}
            <Container style={{ backgroundColor: "#F47D20", maxWidth: 'none', paddingTop: '15px', justifyContent: 'center', display: 'flex' }}>
                <Grid container sx={{ width: { xs: '100%', sm: '90%', md: '60%' } }} spacing={0} justifyContent='space-evenly' style={{ flexDirection: 'row', flexWrap: 'nowrap' }} >
                    <Grid sx={{ flexDirection: 'column', wrap: 'no-wrap' }} item xs={4} sm={4} md={4} style={{ paddingLeft: '0', paddingBottom: '32px' }}>
                        <CardMedia
                            component="img"
                            image={hp}
                            style={{ width: '70%', margin: 'auto', marginBottom: '10px' }}
                        />
                        <Button onClick={() => handleSwitch(roles.Agency)} style={{ backgroundColor: colors.agency }} className="responsibilities-button">{t('agency')}</Button>
                    </Grid>
                    <Grid sx={{ flexDirection: 'column', wrap: 'no-wrap' }} item xs={4} sm={4} md={4} style={{ paddingLeft: '0', paddingBottom: '32px' }}>
                        <CardMedia
                            component="img"
                            image={company}
                            style={{ width: '70%', margin: 'auto', marginBottom: '10px' }}
                        />
                        <Button onClick={() => handleSwitch(roles.Business)} style={{ backgroundColor: colors.business }} className="responsibilities-button">{t('business')}</Button>
                    </Grid>
                    <Grid sx={{ flexDirection: 'column', wrap: 'no-wrap' }} item xs={4} sm={4} md={4} style={{ paddingLeft: '0', paddingBottom: '32px' }}>
                        <CardMedia
                            component="img"
                            image={worker}
                            style={{ width: '70%', margin: 'auto', marginBottom: '10px' }}
                        />
                        <Button onClick={() => handleSwitch(roles.Worker)} style={{ backgroundColor: colors.worker }} className="responsibilities-button">{t('worker')}</Button>
                    </Grid>
                </Grid>
            </Container>

            {/*Content (accordion)*/}
            <Grid container style={{ backgroundColor: "#FFDCBF" }}>
                <Grid sx={{ width: { xs: '90%', md: '60%' } }} style={{ backgroundColor: "#FFDCBF", margin: "auto", alignItems: "center", paddingTop: '30px' }}>
                    {steps.map((step, index) => (
                        <Accordion defaultExpanded key={index} style={{ borderRadius: '25px', backgroundColor: "#FDFDFD" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography style={{ fontWeight: 'bold', backgroundColor: "#FDFDFD" }}>{step.tip}</Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{ display: 'block', backgroundColor: "#FDFDFD", wordWrap: 'break-word', borderRadius: '25px' }}>
                                <li style={{ listStyleType: "none" }} key={index}>{step.details}</li>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                    <div style={{ width: "100%", display: "flex", justifyContent: "right", padding: "10px" }}>
                        <img style={{ width: "30px", height: "30px" }} onClick={handleToTop} src={topArrow}></img>
                    </div>
                </Grid>
            </Grid>
            <Footer></Footer>
        </div>
    );

}
export default Databank
