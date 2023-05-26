import { Grid, Link } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from '@mui/styles';

const Article4 = () => {

    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item className={classes.gridItem}>Henkilöstöpalveluyrityksen työnantajana pitää vakuuttaa vuokratyöntekijät työtapaturman ja ammattitaudin varalta. Vakuutus koskee kaikkia henkilöstöpalveluyrityksen työntekijöitä, jollei yrityksen määrättyä osaa tai määrättyä työtä varten ole otettu eri vakuutusta. </Grid>
            <p style={{ fontWeight: 'bold' }}>Keikkakaverin sisäiset linkit </p>
            <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>LOMAKE 1 - ASIAKASSOPIMUKSEEN LIITTYVÄT TYÖTURVALLISUUS- JA TYÖHYVINVOINTIASIAT </Link>
            <Grid item className={classes.gridItem} style={{ fontWeight: 'bold', display: 'inline-block', width: '100%' }}>Lisätietoa</Grid>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Työtapaturma- ja ammattitautilaki 459/2015.</Grid>
            <Link href="https://www.finlex.fi/fi/laki/ajantasa/2015/20150459" style={{ display: 'inline-block', width: '100%' }}>https://www.finlex.fi/fi/laki/ajantasa/2015/20150459</Link>
        </Grid>
    )
}

const useStyles = makeStyles(() => ({
    gridItem: {
        marginBottom: '20px'
    },
}))
export default Article4

