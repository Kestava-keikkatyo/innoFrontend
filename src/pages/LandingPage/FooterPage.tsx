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
import logo from '../../assets/keikka-kaveriFooter.png';
import { useTranslation } from 'react-i18next';

export interface FooterPageProps {}

const FooterColumn: React.FC<any> = ({ header, list }) => (
  <>
    <Typography className='footer-header'>{header}</Typography>
    <List component="nav" aria-label="main mailbox folders">
      {list.map((e: string, i: number) => (
        <ListItem disableGutters button key={i} className="footer-list">
          <ListItemText primary={`${e}`} />
        </ListItem>
      ))}
    </List>
  </>
)

const FooterPage: React.FC<FooterPageProps> = () => {
  const { t } = useTranslation();
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
      <Button>{t('register')}</Button>
      <Button>{t('login_title')}</Button>
    </CardActions>
  </Card>
)
  return (
    <Grid container
    alignItems="stretch"
    justifyContent="flex-start"
     className="landing-part4" >
      <Container>
      <div className='spacing2' />
      <Grid item xs={12}>
        <Grid container className="landing-container2">
          <Grid item xs={12} md={4} className="landing-container">
              <CustomCard
                header={t('worker_question')}
                content={[
                  t('make_money'),
                  t('work_flexibly'),
                  t('stressFree_work'),
                ]} />
          </Grid>
          <Grid item xs={12} md={4} className="landing-container">
              <CustomCard
                header={t('user_company')}
                content={[
                  t('flexible_model'),
                  t('recruitment_process'),
                  t('productivity'),
                ]} />
          </Grid>
          <Grid item xs={12} md={4} className="landing-container">
              <CustomCard
                header={t('rental_company')}
                content={[
                  t('orientation'),
                  t('automation'),
                  t('wellBeing'),
                ]} />
          </Grid>
        </Grid>
      </Grid>
      </Container>
      {/*
       * Kortit loppuvat, footer alkaa
       */}
      <Grid item xs={12} className="bg-orange">
        <Spacing p1 className="landing-spacing">
          <Grid container className="text-black footer-container">
            <Grid item xs={12} sm={4} className="footer-item footer-logo">
              <Grid item xs={4} sm={10} md={6} >
                <img src={logo} alt="keikkakaveri-logo" className="bw-logo" />
              </Grid>
              <Grid item xs={6} sm={12} md={5} >
                <Typography>{t('contact_information')}</Typography>
                <Typography>Yrjönkatu 29 C</Typography>
                <Typography>00100 Helsinki</Typography>
                <Typography>info@keikkakaveri.fi</Typography>
              </Grid>
            </Grid>
            <Grid item xs={4} sm={3} className="footer-item footer-third">
              <FooterColumn
                header={t('topical')}
                list={[t('news'), t('articles'), 'Twitter', 'Youtube']} />
            </Grid>
            <Grid item xs={4} sm={3} className="footer-item footer-third">
              <FooterColumn
                header={t('collaboration')}
                list={[t('ttk'), t('esr'), 'Kestävä keikkatyö']} />
            </Grid>
            <Grid item xs={4} sm={3} className="footer-item footer-third">
              <FooterColumn
                header={t('get_to_know')}
                list={[t('databank'), 'Keikkakaveri', t('privacy_statement')]} />
            </Grid>
          </Grid>
        </Spacing>
      </Grid>
    </Grid>
  );
};

export default FooterPage
