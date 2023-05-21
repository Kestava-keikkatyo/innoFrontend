import { Grid, Link } from "@mui/material";
import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from '@mui/styles';

const Article10 = () => {

    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item className={classes.gridItem}>Tilaajan on varmistettava ennen sopimuksen solmimista, että sen sopimuskumppanit täyttävät lakisääteiset velvoitteensa. Tilaajavastuulakia sovelletaan vuokratyövoimaa käyttäviin yrityksiin.  Ennen kuin käyttäjäyritys ja henkilöstöpalveluyritys tekevät sopimuksen vuokratyöntekijän käytöstä, käyttäjäyrityksen on hankittava henkilöstöpalveluyritykseltä tilaajavastuulain mukaiset selvitykset. Näitä ovat </Grid>
            <ul>
                <li>ennakkoperintärekisteriin, työnantajarekisteriin ja arvonlisäverovelvollisten rekisteriin kuulumisesta,  </li>
                <li>kaupparekisteriote,</li>
                <li>selvitys verojen maksamisesta,    </li>
                <li>todistus eläkevakuutusten ottamisesta ja eläkevakuutusmaksujen suorittamisesta,</li>
                <li>selvitys työhön sovellettavasta työehtosopimuksesta tai keskeisistä työehdoista ja </li>
                <li>selvitys työterveyshuollon järjestämisestä.</li>
            </ul>
            <Grid item className={classes.gridItem}>Näitä selvityksiä ei tarvitse pyytää, mikäli sopimuksen osapuolen toimintaa (esim. valtio tai kunta) tai sopimussuhdetta voidaan pitää vakiintuneena. Rakentamistoiminnassa selvitykset on pyydettävä näissäkin tapauksissa. Rakentamistoiminnassa käyttäjäyrityksen pitää pyytää henkilöstöpalveluyritykseltä myös todistus työtapaturma- ja ammattitautivakuutuksen ottamisesta. Jos käyttää ulkomaista vuokratyövoimaa käyttäjäyrityksen on varmistettava vastaavat tiedot yrityksen sijoittautumismaan lainsäädännön mukaisella rekisteriotteella tai vastaavalla todistuksella. Selvitykset on säilytettävä vähintään kaksi vuotta työn päättymisestä. Etelä-Suomen aluehallintoviraston työsuojelun vastuualue valvoo tilaajavastuulain noudattamista koko Suomessa. </Grid>
            <Grid item className={classes.gridItem}>Suomeen ulkomailta lähetettyihin vuokratyöntekijöihin sovelletaan lähetetyistä työntekijöistä annettua lakia, jonka mukaan heidän vähimmäistyöehtonsa määräytyvät samoin kuin kotimaisilla vuokratyöntekijöillä. Käyttäjäyrityksen on toimitettava lähettävälle yritykselle ne tiedot, jotka se tarvitsee työnantajavelvollisuuksiensa täyttämiseksi vuokratyössä. Käyttäjäyritys on velvollinen huolehtimaan, että ulkomainen henkilöstöpalveluyritys asettaa Suomeen tarvittaessa edustajan.   </Grid>
            <Grid item className={classes.gridItem} style={{ fontWeight: 'bold' }}>Keikkakaverin sisäiset linkit</Grid>
            <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>LOMAKE 1 - ASIAKASSOPIMUKSEEN LIITTYVÄT TYÖTURVALLISUUS- JA TYÖHYVINVOINTIASIAT </Link>
            <Grid item className={classes.gridItem} style={{ fontWeight: 'bold', display: 'inline-block', width: '100%' }}>Lisätietoa</Grid>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Laki tilaajan selvitysvelvollisuudesta ja vastuusta ulkopuolista työvoimaa käytettäessä 1233/2006</Grid>
            <Link href="https://www.finlex.fi/fi/laki/ajantasa/2006/20061233" className={classes.gridItem}>https://www.finlex.fi/fi/laki/ajantasa/2006/20061233</Link>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Laki työntekijöiden lähettämisestä 447/2016</Grid>
            <Link href="https://www.finlex.fi/fi/laki/ajantasa/2016/20160447#L4P13" className={classes.gridItem}>Laki työntekijöiden lähettämisestä 447/2016</Link>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Laki työntekijöiden lähettämisestä 447/2016</Grid>
            <Link href="https://tem.fi/tilaajavastuu" className={classes.gridItem}>https://tem.fi/tilaajavastuu </Link>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Tilaajan selvitysvelvollisuus ja vastuu ulkopuolista työvoimaa käytettäessä:</Grid>
            <Link href="https://www.tyosuojelu.fi/harmaa-talous/tilaajavastuu" className={classes.gridItem}>https://www.tyosuojelu.fi/harmaa-talous/tilaajavastuu </Link>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Työsuojeluhallinto, Tilaajavastuu-opas:</Grid>
            <Link href="https://www.tyosuojelu.fi/documents/14660/2426906/TSH_tilaajavastuulaki_FI.pdf" className={classes.gridItem}>https://www.tyosuojelu.fi/documents/14660/2426906/TSH_tilaajavastuulaki_FI.pdf </Link>
        </Grid>
    )
}

const useStyles = makeStyles(() => ({
    gridItem: {
        marginBottom: '20px'
    },
    link: {
        display: 'inline-block',
        width: '100%',
        marginBottom: '20px'
    }
}))
export default Article10

