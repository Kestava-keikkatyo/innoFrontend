import {
  Button,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Spacing from '../../components/Spacing';
import vastuualueet from '../../assets/tietopankki/vastuualueet.json';

export interface ContentResponsibilitiesProps {}

const ContentResponsibilities: React.FC<ContentResponsibilitiesProps> = () => {
  return (
    <Container>
      <Spacing m3 p2 />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h3">Vastuualueet</Typography>
        </Grid>
        <Grid item>
          <Link to="/databank" style={{ textDecoration: 'none' }}>
            <Button color="primary" variant="contained">
              Lue lisää vastuualueista
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Spacing m5 />
      <Grid container className="landing-part3">
        <Grid item xs={12} md={4}>
          <div className="responsibilty-card">
            <CardHeader
              action={
                <Button variant="outlined" color="primary">
                  Lue lisää
                </Button>
              }
              title="Työntekijä"
            />
            <CardContent>
              <List component="nav" aria-label="mailbox folders">
                <Divider />
                {vastuualueet.worker.map((e, i) => (
                  <ListItem key={i} divider>
                    <ListItemText primary={`${i + 1}. ${e.tip}`} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="responsibilty-card">
            <CardHeader
              action={
                <Button variant="outlined" color="primary">
                  Lue lisää
                </Button>
              }
              title="Käyttäjäyritys"
            />
            <CardContent>
              <List component="nav" aria-label="mailbox folders">
                <Divider />
                {vastuualueet.business.map((e, i) => (
                  <ListItem key={i} divider>
                    <ListItemText primary={`${i + 1}. ${e.tip}`} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="responsibilty-card">
            <CardHeader
              action={
                <Button variant="outlined" color="primary">
                  Lue lisää
                </Button>
              }
              title="Vuokratyöyritys"
            />
            <CardContent>
              <List component="nav" aria-label="mailbox folders">
                <Divider />
                {vastuualueet.agency.map((e, i) => (
                  <ListItem key={i} divider>
                    <ListItemText primary={`${i + 1}. ${e.tip}`} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContentResponsibilities;
