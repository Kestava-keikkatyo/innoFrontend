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
  Container,
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
        <ListItem disableGutters button key={i} className="footer-list">
          <ListItemText primary={`> ${e}`} />
        </ListItem>
      ))}
    </List>
  </>
)

const CustomCard: React.FC<any> = ({ header, content }) => (
  <Card variant="outlined">
    <CardContent>
      <Typography variant="h1" className='card-header'>{header}</Typography>
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
    <Grid container
    alignItems="stretch"
    justifyContent="flex-start"
     className="landing-part4" >
      <Container>
      <div className='spacing2' />
      <Grid item xs={12} className="landing-part41 bg-white">
        <Grid container className="landing-container2">
          <Grid item xs={12} md={4} className="landing-container">
              <CustomCard
                header="Oletko työntekijä?"
                content={[
                  'Ansaitse rahaa',
                  'Tee joustavasti töitä',
                  'Stressitön keikkatyömalli',
                ]} />
          </Grid>
          <Grid item xs={12} md={4} className="landing-container">
              <CustomCard
                header="Oletko käyttäjäyritys?"
                content={[
                  'Nopea ja joustava malli hankkia työntekijöitä',
                  'Pääset vaikuttamaan rekrytointiprosessiin',
                  'Hyvinvoivien työntekijöiden tuottavuus on jopa 20% normaalia parempi',
                ]} />
          </Grid>
          <Grid item xs={12} md={4} className="landing-container">
              <CustomCard
                header="Oletko vuokratyöfirma?"
                content={[
                  'Keskitä perehdyttäminen yhteen paikkaan',
                  'Automatisaatiolla perehdytys on rennompaa',
                  'Työntekijöitesi hyvinvointi on meille tärkeää',
                ]} />
          </Grid>
        </Grid>
      </Grid>
      </Container>
      {/*
       * Kortit loppuvat, footer alkaa
       */}
      <Grid item xs={12} className="landing-part42">
        <Spacing p1 className="landing-spacing">
          <Grid container className="text-black footer-container">
            <Grid item xs={3} md={4} className="footer-item"
            style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
              <Grid item xs={8} md={6} >
                <img src={logo} alt="keikkakaveri-logo" className="bw-logo" />
              </Grid>
              <Grid xs={12} md={5} item>
                <Typography>Yhteystiedot:</Typography>
                <Typography>Yrjönkatu 29 C</Typography>
                <Typography>00100 Helsinki</Typography>
                <Typography>info@keikkakaveri.fi</Typography>
              </Grid>
            </Grid>
            <Grid item className="footer-item">
              <FooterColumn
                header="Ajankohtaista"
                list={['Uutiset', 'Artikkelit', 'Twitter', 'Youtube']} />
            </Grid>
            <Grid item className="footer-item">
              <FooterColumn
                header="Yhteistyössä"
                list={['Työturvakeskus', 'ESR-rahasto', 'Kestävä keikkatyö']} />
            </Grid>
            <Grid item className="footer-item">
              <FooterColumn
                header="Tutustu"
                list={['Tietopankki', 'Keikkakaveri', 'Tietosuojaseloste']} />
            </Grid>
          </Grid>
        </Spacing>
      </Grid>
    </Grid>
  );
};

export default FooterPage
