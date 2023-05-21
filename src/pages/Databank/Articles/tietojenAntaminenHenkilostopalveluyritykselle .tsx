import { Grid, Link } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from '@mui/styles';

const Article11 = () => {

    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item className={classes.gridItem}>Käyttäjäyrityksen on määriteltävä vuokratyön edellyttämät ammattitaitovaatimukset ja työn erityispiirteet ja ilmoitettava ne henkilöstöpalveluyritykselle ennen työn aloittamista. </Grid>
            <Grid item className={classes.gridItem}>Käyttäjäyrityksen on toimitettava henkilöstöpalveluyritykselle ne tiedot, jotka henkilöstöpalveluyritys työnantajana tarvitsee velvollisuuksiensa täyttämiseksi. Tällaisia tietoja ovat esimerkiksi tiedot työvuoroista ja toteutuneista työajoista.  </Grid>
            <p style={{ fontWeight: 'bold' }}>Keikkakaverin sisäiset linkit </p>
            <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>LOMAKE 1 - ASIAKASSOPIMUKSEEN LIITTYVÄT TYÖTURVALLISUUS- JA TYÖHYVINVOINTIASIAT </Link>
            <Grid item className={classes.gridItem} style={{ fontWeight: 'bold', display: 'inline-block', width: '100%' }}>Lisätietoa</Grid>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Työturvallisuuslaki 738/2002 3§.</Grid>
            <Link href="https://www.finlex.fi/fi/laki/ajantasa/2002/20020738" className={classes.gridItem}>https://www.finlex.fi/fi/laki/ajantasa/2002/20020738 </Link>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Työsopimuslaki 55/2001 7 §.</Grid>
            <Link href="https://www.finlex.fi/fi/laki/ajantasa/2001/20010055" className={classes.gridItem}>https://www.finlex.fi/fi/laki/ajantasa/2001/20010055</Link>
        </Grid>
    )
}

const useStyles = makeStyles(() => ({
    gridItem: {
        marginBottom: '20px'
    },
}))
export default Article11

