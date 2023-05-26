import { Grid, Link } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from '@mui/styles';

const Article8 = () => {

    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item className={classes.gridItem}>Henkilöstöpalveluyrityksen tulee saada käyttäjäyritykseltä tieto työn edellyttämistä ammattitaitovaatimuksista ja työn erityispiirteistä ennen vuokratyön aloittamista. Henkilöstöpalveluyrityksen tulee ilmoittaa vuokratyöntekijälle edellä tarkoitetuista seikoista. Henkilöstöpalveluyrityksen on varmistettava, että vuokratyöntekijällä on riittävä ammattitaito, kokemus ja sopivuus suoritettavaan työhön.  </Grid>
            <Grid item className={classes.gridItem}>Henkilöstöpalveluyrityksen työnantajana on arvioitava yhdenvertaisuuden toteutumista työpaikalla ja työpaikan tarpeet huomioon ottaen kehitettävä työoloja sekä niitä toimintatapoja, joita noudatetaan henkilöstöä valittaessa ja henkilöstöä koskevia ratkaisuja tehtäessä.  </Grid>
            <p style={{ fontWeight: 'bold' }}>Keikkakaverin sisäiset linkit </p>
            <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>LOMAKE 1 - ASIAKASSOPIMUKSEEN LIITTYVÄT TYÖTURVALLISUUS- JA TYÖHYVINVOINTIASIAT </Link>
            <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>LOMAKE 2 – TYÖNTEKIJÄN YLEISPEREHDYTYS </Link>
            <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>LOMAKE 4 – TOIMINNAN ARVIOINTI  </Link>
            <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>LOMAKE 5 – Perehdytys ja työnopastus kiireellisissä tilanteissa </Link>
            <Grid item className={classes.gridItem} style={{ fontWeight: 'bold', display: 'inline-block', width: '100%' }}>Lisätietoa</Grid>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Työturvallisuuslaki 738/2002.</Grid>
            <Link href="https://www.finlex.fi/fi/laki/ajantasa/2002/20020738" style={{ display: 'inline-block', width: '100%' }}>https://www.finlex.fi/fi/laki/ajantasa/2002/20020738</Link>
        </Grid>
    )
}

const useStyles = makeStyles(() => ({
    gridItem: {
        marginBottom: '20px'
    },
}))
export default Article8

