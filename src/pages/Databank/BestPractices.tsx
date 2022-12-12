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

const BestPractices: React.FC = () => {
  const { t } = useTranslation();
  let BestPractices;
    if(i18next.language === 'en') {
      BestPractices = bestPractices_en;
    } else {
      BestPractices = bestPractices;
    }
  return (
    <div style={{ width: '100%', marginTop: '2rem', marginBottom: '2rem' }}>
      <Typography style={{ marginBottom: '1rem' }} variant="h1" className='header' color="primary">
        {t('good_practises')}
      </Typography>
      {BestPractices.map((e, i) => (
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
