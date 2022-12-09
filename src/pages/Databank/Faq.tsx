import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import faq_general from '../../assets/tietopankki/frequent-questions-general.json'
import faq_general_en from '../../assets/tietopankki/frequent-questions-general-en.json'
import faq_worker from '../../assets/tietopankki/frequent-questions-worker.json'
import faq_worker_en from '../../assets/tietopankki/frequent-questions-worker-en.json'
import faq_agency from '../../assets/tietopankki/frequent-questions-agency.json'
import faq_agency_en from '../../assets/tietopankki/frequent-questions-agency-en.json'
import faq_business from '../../assets/tietopankki/frequent-questions-business.json'
import faq_business_en from '../../assets/tietopankki/frequent-questions-business-en.json'
import faq_databank from '../../assets/tietopankki/frequent-questions-databank.json'
import faq_databank_en from '../../assets/tietopankki/frequent-questions-databank-en.json'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


const BestPractices: React.FC = () => {
    const { t } = useTranslation();
    let Faq_general;
    if(i18next.language === 'en') {
        Faq_general = faq_general_en;
    } else {
        Faq_general = faq_general;
    }

    let Faq_worker;
    if(i18next.language === 'en') {
        Faq_worker = faq_worker_en;
    } else {
        Faq_worker = faq_worker;
    }

    let Faq_agency;
    if(i18next.language === 'en') {
        Faq_agency = faq_agency_en;
    } else {
        Faq_agency = faq_agency;
    }

    let Faq_business;
    if(i18next.language === 'en') {
        Faq_business = faq_business_en;
    } else {
        Faq_business = faq_business;
    }

    let Faq_databank;
    if(i18next.language === 'en') {
        Faq_databank = faq_databank_en;
    } else {
        Faq_databank = faq_databank;
    }
  return (
    <div style={{ width: '100%', marginTop: '2rem', marginBottom: '2rem' }}>
      <Typography style={{ marginBottom: '1rem' }} variant="h1" className='header' color="primary">
        {t("faq")}
      </Typography>
      <Typography style={{ marginBottom: '1rem', marginTop: '2rem'}} variant="h4" color="black">
        {t("general")}
      </Typography>
      {Faq_general.map((e, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h2" className='header2'>{e.title}</Typography>
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
      <Typography style={{ marginBottom: '1rem', marginTop: '2rem'}} variant="h4" color="black">
        {t("worker")}
        </Typography>
      {Faq_worker.map((e, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h2" className='header2'>{e.title}</Typography>
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
      <Typography style={{ marginBottom: '1rem', marginTop: '2rem'}} variant="h4" color="black">
        {t("agency")}
        </Typography>
      {Faq_agency.map((e, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h2" className='header2'>{e.title}</Typography>
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
      <Typography style={{ marginBottom: '1rem', marginTop: '2rem'}} variant="h4" color="black">
        {t("business")}
        </Typography>
      {Faq_business.map((e, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h2" className='header2'>{e.title}</Typography>
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
      <Typography style={{ marginBottom: '1rem', marginTop: '2rem'}} variant="h4" color="black">
        {t("databank")}
        </Typography>
      {Faq_databank.map((e, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h2" className='header2'>{e.title}</Typography>
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
    </div>
  )
}

export default BestPractices
