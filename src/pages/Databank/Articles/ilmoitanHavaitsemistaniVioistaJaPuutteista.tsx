import { Grid, Link } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from '@mui/styles';

const Article18 = () => {

    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item className={classes.gridItem}>Työntekijän on viipymättä ilmoitettava työnantajalle tai työsuojeluvaltuutetulle, mikäli työpaikalla ilmenee vikoja ja puutteellisuuksia, jotka voivat aiheuttaa haittaa tai vaaraa työtekijöiden terveydelle tai turvallisuudelle. Viat ja puutteet voivat olla työolosuhteissa, työmenetelmissä, koneissa, työvälineissä, henkilösuojaimissa tai muissa laitteissa. Työntekijän on myös mahdollisuuksiensa mukaan pyrittävä poistamaan havaitsemansa mahdollista vaaraa aiheuttavat viat ja puutteellisuudet, kun tämä on mahdollista ja turvallista. Työntekijän on ilmoitettava myös poistamistaan vioista ja puutteellisuuksista. Ilmoittaminen on tärkeää, jotta työnantaja voi korjata vaaraa tai haittaa aiheuttavat viat ja puutteet. Työnantajan on kerrottava ilmoituksen tehneelle työntekijälle ja työsuojeluvaltuutetulle, mihin toimenpiteisiin ryhdytään tai on ryhdytty esille tulleen vian tai puutteen korjaamiseksi.   </Grid>
            <Grid item className={classes.gridItem}>Työntekijän on ilmoitettava hänelle sattuneesta työtapaturmasta tai ammattitaudista työnantajalleen tai tämän edustajalle. </Grid>
            <Grid item className={classes.gridItem} style={{ fontWeight: 'bold' }}>Keikkakaverin sisäiset linkit</Grid>
            <Link className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>LOMAKE 2 – TYÖNTEKIJÄN YLEISPEREHDYTYS </Link>
            <Link className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>LOMAKE 3 – TYÖNOPASTUS </Link>
            <Grid item className={classes.gridItem} style={{ fontWeight: 'bold', display: 'inline-block', width: '100%' }}>Lisätietoa</Grid>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Työturvallisuuslaki 738/2002.</Grid>
            <Link href="https://www.finlex.fi/fi/laki/ajantasa/2002/20020738" className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>https://www.finlex.fi/fi/laki/ajantasa/2002/20020738 </Link>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Työtapaturma- ja ammattitautilaki 459/2015.</Grid>
            <Link href="https://finlex.fi/fi/laki/ajantasa/2015/20150459" className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>https://finlex.fi/fi/laki/ajantasa/2015/20150459</Link>
        </Grid>
    )
}

const useStyles = makeStyles(() => ({
    gridItem: {
        marginBottom: '20px'
    },
}))
export default Article18

