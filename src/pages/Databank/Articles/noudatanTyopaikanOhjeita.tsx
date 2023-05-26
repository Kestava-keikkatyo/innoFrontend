import { Grid, Link } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from '@mui/styles';

const Article16 = () => {

    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item className={classes.gridItem}></Grid>Työntekijän on noudatettava työnantajan toimivaltansa mukaisesti antamia määräyksiä ja ohjeita. Turvallisuusohjeet voivat liittyä työmenetelmiin, koneiden ja henkilökohtaisten suojainten käyttämiseen tai vaarallisten aineiden käyttöön ja käsittelyyn.
            <Grid item className={classes.gridItem} style={{ fontWeight: 'bold' }}>Keikkakaverin sisäiset linkit</Grid>
            <Link className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>LOMAKE 2 – TYÖNTEKIJÄN YLEISPEREHDYTYS </Link>
            <Link className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>LOMAKE 3 – TYÖNOPASTUS </Link>
            <Link className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>LOMAKE 5 – Perehdytys ja työnopastus kiireellisissä tilanteissa </Link>
            <Grid item className={classes.gridItem} style={{ fontWeight: 'bold', display: 'inline-block', width: '100%' }}>Lisätietoa</Grid>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Työturvallisuuslaki 738/2002.</Grid>
            <Link href="https://www.finlex.fi/fi/laki/ajantasa/2002/20020738" className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>https://www.finlex.fi/fi/laki/ajantasa/2002/20020738 </Link>
        </Grid>
    )
}

const useStyles = makeStyles(() => ({
    gridItem: {
        marginBottom: '20px'
    },
}))
export default Article16

