import React from 'react'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Ingressi from '../../components/Ingressi'
import Footer from '../../components/footer';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { IconButton } from '@mui/material'

const BestPractices: React.FC = () => {
    const { t } = useTranslation();
    const ingressi_header = "forms"
    const summary = "forms_summary"
    const forms = ["LOMAKE 1", "LOMAKE 2", "LOMAKE 3", "LOMAKE 4", "LOMAKE 5"];

    const handleDownload = () => {
        // using Java Script method to get PDF file
        fetch('../../pages/RentalWorkModelPage/WorkerSteps/Forms/CustomerContractForm.tsx').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }

  return (
    <div style={{ width: '100%', marginTop: '2rem'}}>
      <Ingressi header={ingressi_header} summary={summary}></Ingressi>
        {forms.map((form, i) => (
          <div key={i} style={{ width: '60%', margin: 'auto', backgroundColor: "#DBE4FC", padding: '5px 5px 5px 5px', marginBottom: '15px'}}>
            <Typography style={{ fontWeight: 'bold' }}>{form}<IconButton aria-label="share" onClick={() => handleDownload()}><SaveAltIcon/></IconButton></Typography>
          </div>
        ))}
      <Footer></Footer>
    </div>
  )
}
export default BestPractices
