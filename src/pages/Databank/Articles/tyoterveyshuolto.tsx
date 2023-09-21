import { Grid, Link } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@mui/styles'

const Article5 = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item className={classes.gridItem}>
        Henkilöstöpalveluyritys järjestää työntekijöilleen lakisääteisen työterveyshuollon
        riippumatta työntekijän työsuhteen muodosta ja pituudesta. Lakisääteinen työterveyshuolto on
        työkyvyn tukemista ennaltaehkäisevin toimin eikä siihen sisälly sairaanhoitoa.
        Henkilöstöpalveluyritys voi kuitenkin järjestää myös sairaanhoidon työterveyshuollon
        palveluiden tuottajan kautta, mutta tämä on työnantajalle vapaaehtoista.  
      </Grid>
      <Grid item className={classes.gridItem}>
        Lakisääteinen työterveyshuolto sisältää  {' '}
      </Grid>
      <ul>
        <li>työpaikan terveysriskeihin perustuvat terveystarkastukset  </li>
        <li>työpaikan terveysvaarojen selvittämisen työpaikkaselvityksen avulla</li>
        <li>toimenpide-ehdotukset työolojen parantamiseksi ja työkyvyn edistämiseksi  </li>
        <li>toimenpide-ehdotukset työolojen parantamiseksi ja työkyvyn edistämiseksi  </li>
        <li>työkykyä ylläpitävään toimintaan osallistumisen</li>
        <li>työkykyä ylläpitävään toimintaan osallistumisen</li>
        <li>työpaikan ensiapuvalmiuden ohjauksen</li>
      </ul>
      <Grid item className={classes.gridItem}>
        Työterveyshuollosta on oltava kirjallinen sopimus ja toimintasuunnitelma, sopimuksen tulee
        olla työntekijöiden nähtävillä. Toimintasuunnitelma tulee tarkistaa vuosittain. 
        Henkilöstöpalveluyrityksen vastuulla on yhteistyössä työterveyshuollon kanssa selvittää
        työntekijän työkyky ja sopivuus vuokratyöhön.
      </Grid>
      <Grid item className={classes.gridItem} style={{ fontWeight: 'bold' }}>
        Keikkakaverin sisäiset linkit
      </Grid>
      <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>
        LOMAKE 1 - ASIAKASSOPIMUKSEEN LIITTYVÄT TYÖTURVALLISUUS- JA TYÖHYVINVOINTIASIAT{' '}
      </Link>
      <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>
        LOMAKE 2 – TYÖNTEKIJÄN YLEISPEREHDYTYS{' '}
      </Link>
      <Grid
        item
        className={classes.gridItem}
        style={{ fontWeight: 'bold', display: 'inline-block', width: '100%' }}
      >
        Lisätietoa
      </Grid>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        Työsuojelu.fi. Työterveyshuolto.
      </Grid>
      <Link
        href='https://www.tyosuojelu.fi/tyoterveys-ja-tapaturmat/tyoterveyshuolto'
        className={classes.gridItem}
        style={{ display: 'inline-block', width: '100%' }}
      >
        https://www.tyosuojelu.fi/tyoterveys-ja-tapaturmat/tyoterveyshuolto
      </Link>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        Työsuojelu.fi. Työterveyshuollon järjestäminen ja sisältö.{' '}
      </Grid>
      <Link
        href='https://www.tyosuojelu.fi/tyoterveys-ja-tapaturmat/tyoterveyshuolto/jarjestaminen'
        className={classes.gridItem}
        style={{ display: 'inline-block', width: '100%' }}
      >
        https://www.tyosuojelu.fi/tyoterveys-ja-tapaturmat/tyoterveyshuolto/jarjestaminen
      </Link>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        Työterveyshuoltolaki 2001/1383.
      </Grid>
      <Link
        href='https://www.finlex.fi/fi/laki/ajantasa/2001/20011383'
        style={{ display: 'inline-block', width: '100%' }}
      >
        https://www.finlex.fi/fi/laki/ajantasa/2001/20011383
      </Link>
    </Grid>
  )
}

const useStyles = makeStyles(() => ({
  gridItem: {
    marginBottom: '20px',
  },
}))
export default Article5
