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
import { useTranslation } from 'react-i18next';

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

const CustomCard: React.FC<any> = ({ header, content }) => {
  const { t } = useTranslation();

  return (
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
        <Button>{t('sign_up')}</Button>
        <Button>{t('log_in')}</Button>
      </CardActions>
    </Card>
  )
}

const FooterPage: React.FC<FooterPageProps> = () => {
  const { t } = useTranslation();

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
                header={t('are_you.worker')}
                content={[
                  t('worker_benefit.first'),
                  t('worker_benefit.second'),
                  t('worker_benefit.third'),
                ]}
              />
            </Spacing>
          </Grid>
          <Grid item xs={4}>
            <Spacing m5 p5>
              <CustomCard
                header={t('are_you.business')}
                content={[
                  t('business_benefit.first'),
                  t('business_benefit.second'),
                  t('business_benefit.third'),
                ]}
              />
            </Spacing>
          </Grid>
          <Grid item xs={4}>
            <Spacing m5 p5>
              <CustomCard
                header={t('are_you.agency')}
                content={[
                  t('agency_benefit.first'),
                  t('agency_benefit.second'),
                  t('agency_benefit.third'),
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
              <Typography>{t('contact_information')}</Typography>
              <Typography>{t('app_contact_information.address')}</Typography>
              <Typography>{t('app_contact_information.address_part2')}</Typography>
              <Typography>{t('app_contact_information.email')}</Typography>
            </Grid>
            <Grid xs={3} item>
              <FooterColumn
                header={t('current_events')}
                list={[t('news'), t('articles'), t('twitter'), t('youtube')]}
              />
            </Grid>
            <Grid xs={3} item>
              <FooterColumn
                header={t('collaborators')}
                list={[t('centre_for_occupational_safety'), t('european_social_fund'), t('kestava_keikkatyo')]}
              />
            </Grid>
            <Grid xs={3} item>
              <FooterColumn
                header={t('learn_more')}
                list={[t('databank'), t('app_title'), t('privacy_policy')]}
              />
            </Grid>
          </Grid>
        </Spacing>
      </Grid>
    </Grid>
  )
}

export default FooterPage
