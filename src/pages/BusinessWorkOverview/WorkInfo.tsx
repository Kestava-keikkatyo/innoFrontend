import React from "react";
import Paper from "@mui/material/Paper";
import { Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
      padding: theme.spacing(0, 3),
      textAlign: 'center'
    },
    paper: {
      width: "40%",
      margin: `${theme.spacing(1)} auto`,
      padding: theme.spacing(2),
 
    },
    button: {
      marginBottom: "5%",
    },
  })
);


const WorkInfo:React.FC<any> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h1>JARMO OY</h1>
        <h1>Front end koodaaja</h1>
        <div>
          <Button variant="contained" color="primary">
            Hae työpaikkaa
          </Button>
        </div>

        <Typography>
          <h3>Työtehtävät:</h3>
          Tarkoituksesi on ylläpitää sivustoamme ja kehittää sitä eteenpäin
          tiimin toiveiden mukaisesti. Koodaaminen tapahtuu Reactilla ja
          hyödynnämme myös paljon erilaisia kirjastoja.
        </Typography>
        <Typography>
          <h3>Tarjoamme sinulle:</h3>
          Upeat tilat Helsingin keskustassa, jossa kaunis näkymä
          Mannerheimintielle. Paljon etuja, kuten alennuksia firmamme kautta ja
          kulttuuriseteleitä. Lisäksi meillä on paljon virkispäiviä.
        </Typography>
        <Typography>
          <h3>Edellytämme sinulta:</h3>
          <ul>Pirteää asennetta</ul>
          <ul>Olet opiskellut vähintään kaksi vuotta alalla</ul>
          <ul>Motivaatiota oppia uutta</ul>
          <ul>Pystyä työskentelemään tiimissä ja itsenäisesti</ul>
        </Typography>
        <Typography>
          <h3> Kiinnostuitko? </h3>
          Lähetä hakemuksesi meille tämän ilmoituksen kautta. Kerro koulutuksesi
          ja itsestäsi tärkeimmät asiat. Lisäksi palkkatoiveesi. Valinta tehdään
          heti sopivan henkilön löytyessä, joten ole nopea.
        </Typography>
        <Typography>
        <h3>Lisätietoja</h3>
        </Typography>
       <ul> Sijainti: Espoo, Uusimaa </ul>
       <ul>Hakuaika päättyy: 03.12.2021,</ul> 
        <ul>Työntyyppi: Vakituinen työsuhde</ul>
        <ul>Tehtäväalue: Toimistotyö</ul>
        <Button variant="contained" color="primary">
            Lähetä ilmoitus sähköpostiin
          </Button>
      </Paper>
    </div>
  );
};

export default WorkInfo;
