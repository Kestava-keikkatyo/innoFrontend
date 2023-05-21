  import { Grid, Link } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from '@mui/styles';

const Article6 = () => {

    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item className={classes.gridItem}>Ketään ei saa syrjiä sukupuolen, iän, alkuperän, kansalaisuuden, kielen, uskonnon, vakaumuksen, mielipiteen, poliittisen toiminnan, ammattiyhdistystoiminnan, perhesuhteiden, terveydentilan, vammaisuuden, seksuaalisen suuntautumisen tai muun henkilöön liittyvän syyn perusteella. </Grid>
            <Grid item className={classes.gridItem}>Henkilöstöpalveluyrityksen työnantajana tulee edistää sukupuolten tasa-arvoa ja ennaltaehkäistä sukupuoli-identiteettiin tai sukupuolen ilmaisuun perustuvaa syrjintää. </Grid>
            <Grid item className={classes.gridItem}>Henkilöstöpalveluyrityksen työnantajana on arvioitava yhdenvertaisuuden toteutumista työpaikalla ja työpaikan tarpeet huomioon ottaen kehitettävä työoloja sekä niitä toimintatapoja, joita noudatetaan henkilöstöä valittaessa ja henkilöstöä koskevia ratkaisuja tehtäessä.  </Grid>
            <p style={{ fontWeight: 'bold' }}>Keikkakaverin sisäiset linkit </p>
            <Grid item className={classes.gridItem} style={{ fontWeight: 'bold', display: 'inline-block', width: '100%' }}>Lisätietoa</Grid>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Laki naisten ja miesten välisestä tasa-arvosta 609/1986.</Grid>
            <Link href="https://finlex.fi/fi/laki/ajantasa/1986/19860609" className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>https://finlex.fi/fi/laki/ajantasa/1986/19860609 </Link>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Yhdenvertaisuuslaki 1325/2014.</Grid>
            <Link href="https://www.finlex.fi/fi/laki/alkup/2014/20141325"  style={{ display: 'inline-block', width: '100%' }}>https://www.finlex.fi/fi/laki/alkup/2014/20141325</Link>
        </Grid>
    )
}

const useStyles = makeStyles(() => ({
    gridItem: {
        marginBottom: '20px'
    },
}))
export default Article6

