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
      <p className={classes.bold}>Työn vaarojen selvittäminen ja arviointi </p>
      <Grid item className={classes.gridItem}>
        Henkilöstöpalveluyrityksen on selvitettävä työstä ja työolosuhteista aiheutuvat haitta- ja
        vaaratekijät ja jos niitä ei voida poistaa, arvioitava niiden merkitys vuokratyöntekijän
        turvallisuudelle ja terveydelle. Tämä selvitys ja arviointi on pidettävä ajan tasalla.{' '}
      </Grid>
      <p className={classes.bold}>Työsuojelun toimintaohjelman laatiminen </p>
      <Grid item className={classes.gridItem}>
        Henkilöstöpalveluyrityksellä on oltava ohjelma turvallisuuden ja terveellisyyden
        edistämiseksi ja työntekijöiden työkyvyn ylläpitämiseksi. Vuokratyöntekijät on huomioitava
        tässä työsuojelun toimintaohjelmissa.{' '}
      </Grid>
      <p className={classes.bold}>Työsuojelun yhteistoiminnan järjestäminen </p>
      <Grid item className={classes.gridItem}>
        Henkilöstöpalveluyrityksen tulee järjestää lain mukainen työsuojelun yhteistoiminta.
        Henkilöstöpalveluyrityksen on nimettävä työsuojelupäällikkö ja henkilöstöpalveluyrityksen
        työntekijöiden on valittava keskuudestaan työsuojeluvaltuutettu sekä kaksi varavaltuutettua,
        mikäli työpaikalla työskentelee säännöllisesti vähintään 10 työntekijää (vuokratyöntekijät
        lasketaan tähän mukaan). Silloinkin jos työsuojeluvaltuutettuna toimii vuokratyöntekijä,
        tulee työsuojeluvaltuutetun tehtävien hoitamista varten varata riittävästi aikaa.
        Vuokratyöntekijä ei tällöin voi tehdä vuokratyökomennukseensa liittyviä tehtäviä koko
        työaikaansa, vaan sovittava osa työajasta kuluu työsuojeluvaltuutetun tehtäviin.{' '}
      </Grid>
      <p className={classes.bold}>Perehdytys </p>
      <Grid item className={classes.gridItem}>
        Henkilöstöpalveluyritys antaa aina ensin uudelle työntekijälleen yleisperehdytyksen, jossa
        käydään läpi henkilöstöpalveluyrityksen toimintatapoja ja työturvallisuuteen liittyviä
        yleisiä käytäntöjä. Perehdytyksestä tulee sopia käyttäjäyrityksen kanssa.{' '}
      </Grid>
      <p className={classes.bold}>
        Ilmoittaminen nuorten työntekijöiden käyttämisestä vaarallisiin töihin
      </p>
      <Grid item className={classes.gridItem}>
        Jos 16-17-vuotias vuokratyöntekijä tekee sosiaali- ja terveysministeriön asetuksella
        188/2012 vahvistetussa esimerkkiluettelossa mainittua vaarallista työtä,
        henkilöstöpalveluyrityksen on tehtävä siitä ilmoitus työsuojeluviranomaiselle. Ilmoitusta ei
        tarvitse tehdä, jos vuokratyöntekijä on suorittanut työhön ammatillisen tutkinnon tai sen
        soveltuvan osan.{' '}
      </Grid>
      <p className={classes.bold}>Työtapaturmat </p>
      <Grid item className={classes.gridItem}>
        Henkilöstöpalveluyrityksen on ilmoitettava vuokratyöntekijälle sattuneesta työtapaturmasta
        vakuutusyhtiölle ja pidettävä tapaturmaluetteloa vuokratyöntekijöille sattuneista
        tapaturmista. Henkilöstöpalveluyrityksen on viipymättä ilmoitettava vuokratyöntekijälle
        sattuneesta vakavasta työtapaturmasta poliisille ja aluehallintoviraston työsuojelun
        vastuualueelle.{' '}
      </Grid>
      <p style={{ fontWeight: 'bold' }}>Keikkakaverin sisäiset linkit </p>
      <Link href='' style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>
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
        Laki työsuojelun valvonnasta ja työpaikan työsuojeluyhteistoiminnasta (44/2006) eli ns.
        työsuojelun valvontalaki
      </Grid>
      <Link
        href='https://www.finlex.fi/fi/laki/ajantasa/2006/20060044'
        className={classes.gridItem}
        style={{ display: 'inline-block', width: '100%' }}
      >
        https://www.finlex.fi/fi/laki/ajantasa/2006/20060044
      </Link>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        {' '}
        Valtioneuvoston asetus nuorille työntekijöille erityisen haitallisista ja vaarallisista
        töistä 475/2006.{' '}
      </Grid>
      <Link
        href='https://www.finlex.fi/fi/laki/alkup/2006/20060475'
        style={{ display: 'inline-block', width: '100%' }}
      >
        {' '}
        https://www.finlex.fi/fi/laki/alkup/2006/20060475
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
