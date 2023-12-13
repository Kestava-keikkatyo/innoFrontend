import { Grid, Link } from '@mui/material'
import i18next from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@mui/styles'

const Article2 = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid container>
      <p className={classes.bold}>Huolehtimisvelvoite</p>
      <Grid item className={classes.gridItem}>
        Käyttäjäyrityksen tulee huolehtia vuokratyöntekijöiden turvallisuudesta ja terveydestä
        työssä. Käyttäjäyrityksen on tarkkailtava työympäristöä, työyhteisön tilaa ja työtapojen
        turvallisuutta. Käyttäjäyritys valvoo vuokratyöntekijöiden henkilönsuojainten ja
        turvavälineiden käyttöä.{' '}
      </Grid>
      <p className={classes.bold}>Työn vaarojen selvittäminen ja arviointi </p>
      <Grid item className={classes.gridItem}>
        Käyttäjäyrityksen on selvitettävä työstä ja työolosuhteista aiheutuvat haitta- ja
        vaaratekijät ja jos niitä ei voida poistaa, arvioitava niiden merkitys vuokratyöntekijän
        turvallisuudelle ja terveydelle. Tämä selvitys ja arviointi on pidettävä ajan tasalla.{' '}
      </Grid>
      <p className={classes.bold}>Työsuojelun toimintaohjelman laatiminen </p>
      <Grid item className={classes.gridItem}>
        Käyttäjäyrityksellä on oltava ohjelma turvallisuuden ja terveellisyyden edistämiseksi ja
        työntekijöiden työkyvyn ylläpitämiseksi. Vuokratyöntekijät on huomioitava tässä työsuojelun
        toimintaohjelmassa.{' '}
      </Grid>
      <p className={classes.bold}>Työsuojelun yhteistoiminnan järjestäminen </p>
      <Grid item className={classes.gridItem}>
        Käyttäjäyrityksen tulee järjestää lain mukainen työsuojelun yhteistoiminta.
        Käyttäjäyrityksen on nimettävä työsuojelupäällikkö ja työntekijöiden on valittava
        keskuudestaan työsuojeluvaltuutettu sekä kaksi varavaltuutettua, mikäli työpaikalla
        työskentelee säännöllisesti vähintään 10 työntekijää. Käyttäjäyrityksen on ilmoitettava
        vuokratyön aloittamisesta työpaikan työsuojeluvaltuutetulle.{' '}
      </Grid>
      <p className={classes.bold}>Vuokratyöstä ilmoittaminen työterveyshuollolle </p>
      <Grid item className={classes.gridItem}>
        Henkilöstöpalveluyritys antaa aina ensin uudelle työntekijälleen yleisperehdytyksen, jossa
        käydään läpi henkilöstöpalveluyrityksen toimintatapoja ja työturvallisuuteen liittyviä
        yleisiä käytäntöjä. Perehdytyksestä tulee sopia käyttäjäyrityksen kanssa.{' '}
      </Grid>
      <p className={classes.bold}>Perehdytys </p>
      <Grid item className={classes.gridItem}>
        Käyttäjäyrityksen tulee antaa vuokratyöntekijälle opastus työhön ja työoloihin (työnopastus)
        ennen kuin työntekijä aloittaa varsinaisen työn tekemisen. Työnopastuksessa työntekijälle
        annetaan riittävät tiedot suoriutua turvallisesti annetuista työtehtävistä.
        Vuokratyöntekijän on hyvä käydä käyttäjäyrityksessä läpi sama perehdyttämisprosessi kuin
        yrityksen omienkin työntekijöiden.{' '}
      </Grid>
      <p className={classes.bold}>Työsuojeluvastuu yhteisellä työpaikalla </p>
      <Grid item className={classes.gridItem}>
        Yhteisellä työpaikalla pääasiallista määräysvaltaa käyttävä työnantaja ja tämän
        palveluksessa oleva työsuojeluvaltuutettu käsittelevät työolosuhteisiin ja työympäristön
        yleiseen turvallisuuteen ja terveellisyyteen liittyvät asiat. Työpaikka, jossa työskentelee
        käyttäjäyrityksen tiloissa vuokratyöntekijöitä, on yhteinen työpaikka ja käyttäjäyritys on
        tällöin pääasiallista määräysvaltaa käyttävä työnantaja.{' '}
      </Grid>
      <p className={classes.bold}>Keikkakaverin sisäiset linkit </p>
      <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>
        LOMAKE 1 - ASIAKASSOPIMUKSEEN LIITTYVÄT TYÖTURVALLISUUS- JA TYÖHYVINVOINTIASIAT{' '}
      </Link>
      <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>
        LOMAKE 3 – TYÖNOPASTUS
      </Link>
      <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>
        LOMAKE 5 – Perehdytys ja työnopastus kiireellisissä tilanteissa{' '}
      </Link>
      <Grid
        item
        className={classes.gridItem}
        style={{ fontWeight: 'bold', display: 'inline-block', width: '100%' }}
      >
        Lisätietoa
      </Grid>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        Työturvallisuuslaki 738/2002.
      </Grid>
      <Link
        href='https://www.finlex.fi/fi/laki/ajantasa/2002/20020738'
        className={classes.gridItem}
        style={{ display: 'inline-block', width: '100%' }}
      >
        https://www.finlex.fi/fi/laki/ajantasa/2002/20020738{' '}
      </Link>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        Laki työsuojelun valvonnasta ja työpaikan työsuojeluyhteistoiminnasta (44/2006) eli ns.
        työsuojelun valvontalaki.
      </Grid>
      <Link
        href='https://www.finlex.fi/fi/laki/ajantasa/2006/20060044'
        style={{ display: 'inline-block', width: '100%' }}
      >
        https://www.finlex.fi/fi/laki/ajantasa/2006/20060044
      </Link>
    </Grid>
  )
}

const useStyles = makeStyles(() => ({
  gridItem: {
    marginBottom: '20px',
  },
  bold: {
    fontWeight: 'bold',
  },
}))
export default Article2
