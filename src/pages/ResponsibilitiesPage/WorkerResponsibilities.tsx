import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Card } from '@mui/material';
import SrcFile from './SrcFile';

const WorkerResponsibilities = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat, serif',
      fontSize: 15,
      allVariants: {
        color: "black"
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" className={classes.root}>
        <Typography variant="h1" className={classes.header}>
          {t('responsibilities')}
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          <SrcFile inputString="workerResponsibilitiesArray" inputIndex={0} />
          <SrcFile inputString="workerResponsibilitiesArray" inputIndex={1} />
          <SrcFile inputString="workerResponsibilitiesArray" inputIndex={2} />
          <SrcFile inputString="workerResponsibilitiesArray" inputIndex={3} />
          <SrcFile inputString="workerResponsibilitiesArray" inputIndex={4} />
        </Typography>
      </Container>
    </ThemeProvider>
  )
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: "#FDFDFD",
    marginTop: 30,
    margin: 0,
    padding: 0,
  },
  header: {
    marginLeft: 35,
    fontSize: theme.typography.pxToRem(38),
    fontWeight: theme.typography.fontWeightRegular,
    marginBottom: 20
  },
  subtitle: {
    marginLeft: 24,
  },
  card: {
    margin: 10,
    padding: 10,
    width: '90%'
  },
}));

export default WorkerResponsibilities;