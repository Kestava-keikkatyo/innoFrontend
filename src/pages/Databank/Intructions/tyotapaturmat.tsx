import { Grid, Link } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@mui/styles'

const Tyotapaturmat = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item className={classes.gridItem}>
        Vuokratyöntekijän on ilmoitettava hänelle sattuneesta työtapaturmasta työnantajalleen.{' '}
      </Grid>
      <Grid item className={classes.gridItem}>
        Työnantajan eli henkilöstöpalveluyrityksen on ilmoitettava vuokratyöntekijälle sattuneesta
        työtapaturmasta vakuutusyhtiölle ja pidettävä tapaturmaluetteloa vuokratyöntekijöille
        sattuneista tapaturmista.{' '}
      </Grid>
      <Grid item className={classes.gridItem}>
        Henkilöstöpalveluyrityksen on viipymättä ilmoitettava vuokratyöntekijälle sattuneesta
        vakavasta työtapaturmasta poliisille ja aluehallintoviraston työsuojelun vastuualueelle.{' '}
      </Grid>
      <Grid item className={classes.gridItem}>
        Henkilöstöpalveluyrityksen ja käyttäjäyrityksen on hyvä sopia, miten toimitaan, jos
        vuokratyöntekijälle sattuu tapaturma. Sovitusta toimintatavasta tulee kertoa myös
        vuokratyöntekijälle.{' '}
      </Grid>
      <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>
        LOMAKE 1 - ASIAKASSOPIMUKSEEN LIITTYVÄT TYÖTURVALLISUUS- JA TYÖHYVINVOINTIASIAT{' '}
      </Link>
      <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>
        LOMAKE 2 – TYÖNTEKIJÄN YLEISPEREHDYTYS
      </Link>
      <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>
        LOMAKE 3 – TYÖNOPASTUS{' '}
      </Link>
      <Grid
        item
        className={classes.gridItem}
        style={{ fontWeight: 'bold', display: 'inline-block', width: '100%' }}
      >
        Lisätietoa
      </Grid>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        Työsuojeluhallinnon ohjeita työntekijälle ja työnantajalle
      </Grid>
      <Link
        href='https://www.tyosuojelu.fi/tyoterveys-ja-tapaturmat/tyotapaturmat '
        className={classes.gridItem}
        style={{ display: 'inline-block', width: '100%' }}
      >
        https://www.tyosuojelu.fi/tyoterveys-ja-tapaturmat/tyotapaturmat{' '}
      </Link>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        Työtapaturma- ja ammattitautilaki 459/2015.
      </Grid>
      <Link
        href='https://www.finlex.fi/fi/laki/ajantasa/2015/20150459 '
        style={{ display: 'inline-block', width: '100%', marginBottom: '20px' }}
      >
        https://www.finlex.fi/fi/laki/ajantasa/2015/20150459
      </Link>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        Laki työsuojelun valvonnasta ja työpaikan työsuojeluyhteistoiminnasta 44/2006.
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
  steps: {
    fontWeight: 'bold',
    display: 'inline-block',
    width: '100%',
  },
}))
export default Tyotapaturmat
