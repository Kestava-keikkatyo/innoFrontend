import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next';
import Ingressi from '../../components/Ingressi'
import Footer from '../../components/Footer';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { createTheme, Grid, IconButton, ThemeProvider } from '@mui/material'
React.useLayoutEffect = React.useEffect

//import Form from '../../pages/RentalWorkModelPage/WorkerSteps/Forms/CustomerContractForm'
import Form1 from './DatabankForms/form1';
import Form2 from './DatabankForms/form2';
import Form3 from './DatabankForms/form3';
import Form4 from './DatabankForms/form4';
import Form5 from './DatabankForms/form5';
import Form from '../../pages/FormsPage/';
//@ts-ignore @TODO fix this ts-ignore
import * as html2pdf from 'html2pdf.js';
import ReactDOMServer from 'react-dom/server';

const BestPractices: React.FC = () => {
    const { t } = useTranslation();
    const ingressi_header = "forms"
    const summary = "forms_summary"
    const formNames = [{ header: t("form1HeaderText"), content: t("form1SubHeader") }, { header: t("form2HeaderText"), content: t("form2SubHeader") }, { header: t("form3HeaderText"), content: t("form3SubHeader") }, { header: t("form4HeaderText"), content: t("form4SubHeader") }, { header: t("form5Header"), content: t("") }];
    //const [pdfName, setPdfName] = useState('');

    const theme = createTheme({
        typography: {
            fontFamily: 'Montserrat, serif',
            allVariants: {
                color: "#2C2C2C"
            },
        },
    });

    function handleDownload(i: number): void {

        let form;
        switch (i) {
            case 0:
                form = ReactDOMServer.renderToString(<Form1 />)
                //setPdfName('LOMAKE 1 - ASIAKASSOPIMUKSEEN LIITTYVÄT TYÖTURVALLISUUS- JA TYÖHYVINVOINTIASIAT');
                break
            case 1:
                form = ReactDOMServer.renderToString(<Form2 />)
                //setPdfName('LOMAKE 2 – TYÖNTEKIJÄN YLEISPEREHDYTYS');
                break
            case 2:
                form = ReactDOMServer.renderToString(<Form3 />)
                //setPdfName('LOMAKE 3 – TYÖNOPASTUS (käyttäjäyrityksen työnopastaja täyttää');
                break
            case 3:
                form = ReactDOMServer.renderToString(<Form4 />)
                //setPdfName('LOMAKE 4 – TOIMINNAN ARVIOINTI');
                break
            case 4:
                form = ReactDOMServer.renderToString(<Form5 />)
                //setPdfName('LOMAKE 5 – Perehdytys ja työnopastus kiireellisissä tilanteissa');
                break
        }

        //Set options for html2pdf conversion
        var options = {
            margin: 0.5,
            filename: "form.pdf",
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        //Create the PDF from string content with selected options
        html2pdf()
            .set(options)
            .from(form)
            .save()
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={{ width: '100%', marginTop: '2rem' }}>
                <Ingressi header={ingressi_header} summary={summary}></Ingressi>
                {formNames.map((formName, i) => (
                    <Grid key={i} style={{ width: '60%', margin: 'auto', backgroundColor: "#DBE4FC", padding: '5px 5px 5px 5px', marginBottom: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 10px 0px 10px' }}>
                            <IconButton aria-label="share" onClick={() => handleDownload(i)}><SaveAltIcon /></IconButton>
                            <Typography style={{ fontWeight: 'bold', marginLeft: '10px' }}>{formName.header}</Typography>
                        </div>
                        <Typography style={{ marginLeft: '60px', paddingBottom: '10px' }}>{formName.content}</Typography>
                    </Grid>
                ))}
                <Footer></Footer>
            </div>
        </ThemeProvider>
    )
}
export default BestPractices




