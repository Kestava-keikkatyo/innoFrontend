import { Grid, Link } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@mui/styles'

const Article15 = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item className={classes.gridItem}>
        Työntekijän on työpaikalla vältettävä sellaista muihin työntekijöihin kohdistuvaa häirintää
        ja muuta epäasiallista kohtelua, joka aiheuttaa heidän turvallisuudelleen tai terveydelleen
        haittaa tai vaaraa. Työntekijän tulee ilmoittaa kokemastaan häirinnästä työnantajalle.{' '}
      </Grid>
      <Grid item className={classes.gridItem} style={{ fontWeight: 'bold' }}>
        Keikkakaverin sisäiset linkit
      </Grid>
      <Link className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>
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
        Työturvallisuuslaki 738/2002.
      </Grid>
      <Link
        href='https://www.finlex.fi/fi/laki/ajantasa/2002/20020738'
        className={classes.gridItem}
      >
        https://www.finlex.fi/fi/laki/ajantasa/2002/20020738
      </Link>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>
        Epäasiallinen kohtelu.
      </Grid>
      <Link
        href='https://www.tyosuojelu.fi/tyoolot/epaasiallinen-kohtelu'
        className={classes.gridItem}
      >
        https://www.tyosuojelu.fi/tyoolot/epaasiallinen-kohtelu{' '}
      </Link>
    </Grid>
  )
}

const useStyles = makeStyles(() => ({
  gridItem: {
    marginBottom: '20px',
  },
}))
export default Article15
