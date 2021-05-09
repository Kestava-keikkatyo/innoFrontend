import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import bestPractices from '../../assets/tietopankki/hyvat-kaytannot.json'

const BestPractices: React.FC = () => {
  return (
    <div style={{ width: '100%', marginTop: '2rem', marginBottom: '2rem' }}>
      <Typography style={{ marginBottom: '1rem' }} variant="h4" color="primary">
        Hyvät käytännöt
      </Typography>
      {bestPractices.map((e, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5">{e.title}</Typography>
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
