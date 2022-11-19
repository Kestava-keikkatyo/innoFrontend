import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { Container } from '@mui/material';

const Overview = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h1" color="primary" className={classes.header}>
        {t('overview')}
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam
        distinctio esse iure modi neque quaerat, repudiandae. Accusantium alias
        aut commodi debitis ea harum ipsa itaque laudantium molestiae nesciunt
        quis sint vel velit, vitae voluptatibus! Commodi dicta dolorum eaque
        earum esse est facere fugit iste labore magnam, minus, neque nobis!
      </Typography>
    </Container>
  )

};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: 8,
  },
  header: {
    marginLeft: 24,
    fontSize: theme.typography.pxToRem(38),
    fontWeight: theme.typography.fontWeightRegular,
  },
  subtitle: {
    marginLeft: 24,
  }
}));

export default Overview;
