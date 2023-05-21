import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next';
import Ingressi from '../../components/Ingressi'
import Footer from '../../components/Footer';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { createTheme, Grid, IconButton, ThemeProvider } from '@mui/material'
React.useLayoutEffect = React.useEffect
import form1 from '../../assets/forms/form1.pdf'
import form2 from '../../assets/forms/form2.pdf'
import form3 from '../../assets/forms/form3.pdf'
import form4 from '../../assets/forms/form4.pdf'
import form5 from '../../assets/forms/form5.pdf'

const BestPractices: React.FC = () => {
    const { t } = useTranslation();
    const ingressi_header = "forms"
    const summary = "forms_summary"
    const formNames = [{ header: t("form1HeaderText"), content: t("form1SubHeader") }, { header: t("form2HeaderText"), content: t("form2SubHeader") }, { header: t("form3HeaderText"), content: t("form3SubHeader") }, { header: t("form4HeaderText"), content: t("form4SubHeader") }, { header: t("form5HeaderText"), content: t("form5SubHeader") }]; 
    const forms = [form1, form2, form3, form4, form5];

    const theme = createTheme({
        typography: {
            fontFamily: 'Montserrat, serif',
            allVariants: {
                color: "#2C2C2C"
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div style={{ width: '100%', marginTop: '2rem' }}>
                <Ingressi header={ingressi_header} summary={summary}></Ingressi>
                <Grid sx={{ width: { xs: '90%', md: '60%' , sm: '90%'} }} style={{ margin: 'auto', padding: '5px 5px 5px 5px', marginBottom: '15px' }}>
                {formNames.map((label, index) => (
                    <div style={{ backgroundColor: "#DBE4FC" }}>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '10px 10px 0px 10px' }}>
                        <a className="one" href = {forms[index]} target = "_blank"><IconButton aria-label="share"><SaveAltIcon /></IconButton></a>
                            <Typography style={{ fontWeight: 'bold', marginLeft: '10px' }}>{formNames[index].header}</Typography>
                        </div>
                        <Typography style={{ marginLeft: '60px', paddingBottom: '10px', marginBottom: '20px' }}>{formNames[index].content}</Typography>
                    </div>
                         ))}
                </Grid>
                <Footer></Footer>
            </div>
        </ThemeProvider>
    )
}
export default BestPractices




