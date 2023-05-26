import { Grid, Link } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from '@mui/styles';

const Article3 = () => {

  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item className={classes.gridItem}>Käyttäjäyritys laatii työvuoroluettelon myös vuokratyöntekijöille. Työajat on järjestettävä työaikalain mukaisesti. Käyttäjäyritys toimittaa työvuoroluettelon ja tiedon toteutuneesta työajasta henkilöstöpalveluyritykselle. </Grid>
      <Grid item className={classes.gridItem}>Henkilöstöpalveluyritys pitää kirjaa työajoista ja huolehtii työajan enimmäismäärien noudattamisesta. Henkilöstöpalveluyritys vastaa myös vuokratyöntekijän vuosilomista. </Grid>
      <p style={{ fontWeight: 'bold' }}>Keikkakaverin sisäiset linkit </p>
      <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>LOMAKE 2 – TYÖNTEKIJÄN YLEISPEREHDYTYS </Link>
      <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>LOMAKE 3 – TYÖNOPASTUS </Link>
      <Link style={{ display: 'inline-block', width: '100%' }} className={classes.gridItem}>LOMAKE 5 – Perehdytys ja työnopastus kiireellisissä tilanteissa </Link>
      <Grid item className={classes.gridItem} style={{ fontWeight: 'bold', display: 'inline-block', width: '100%' }}>Lisätietoa</Grid>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>Työaikalaki 872/2019.</Grid>
      <Link href="https://www.finlex.fi/fi/laki/ajantasa/2019/20190872" className={classes.gridItem} style={{ display: 'inline-block', width: '100%' }}>https://www.finlex.fi/fi/laki/ajantasa/2019/20190872 </Link>
      <Grid item style={{ display: 'inline-block', width: '100%' }}>Vuosilomalaki 162/2005.</Grid>
      <Link href="https://www.finlex.fi/fi/laki/alkup/2005/20050162" style={{ display: 'inline-block', width: '100%' }}>https://www.finlex.fi/fi/laki/alkup/2005/20050162 </Link>
    </Grid>
  )
}

const useStyles = makeStyles(() => ({
  gridItem: {
    marginBottom: '20px'
  },
}))
export default Article3

