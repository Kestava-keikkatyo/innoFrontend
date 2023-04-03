import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next';
import Ingressi from '../../components/Ingressi'
import Footer from '../../components/Footer';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { createTheme, Grid, IconButton, ThemeProvider } from '@mui/material'
React.useLayoutEffect = React.useEffect
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import Form1 from './DatabankForms/form1';
import Form2 from './DatabankForms/form2';
import Form3 from './DatabankForms/form3';
import Form4 from './DatabankForms/form4';
import Form5 from './DatabankForms/form5';

const BestPractices: React.FC = () => {
    const { t } = useTranslation();
    const ingressi_header = "forms"
    const summary = "forms_summary"
    const formNames = [{ header: t("form1HeaderText"), content: t("form1SubHeader") }, { header: t("form2HeaderText"), content: t("form2SubHeader") }, { header: t("form3HeaderText"), content: t("form3SubHeader") }, { header: t("form4HeaderText"), content: t("form4SubHeader") }, { header: t("form5HeaderText"), content: t("form5SubHeader") }]; const [formVisibility, setFormVisibility] = useState('hidden');

    const theme = createTheme({
        typography: {
            fontFamily: 'Montserrat, serif',
            allVariants: {
                color: "#2C2C2C"
            },
        },
    });

    const printRef1 = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const printRef2 = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const printRef3 = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const printRef4 = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const printRef5 = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    const handlePrintForm1 = async () => {
        const element = printRef1.current;
        printManyPages(element)
    };

    const handlePrintForm2 = async () => {
        const element = printRef2.current;
        printManyPages(element)
    };

    const handlePrintForm3 = async () => {
        const element = printRef3.current;
        printManyPages(element)
    };

    const handlePrintForm4 = async () => {
        const element = printRef4.current;
        printManyPages(element)
    };

    const handlePrintForm5 = async () => {
        const element = printRef5.current;
        printManyPages(element)
    };

    {/*Print many pdf pages and create new jsPDF*/ }
    async function printManyPages(element: HTMLElement) {
        element.removeAttribute('hidden')
        const canvas = await html2canvas(element);

        var imgData = canvas.toDataURL('image/png');
        var imgWidth = 210;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        var doc = new jsPDF('p', 'mm');
        var position = 0;

        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        element.setAttribute('hidden', 'true')
        doc.save('file.pdf');
    }

    return (
        <ThemeProvider theme={theme}>
            <div style={{ width: '100%', marginTop: '2rem' }}>
                <Ingressi header={ingressi_header} summary={summary}></Ingressi>
                <Grid sx={{ width: { xs: '90%', md: '60%' , sm: '90%'} }} style={{ margin: 'auto', padding: '5px 5px 5px 5px', marginBottom: '15px' }}>
                    <div style={{ backgroundColor: "#DBE4FC" }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 10px 0px 10px' }}>
                            <IconButton aria-label="share" onClick={handlePrintForm1}><SaveAltIcon /></IconButton>
                            <Typography style={{ fontWeight: 'bold', marginLeft: '10px' }}>{t('form1HeaderText')}</Typography>
                        </div>
                        <Typography style={{ marginLeft: '60px', paddingBottom: '10px', marginBottom: '20px' }}>{t('form1SubHeader')}</Typography>
                    </div>
                    <div style={{ backgroundColor: "#DBE4FC" }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 10px 0px 10px' }}>
                            <IconButton aria-label="share" onClick={handlePrintForm2}><SaveAltIcon /></IconButton>
                            <Typography style={{ fontWeight: 'bold', marginLeft: '10px' }}>{t('form2HeaderText')}</Typography>
                        </div>
                        <Typography style={{ marginLeft: '60px', paddingBottom: '10px', marginBottom: '20px' }}>{t('form2SubHeader')}</Typography>
                    </div>
                    <div style={{ backgroundColor: "#DBE4FC" }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 10px 0px 10px' }}>
                            <IconButton aria-label="share" onClick={handlePrintForm3}><SaveAltIcon /></IconButton>
                            <Typography style={{ fontWeight: 'bold', marginLeft: '10px' }}>{t('form3HeaderText')}</Typography>
                        </div>
                        <Typography style={{ marginLeft: '60px', paddingBottom: '10px', marginBottom: '20px' }}>{t('form3SubHeader')}</Typography>
                    </div>
                    <div style={{ backgroundColor: "#DBE4FC" }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 10px 0px 10px' }}>
                            <IconButton aria-label="share" onClick={handlePrintForm4}><SaveAltIcon /></IconButton>
                            <Typography style={{ fontWeight: 'bold', marginLeft: '10px' }}>{t('form4HeaderText')}</Typography>
                        </div>
                        <Typography style={{ marginLeft: '60px', paddingBottom: '10px', marginBottom: '20px' }}>{t('form4SubHeader')}</Typography>
                    </div>
                    <div style={{ backgroundColor: "#DBE4FC" }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 10px 0px 10px' }}>
                            <IconButton aria-label="share" onClick={handlePrintForm5}><SaveAltIcon /></IconButton>
                            <Typography style={{ fontWeight: 'bold', marginLeft: '10px' }}>{t('form5HeaderText')}</Typography>
                        </div>
                        <Typography style={{ marginLeft: '60px', paddingBottom: '30px', marginBottom: '20px' }}></Typography>
                    </div>

                    <div style={{ overflow: 'hidden', position: 'relative' }}>
                        <div id='form' style={{ position: 'absolute', right: '-50px' }} ref={printRef1} hidden><Form1 /></div>
                    </div>
                    <div style={{ overflow: 'hidden', position: 'relative' }}>
                        <div id='form' style={{ position: 'absolute', right: '-50px' }} ref={printRef2} hidden><Form2 /></div>
                    </div>
                    <div style={{ overflow: 'hidden', position: 'relative' }}>
                        <div id='form' style={{ position: 'absolute', right: '-50px' }} ref={printRef3} hidden><Form3 /></div>
                    </div>
                    <div style={{ overflow: 'hidden', position: 'relative' }}>
                        <div id='form' style={{ position: 'absolute', right: '-50px' }} ref={printRef4} hidden><Form4 /></div>
                    </div>
                    <div style={{ overflow: 'hidden', position: 'relative' }}>
                        <div id='form' style={{ position: 'absolute', right: '-50px' }} ref={printRef5} hidden><Form5 /></div>
                    </div>
                </Grid>
                <Footer></Footer>
            </div>
        </ThemeProvider>
    )
}
export default BestPractices




