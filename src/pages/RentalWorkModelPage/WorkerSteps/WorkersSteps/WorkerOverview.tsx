import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { Container, Card, ListItem, ListItemText, Stack, Divider } from '@mui/material';

const WorkerOverview = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const overviewArray = (t('WorkerRentalWorkModelOverview', {returnObjects: true}) as string[]); 
  

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Card className={classes.card}>
        <Typography variant="h1" color="primary" className={classes.header}>
          {t('overview')} 
        </Typography>
        <Stack
         divider={<Divider orientation="horizontal" variant="inset" />}>  
          {overviewArray.map((item: any, index: any) => {
            return (
             <ListItem key={index} className={classes.list}>
                <ListItemText primary= {item.header} secondary={item.info} />        
              </ListItem>
            ) 
          })} 
        </Stack>
      </Card>     
    </Container>
  )
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: 32,
  },
  header: {
    marginLeft: 24,
    fontSize: theme.typography.pxToRem(38),
    fontWeight: theme.typography.fontWeightRegular,
    marginBottom:15
  },
  subtitle: {
    marginLeft: 24,
  },
  card:{
    margin:10,
    padding:20,
    width:'90%'
  },
  list:{
    display:'flex',
    alignItems:'center',
  }
}));

export default WorkerOverview;
