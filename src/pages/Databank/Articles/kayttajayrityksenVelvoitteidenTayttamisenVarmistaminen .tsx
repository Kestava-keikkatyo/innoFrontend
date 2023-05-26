import { Grid, Link } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from '@mui/styles';

const Article7 = () => {

    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item className={classes.gridItem}>Työnantaja on tarpeellisilla toimenpiteillä velvollinen huolehtimaan työntekijöiden turvallisuudesta ja terveydestä työssä. Henkilöstöpalveluyrityksen on tarpeellista käydä käyttäjäyrityksen kanssa läpi lainsäädännöstä seuraavien vastuiden jakautuminen vuokratyössä. On mahdollista, että käyttäjäyritykset eivät välttämättä ole tietoisia vastuistaan ja velvoitteistaan, ainakaan mikäli ovat ensimmäistä kertaa vuokraamassa työvoimaa käyttöönsä. Vastuita ja velvoitteita tulee esimerkiksi työturvallisuuslainsäädännön velvoitteista liittyen perehdytykseen, riskienarviointiin ja -hallintaan, työsuojelun yhteistoimintaan ja valvontavastuisiin. Lisäksi tulee huolehtia, että käyttäjäyritys on tietoinen ja huolehtii esimerkiksi työaika- ja yhdenvertaisuuslain mukaisista velvoitteista.  </Grid>
            <Grid item className={classes.gridItem}>Käyttäjäyrityksen vastuut vuokratyössä ovat: </Grid>
            <p className={classes.steps}>1. Jaettu työsuojeluvastuu henkilöstöpalveluyrityksen kanssa </p>
            <p className={classes.steps}>2. Tilaajavastuu  </p>
            <p className={classes.steps}>3. Tietojen antaminen henkilöstöpalveluyritykselle</p>
            <p className={classes.steps}>4. Yleisvastuu työturvallisuudesta mm.  </p>
            <ul>
                <li>Työn aikaisesta työn turvallisuudesta ja terveellisyydestä huolehtiminen, ml. tarvittavien henkilönsuojainten ja turvavälineiden käyttämisen varmistaminen </li>
                <li>Työn vaarojen selvittäminen ja arviointi (vuokratyöntekijät huomioiden)  </li>
                <li>Työsuojelun toimintaohjelman laatiminen (vuokratyöntekijät huomioiden)   </li>
                <li>Vuokratyöstä ilmoittaminen työpaikan työsuojeluvaltuutetulle   </li>
                <li>Vuokratyöstä ilmoittaminen työpaikan työterveyshuollolle  </li>
                <li>Perehdytys</li>
                <li>Työsuojeluvastuu yhteisellä työpaikalla  </li>
            </ul>
            <p className={classes.steps}>5. Vastuu työaikalain noudattamisesta  </p>
            <p className={classes.steps}>6. Tasa-arvon ja yhdenvertaisuuden edistäminen </p>
            <p className={classes.steps}>7. Tarvittavien henkilönsuojainten hankinta (yhteistyössä henkilöstöpalveluyrityksen kanssa)  </p>
            <Grid item className={classes.gridItem} style={{ fontWeight: 'bold' }}>Keikkakaverin sisäiset linkit</Grid>
            <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>LOMAKE 1 - ASIAKASSOPIMUKSEEN LIITTYVÄT TYÖTURVALLISUUS- JA TYÖHYVINVOINTIASIAT </Link>
            <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>LOMAKE 4 – TOIMINNAN ARVIOINTI  </Link>
            <Grid item className={classes.gridItem} style={{ fontWeight: 'bold', display: 'inline-block', width: '100%' }}>Lisätietoa</Grid>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Työturvallisuuslaki 738/2002.</Grid>
            <Link href="https://www.finlex.fi/fi/laki/ajantasa/2002/20020738" className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>https://www.finlex.fi/fi/laki/ajantasa/2002/20020738</Link>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Laki työsuojelun valvonnasta ja työpaikan työsuojeluyhteistoiminnasta (44/2006) eli ns. työsuojelun valvontalaki.</Grid>
            <Link href="https://www.finlex.fi/fi/laki/ajantasa/2006/20060044" style={{ display: 'inline-block', width: '100%', marginBottom: '20px' }}>https://www.finlex.fi/fi/laki/ajantasa/2006/20060044 </Link>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Työsopimuslaki 55/2001.</Grid>
            <Link href="https://www.finlex.fi/fi/laki/ajantasa/2001/20010055" style={{ display: 'inline-block', width: '100%' }}>https://www.finlex.fi/fi/laki/ajantasa/2001/20010055</Link>
        </Grid>
    )
}

const useStyles = makeStyles(() => ({
    gridItem: {
        marginBottom: '20px'
    },
    steps: {
        fontWeight: 'bold', 
        display: 'inline-block', 
        width: '100%' 
    }
}))
export default Article7

