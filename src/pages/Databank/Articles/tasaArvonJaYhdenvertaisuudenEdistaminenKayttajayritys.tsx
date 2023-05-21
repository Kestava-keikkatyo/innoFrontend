import { Grid, Link } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from '@mui/styles';

const Article13 = () => {

    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item className={classes.gridItem}>Työnantajan (käyttäjäyrityksen) pitää edistää sukupuolten välistä tasa-arvoa ja työntekijöiden yhdenvertaisuutta sekä ennaltaehkäistä häirintää työpaikalla. Syrjintä ja häirintä on kielletty sukupuolen, iän, alkuperän, kansalaisuuden, kielen, uskonnon, vakaumuksen, mielipiteen, poliittisen toiminnan, ammattiyhdistystoiminnan, perhesuhteiden, terveydentilan, vammaisuuden, seksuaalisen suuntautumisen tai muun henkilöön liittyvän syyn perusteella. Työnantajan pitää arvioida työpaikan tasa-arvo- ja yhdenvertaisuustilanne sekä toteuttaa tarvittavat kehittämistoimenpiteet. Jos työnantajan palveluksessa on säännöllisesti vähintään 30 henkilöä, työnantajan on laadittava tasa-arvo- ja yhdenvertaisuussuunnitelmat yhteistyössä henkilöstön edustajien kanssa. Suunnitelmat voidaan sisällyttää henkilöstö- tai koulutussuunnitelmaan tai työsuojelun toimintaohjelmaan. Käyttäjäyrityksen on otettava vuokratyöntekijät huomioon tasa-arvo- ja yhdenvertaisuussuunnittelussa siltä osin kuin se käyttää työn johto- ja valvontavaltaansa heihin. Vuokratyöntekijöiden palkkojen kartoittaminen kuuluu kuitenkin henkilöstöpalveluyritykselle, johon vuokratyöntekijät ovat työsuhteessa. </Grid>
            <Grid item className={classes.gridItem}>Vuokratyöntekijöitä tulee kohdella työpaikalla yhdenvertaisesti käyttäjäyrityksen omien työntekijöiden kanssa annettaessa työmääräyksiä, arvioitaessa työsuorituksia ja opastettaessa työntekijöitä työturvallisuuteen liittyvissä asioissa. Käyttäjäyrityksen tulee tiedottaa vapautuvista työpaikoistaan vuokratyöntekijöille samalla tavalla kuin käyttäjäyrityksen muille työntekijöille. Vuokratyöntekijöillä tulee olla mahdollisuus hyödyntää käyttäjäyrityksen palveluita ja työntekijöilleen tarjoamia pysyvämpiä järjestelyjä ja etuja, jotka eivät ole palkkaa (esim. mahdollisuus käyttää henkilöstötiloja, yrityksen kuntosalia, lomamökkiä, kuljetuspalveluita tai ruokailla henkilöstöruokalassa). Käyttäjäyritys ei ole kuitenkaan velvollinen tukemaan taloudellisesti näiden palvelujen käyttöä (esim. lounas- ja liikuntasetelit).   </Grid>
            <ul>
                <li>ennakkoperintärekisteriin, työnantajarekisteriin ja arvonlisäverovelvollisten rekisteriin kuulumisesta,  </li>
                <li>kaupparekisteriote,</li>
                <li>selvitys verojen maksamisesta,    </li>
                <li>todistus eläkevakuutusten ottamisesta ja eläkevakuutusmaksujen suorittamisesta,</li>
                <li>selvitys työhön sovellettavasta työehtosopimuksesta tai keskeisistä työehdoista ja </li>
                <li>selvitys työterveyshuollon järjestämisestä.</li>
            </ul>
            <Grid item className={classes.gridItem} style={{ fontWeight: 'bold' }}>Keikkakaverin sisäiset linkit</Grid>
            <Grid item className={classes.gridItem} style={{ fontWeight: 'bold', display: 'inline-block', width: '100%' }}>Lisätietoa</Grid>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Laki naisten ja miesten välisestä tasa-arvosta 609/1986.</Grid>
            <Link href="https://finlex.fi/fi/laki/ajantasa/1986/19860609" className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>https://finlex.fi/fi/laki/ajantasa/1986/19860609</Link>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Yhdenvertaisuuslaki 1325/2014.</Grid>
            <Link href="https://www.finlex.fi/fi/laki/alkup/2014/20141325" className={classes.gridItem}>https://www.finlex.fi/fi/laki/alkup/2014/20141325</Link>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Työturvallisuuslaki 738/2002.</Grid>
            <Link href="https://www.finlex.fi/fi/laki/ajantasa/2002/20020738" className={classes.gridItem}>https://www.finlex.fi/fi/laki/ajantasa/2002/20020738</Link>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Työsopimuslaki 55/2001.</Grid>
            <Link href="https://www.finlex.fi/fi/laki/ajantasa/2001/20010055" className={classes.gridItem}>https://www.finlex.fi/fi/laki/ajantasa/2001/20010055 </Link>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Työ- ja elinkeinoministeriö 2017 Vuokratyöopas</Grid>
            <Link href="https://tem.fi/documents/1410877/3229884/Vuokraty%C3%B6opas/fc47f5f5-b1d5-4805-b6dd-a46e42193a05" className={classes.gridItem}>https://tem.fi/documents/1410877/3229884/Vuokraty%C3%B6opas/fc47f5f5-b1d5-4805-b6dd-a46e42193a05</Link>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Työturvallisuuskeskuksen opas Monimuotoisuus, yhdenvertaisuus ja tasa-arvo työyhteisössä </Grid>
            <Link href="https://ttk.fi/tyoturvallisuus/tyoyhteiso/monimuotoisuus-yhdenvertaisuus-ja-tasa-arvo/ " className={classes.gridItem}>https://ttk.fi/tyoturvallisuus/tyoyhteiso/monimuotoisuus-yhdenvertaisuus-ja-tasa-arvo/ </Link>
        </Grid>
    )
}

const useStyles = makeStyles(() => ({
    gridItem: {
        marginBottom: '20px'
    },
}))
export default Article13

