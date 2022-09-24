import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Spacing from '../../components/Spacing';
import { useTranslation } from 'react-i18next';

export interface ContentLifeSpanProps {}

const LifeSpanStep: React.FC<any> = ({ header, content, form }) => (
  <Card variant="outlined" className="lifespan-step relative">
    <CardContent>
      <Typography variant="body1">{header}</Typography>
      <Spacing m2 />
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {content}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <Typography color="textSecondary" gutterBottom>
        {form}
      </Typography>
    </CardActions>
  </Card>
);

const ContentLifeSpan: React.FC<ContentLifeSpanProps> = () => {
  const { t } = useTranslation();
  return (
    <Container style={{backgroundColor: "white"}}>
      <div className='spacing' />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h1" className="header3">{t('work_lifespan')}</Typography>
        </Grid>
        <Grid item>
          <Link to="/databank" style={{ textDecoration: 'none' }}>
            <Button color="primary" variant="contained">
            {t('lifespan_button')}
            </Button>
          </Link>
        </Grid>
      </Grid>
      {/*<Spacing m5 /> */}
      <Grid container className="landing-WLS">
        <Grid item className="lifespan-container">
          <Grid container>
            <Grid item xs={12} sm={6} md={4}>
              <LifeSpanStep
                header={t('customer_agreement')}
                content={t('business_agency')}
                form={t('form')+ " 1"}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <LifeSpanStep
                header={t('employee_order')}
                content={t('business_agency')}
                form="0"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <LifeSpanStep
                header={t('contract_orientation')}
                content={t('agency_agencyWorker')}
                form={t('form')+ " 2"}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <LifeSpanStep
                header={t('customer_agreement')}
                content={t('business_agency')}
                form={t('form')+ " 1"}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <LifeSpanStep
                header={t('employee_order')}
                content={t('business_agency')}
                form="0"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <LifeSpanStep
                header={t('contract_orientation')}
                content={t('agency_agencyWorker')}
                form={t('form')+ " 2"}
              />
            </Grid>
          </Grid>
          {/* <LifeSpanStep
            header="Asiakassopimus"
            content="Vuokrayritys / Käyttäjäyritys"
            form="Lomake 1"
          />
          <LifeSpanStep
            header="Työntekijän tilaus ja valinta"
            content="Vuokrayritys / Käyttäjäyritys"
            form="0"
          />
          <LifeSpanStep
            header="Työsopimus ja yleisperehdytys"
            content="Vuokrayritys / Vuokratyöntekijä"
            form="Lomake 2"
          />
          <LifeSpanStep
            header="Opastus työhön ja työolohin"
            content="Käyttäjäyritys / Vuokratyöntekijä"
            form="Lomake 3"
          /> */}
          {/* <LifeSpanStep
            header="Työsuoritus ja valvonta"
            content="Käyttäjäyritys / Vuokratyöntekijä"
            form="0"
          />
          <LifeSpanStep
            header="Palaute ja toiminnan arviointi"
            content="Vuokrayritys / Käyttäjäyritys"
            form="Form 4"
          /> */}
        </Grid>
        {/* <Grid item xs={12} md={6} className="bg-white">
          Part2
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default ContentLifeSpan;
