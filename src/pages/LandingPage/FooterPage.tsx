import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
} from '@mui/material'
import React from 'react'
import Spacing from '../../components/Spacing'
import logo from "../LandingPage/keikka-kaveri4.png";

export interface FooterPageProps {}

const FooterColumn: React.FC<any> = ({ header, list }) => (
  <>
    <Typography>{header}</Typography>
    <List component="nav" aria-label="main mailbox folders">
      {list.map((e: string, i: number) => (
        <ListItem disableGutters button key={i}>
          <ListItemText primary={`> ${e}`} />
        </ListItem>
      ))}
    </List>
  </>
)

const CustomCard: React.FC<any> = ({ header, content }) => (
  <Card variant="outlined">
    <CardContent>
      <Typography variant="h5">{header}</Typography>
      <Spacing m2 />
      {content.map((e: string, i: number) => (
        <div key={i}>
          <Spacing m1 />
          <Typography color="textSecondary" gutterBottom key={i}>
            {e}
          </Typography>
          <Divider />
        </div>
      ))}
    </CardContent>
    <CardActions disableSpacing>
      <Button>Luo tili</Button>
      <Button>Kirjaudu sisään</Button>
    </CardActions>
  </Card>
)

const FooterPage: React.FC<FooterPageProps> = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="stretch"
      justifyContent="flex-start"
      className="landing-part4"
    >
      <Grid item xs={12} className="landing-part41 bg-white">
        <Grid container>
          <Grid item xs={4}>
            <Spacing m5 p5>
              <CustomCard
                header="Oletko työntekijä?"
                content={[
                  'Ansaitse rahaa',
                  'Tee joustavasti töitä',
                  'Stressitön keikkatyömalli',
                ]}
              />
            </Spacing>
          </Grid>
          <Grid item xs={4}>
            <Spacing m5 p5>
              <CustomCard
                header="Oletko käyttäjäyritys?"
                content={[
                  'Nopea ja joustava malli hankkia työntekijöitä',
                  'Pääset vaikuttamaan rekrytointiprosessiin',
                  'Hyvinvoivien työntekijöiden tuottavuus on jopa 20% normaalia parempi',
                ]}
              />
            </Spacing>
          </Grid>
          <Grid item xs={4}>
            <Spacing m5 p5>
              <CustomCard
                header="Oletko vuokratyöfirma?"
                content={[
                  'Keskitä perehdyttäminen yhteen paikkaan',
                  'Automatisaatiolla perehdytys on rennompaa',
                  'Työntekijöitesi hyvinvointi on meille tärkeää',
                ]}
              />
            </Spacing>
          </Grid>
        </Grid>
      </Grid>
      {/*
       * Kortit loppuvat, footer alkaa
       */}
      <Grid item xs={12} className="landing-part42">
        <Spacing p5>
          <Grid container className="text-white">
            <Grid xs={3} item>
              <img src={logo} alt="logo" className="bw-logo" />
              <Spacing m5 />
              <Typography>Yhteystiedot</Typography>
              <Typography>Yrjönkatu 29 C</Typography>
              <Typography>00100 Helsinki</Typography>
              <Typography>info@keikkakaveri.fi</Typography>
            </Grid>
            <Grid xs={3} item>
              <FooterColumn
                header="Ajankohtaista"
                list={['Uutiset', 'Artikkelit', 'Twitter', 'Youtube']}
              />
            </Grid>
            <Grid xs={3} item>
              <FooterColumn
                header="Yhteistyössä"
                list={['Työturvakeskus', 'ESR-rahasto', 'Kestävä keikkatyö']}
              />
            </Grid>
            <Grid xs={3} item>
              <FooterColumn
                header="Tutustu"
                list={['Tietopankki', 'Keikkakaveri', 'Tietosuojaseloste']}
              />
            </Grid>
          </Grid>
        </Spacing>
      </Grid>
    </Grid>
  )
}

export default FooterPage
