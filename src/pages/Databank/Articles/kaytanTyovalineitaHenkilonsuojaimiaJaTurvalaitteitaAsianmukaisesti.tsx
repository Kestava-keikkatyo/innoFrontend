import { Grid, Link } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from '@mui/styles';

const Article17 = () => {

    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item className={classes.gridItem}>Työntekijän tulee käyttää ja hoitaa työnantajan antamia henkilönsuojaimia ja muita varusteita huolellisesti ja ohjeiden mukaisesti. Työntekijän on työssään käytettävä sellaista asianmukaista vaatetusta, josta ei aiheudu tapaturman vaaraa. </Grid>
            <Grid item className={classes.gridItem}>Henkilönsuojaimilla tarkoitetaan sellaisia välineitä, varusteita tai vaatteita, jotka suojaavat työntekijää tapaturmilta tai sairastumiselta työssä. Henkilönsuojaimia ovat esimerkiksi suojalasit, turvakengät, suojakäsineet, kypärät, kuulon-, hengityksen- ja putoamissuojaimet sekä suojahaalarit.  </Grid>
            <Grid item className={classes.gridItem}>Työntekijän tulee käyttää oikein koneita, työvälineitä ja muita laitteita sekä niissä olevia turvallisuus- ja suojalaitteita. Käytössä tulee hyödyntää työntekijän ammattitaitoa, työkokemusta ja työnantajalta saatuja käyttö- ja muita ohjeita.  </Grid>
            <Grid item className={classes.gridItem}>Koneeseen, työvälineeseen, muuhun laitteeseen tai rakennukseen asennettua turvallisuus- tai suojalaitetta ei saa ilman erityistä syytä poistaa tai kytkeä pois päältä. Jos työntekijä joutuu tilapäisesti poistamaan turvallisuus- tai suojalaitteen käytöstä, hänen on palautettava se käyttöön tai kytkettävä laite päälle niin pian kuin mahdollista. </Grid>
            <Grid item className={classes.gridItem}>Työntekijän tulee ilmoittaa työnantajalle ja työsuojeluvaltuutetulle työvälineissä, henkilönsuojaimissa tai muissa laitteissa havaitsemistaan vioista ja puutteellisuuksista, jotka voivat aiheuttaa haittaa tai vaaraa työntekijöiden turvallisuudelle tai terveydelle. </Grid>
            <Grid item className={classes.gridItem} style={{ fontWeight: 'bold' }}>Keikkakaverin sisäiset linkit</Grid>
            <Link className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>LOMAKE 2 – TYÖNTEKIJÄN YLEISPEREHDYTYS </Link>
            <Link className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>LOMAKE 3 – TYÖNOPASTUS </Link>
            <Link className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>LOMAKE 5 – Perehdytys ja työnopastus kiireellisissä tilanteissa </Link>
            <Grid item className={classes.gridItem} style={{ fontWeight: 'bold', display: 'inline-block', width: '100%' }}>Lisätietoa</Grid>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Työturvallisuuslaki 738/2002.</Grid>
            <Link href="https://www.finlex.fi/fi/laki/ajantasa/2002/20020738" className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>https://www.finlex.fi/fi/laki/ajantasa/2002/20020738 </Link>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Valtioneuvoston asetus henkilönsuojainten valinnasta ja käytöstä työssä 427/2021.</Grid>
            <Link href="https://finlex.fi/fi/laki/alkup/2021/20210427" className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>https://finlex.fi/fi/laki/alkup/2021/20210427 </Link>
            <Grid item style={{ display: 'inline-block', width: '100%' }}>Suojaimet työssä (Työsuojeluhallinto)</Grid>
            <Link href="https://www.tyosuojelu.fi/tyoolot/suojaimet-tyossa" className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>https://www.tyosuojelu.fi/tyoolot/suojaimet-tyossa </Link>
        </Grid>
    )
}

const useStyles = makeStyles(() => ({
    gridItem: {
        marginBottom: '20px'
    },
}))
export default Article17

