import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Card, ListItem, ListItemText, Stack, Divider } from '@mui/material';

const Overview = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const overviewArray = (t('RentalWorkModelOverview', { returnObjects: true }) as string[]);

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
          <Typography variant="h6" style={{fontWeight: 'bold', marginBottom: '20px'}}>
            {t('overview')}
          </Typography>
          <Card className={classes.card}>
          <Stack
            divider={<Divider orientation="horizontal" variant="inset" />}>
            {overviewArray.map((item: any, index: any) => {
              return (
                <ListItem key={index} className={classes.list}>
                  <ListItemText primary={item.header} secondary={item.info} />
                </ListItem>
              )
            })}
          </Stack>
        </Card>
      </Container>
    </ThemeProvider>
  )
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#FDFDFD',
    marginTop: '30px',
  },
  header: {
    marginLeft: 24,
    fontSize: theme.typography.pxToRem(38),
    fontWeight: theme.typography.fontWeightRegular,
    marginBottom: 15
  },
  subtitle: {
    marginLeft: 24,
  },
  card: {
    margin: 10,
    padding: 20,
    width: '90%'
  },
  list: {
    display: 'flex',
    alignItems: 'center',
  }
}));

export default Overview;
