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
import vastuualueet_en from '../../assets/tietopankki/vastuualueet_en.json';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export interface ContentResponsibilitiesProps {}


const ContentResponsibilities: React.FC<ContentResponsibilitiesProps> = () => {
  const { t } = useTranslation();
  let Vastuualueet = vastuualueet;
  if(i18next.language == 'en') {
    Vastuualueet = vastuualueet_en;
  } else {
    Vastuualueet = vastuualueet;
  }
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
            {t('areas_of_responsibility_button')}
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
                  {t('read_more')}
                </Button>
              }
              title={t('worker')}
            />
            <CardContent>
              <List component="nav" aria-label="mailbox folders">
                <Divider />
                {Vastuualueet.worker.map((e, i) => (
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
                  {t('read_more')}
                </Button>
              }
              title={t('business')}
            />
            <CardContent>
              <List component="nav" aria-label="mailbox folders">
                <Divider />
                {Vastuualueet.business.map((e, i) => (
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
                  {t('read_more')}
                </Button>
              }
              title={t('agency')}
            />
            <CardContent>
              <List component="nav" aria-label="mailbox folders">
                <Divider />
                {Vastuualueet.agency.map((e, i) => (
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
