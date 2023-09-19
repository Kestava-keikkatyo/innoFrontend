import { Grid, Link } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@mui/styles'

const TyokyvynTuki = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid container>
      <p className={classes.steps}>Työterveysyhteistyö  </p>
      <Grid item className={classes.gridItem}>
        Käyttäjäyritys huolehtii työpaikkaselvityksen tekemisestä yhdessä työterveyshuoltonsa kanssa
        ja toimittaa selvityksen henkilöstöpalveluyritykselle. Työpaikkaselvityksessä arvioidaan
        työpaikan altisteet, työn kuormittavuus, työjärjestelyt sekä tapaturma- ja väkivaltavaarat
        myös vuokratyössä. 
      </Grid>
      <Grid item className={classes.gridItem}>
        Käyttäjäyrityksen on ilmoitettava vuokratyön aloittamisesta työpaikan työterveyshuollolle ja
        työsuojeluvaltuutetulle. Käyttäjäyrityksen tulee tiedottaa henkilöstöpalveluyritykselle
        esimerkiksi erityistä sairastumisen vaaraa aiheuttavasta työstä. Henkilöstöpalveluyritys
        vastaa erityistä sairastumisen vaaraa aiheuttavissa töissä vuokratyöntekijän lakisääteisestä
        terveystarkastuksesta. Henkilöstöpalveluyrityksen on työntekijää vuokratessaan
        varmistuttava, että työntekijä täyttää myös terveydentilaltaan tehtävän asettamat
        vaatimukset. 
      </Grid>
      <p className={classes.steps}>Työkyvyn varhainen tuki   </p>
      <Grid item className={classes.gridItem}>
        Käyttäjäyrityksen on ilmoitettava vuokratyön aloittamisesta työpaikan työterveyshuollolle ja
        työsuojeluvaltuutetulle. Käyttäjäyrityksen tulee tiedottaa henkilöstöpalveluyritykselle
        esimerkiksi erityistä sairastumisen vaaraa aiheuttavasta työstä. Henkilöstöpalveluyritys
        vastaa erityistä sairastumisen vaaraa aiheuttavissa töissä vuokratyöntekijän lakisääteisestä
        terveystarkastuksesta. Henkilöstöpalveluyrityksen on työntekijää vuokratessaan
        varmistuttava, että työntekijä täyttää myös terveydentilaltaan tehtävän asettamat
        vaatimukset.
      </Grid>
      <Grid item className={classes.gridItem}>
        Varhaisen tuen toimintamallissa määritellään toimenpiteet työntekijöiden työkyvyn
        tukemiseksi. Varhaisen tuen käytännöt käsitellään työpaikalla yhteistoiminnassa työnantajan
        ja työntekijöiden tai heidän edustajansa kanssa.  {' '}
      </Grid>
      <Grid item className={classes.gridItem}>
        Henkilöstöpalveluyritykselle voi syntyä oikeus irtisanoa työntekijä, jos työkyky ei
        työkykyarvion mukaan vastaa työn vaatimuksia eikä henkilöstöpalveluyrityksellä ole tarjota
        vaihtoehtoisia työtehtäviä. Työkykyarvio on kuitenkin aina tehtävä työterveyshuollon
        yhteistyössä ja työsuhteen jatkomahdollisuudet selvitettävä, myös koeaikana. 
      </Grid>
      <Grid item className={classes.gridItem} style={{ fontWeight: 'bold' }}>
        Keikkakaverin sisäiset linkit
      </Grid>
      <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>
        LOMAKE 1 - ASIAKASSOPIMUKSEEN LIITTYVÄT TYÖTURVALLISUUS- JA TYÖHYVINVOINTIASIAT{' '}
      </Link>
      <Grid
        item
        className={classes.gridItem}
        style={{ fontWeight: 'bold', display: 'inline-block', width: '100%' }}
      >
        Lisätietoa
      </Grid>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        Aluehallintovirasto. Vuokrayritys päätti työsuhteen koeajalla työntekijän terveydentilan
        vuoksi – sakkoja työsyrjinnästä.
      </Grid>
      <Link
        href='https://www.sttinfo.fi/tiedote/vuokrayritys-paatti-tyosuhteen-koeajalla-tyontekijan-terveydentilan-vuoksi-sakkoja-tyosyrjinnasta?publisherId=69818103&releaseId=69904253'
        className={classes.gridItem}
        style={{ display: 'inline-block', width: '100%' }}
      >
        https://www.sttinfo.fi/tiedote/vuokrayritys-paatti-tyosuhteen-koeajalla-tyontekijan-terveydentilan-vuoksi-sakkoja-tyosyrjinnasta?publisherId=69818103&releaseId=69904253
      </Link>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        Terävä K. 2013. Helsinki. Työkyvyn tuki vuokratyössä. Kuntoutussäätiön julkaisu.
      </Grid>
      <Link
        href='https://kuntoutussaatio.fi/assets/files/2021/04/vuokratyoopas.pdf'
        className={classes.gridItem}
        style={{ display: 'inline-block', width: '100%', marginBottom: '20px' }}
      >
        https://kuntoutussaatio.fi/assets/files/2021/04/vuokratyoopas.pdf
      </Link>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        Työsuojelu.fi. Työterveysyhteistyö ja työkyvyn tuki.{' '}
      </Grid>
      <Link
        href='https://www.tyosuojelu.fi/tyoterveys-ja-tapaturmat/tyoterveyshuolto/tyoterveysyhteistyo'
        className={classes.gridItem}
        style={{ display: 'inline-block', width: '100%' }}
      >
        https://www.tyosuojelu.fi/tyoterveys-ja-tapaturmat/tyoterveyshuolto/tyoterveysyhteistyo
      </Link>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        Työterveyshuoltolaki 2001/1383.{' '}
      </Grid>
      <Link
        href='https://www.finlex.fi/fi/laki/ajantasa/2001/20011383'
        className={classes.gridItem}
        style={{ display: 'inline-block', width: '100%' }}
      >
        https://www.finlex.fi/fi/laki/ajantasa/2001/20011383
      </Link>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        Työterveyslaitos. Työkyvyn varhainen tuki.
      </Grid>
      <Link
        href='https://www.ttl.fi/teemat/tyoterveys/tyoterveyshuolto/tyokyvyn-tuki/tyokyvyn-varhainen-tuki '
        className={classes.gridItem}
        style={{ display: 'inline-block', width: '100%' }}
      >
        https://www.ttl.fi/teemat/tyoterveys/tyoterveyshuolto/tyokyvyn-tuki/tyokyvyn-varhainen-tuki{' '}
      </Link>
    </Grid>
  )
}

const useStyles = makeStyles(() => ({
  gridItem: {
    marginBottom: '20px',
  },
  steps: {
    fontWeight: 'bold',
    display: 'inline-block',
    width: '100%',
  },
}))
export default TyokyvynTuki
