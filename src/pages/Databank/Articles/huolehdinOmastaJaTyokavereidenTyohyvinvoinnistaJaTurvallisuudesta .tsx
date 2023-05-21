import { Grid, Link } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from '@mui/styles';

const Article14 = () => {

    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item className={classes.gridItem}>Työntekijän on kokemuksensa, työnantajalta saamansa opetuksen ja ohjauksen sekä ammattitaitonsa mukaisesti työssään huolehdittava käytettävissään olevin keinoin niin omasta kuin muiden työntekijöiden turvallisuudesta ja terveydestä. Turvallisuuden ja terveellisyyden ylläpitämiseksi työntekijän on toimittava työn ja työolosuhteiden edellyttämällä tavalla huolellisesti ja varovasti sekä huolehdittava siisteydestä ja järjestyksestä. Työntekijän on toimittava yhteistyössä työnantajan ja työntekijöiden edustajien kanssa työtapaturmien, ammattitautien ja muiden työstä ja työympäristöstä johtuvien terveyshaittojen torjumiseksi. Terveydellä tarkoitetaan sekä fyysistä että henkistä terveyttä. </Grid>
            <Grid item className={classes.gridItem} style={{ fontWeight: 'bold' }}>Keikkakaverin sisäiset linkit</Grid>
            <Link className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>LOMAKE 2 – TYÖNTEKIJÄN YLEISPEREHDYTYS </Link>
            <Link className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>LOMAKE 3 – TYÖNOPASTUS </Link>
            <Link className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>LOMAKE 4 – TOIMINNAN ARVIOINTI </Link>
            <Link className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>LOMAKE 5 – Perehdytys ja työnopastus kiireellisissä tilanteissa </Link>
            <Grid item className={classes.gridItem} style={{ fontWeight: 'bold', display: 'inline-block', width: '100%' }}>Lisätietoa</Grid>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Työturvallisuuslaki 738/2002.</Grid>
            <Link href="https://www.finlex.fi/fi/laki/ajantasa/2002/20020738" className={classes.gridItem}>https://www.finlex.fi/fi/laki/ajantasa/2002/20020738</Link>
        </Grid>
    )
}

const useStyles = makeStyles(() => ({
    gridItem: {
        marginBottom: '20px'
    },
}))
export default Article14

