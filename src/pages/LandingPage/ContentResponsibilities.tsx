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
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Spacing from '../../components/Spacing';
import vastuualueet from '../../assets/tietopankki/vastuualueet.json';
import { useTranslation } from 'react-i18next';

export interface ContentResponsibilitiesProps {};

const ReadMoreButton = () => {
  const { t } = useTranslation();

  return (
    <Button variant="outlined" color="primary">
      {t('read_more')}
    </Button>
  )
};

const ContentResponsibilities: React.FC<ContentResponsibilitiesProps> = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Spacing m3 p2 />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h3">{t('areas_of_responsibility')}</Typography>
        </Grid>
        <Grid item>
          <Link to="/databank" style={{ textDecoration: 'none' }}>
            <Button color="primary" variant="contained">
              {t('read_more_about_responsibilities')}
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
                <ReadMoreButton />
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
                <ReadMoreButton />
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
                <ReadMoreButton />
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
