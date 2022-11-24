import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { Container, Card} from '@mui/material';
import SrcFile from './SrcFile';


const BusinessResponsibilities = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
       <Card className={classes.card}>
          <Typography variant="h1" color="primary" className={classes.header}>
           {t('responsibilities')}
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>       
            <SrcFile inputString="businessResponsibilitiesArray" inputIndex={0}/> 
            <SrcFile inputString="businessResponsibilitiesArray" inputIndex={1}/>
            <SrcFile inputString="businessResponsibilitiesArray" inputIndex={2}/>
            <SrcFile inputString="businessResponsibilitiesArray" inputIndex={3}/>
            <SrcFile inputString="businessResponsibilitiesArray" inputIndex={4}/>  
            <SrcFile inputString="businessResponsibilitiesArray" inputIndex={5}/>  
            <SrcFile inputString="businessResponsibilitiesArray" inputIndex={6}/>  
             
          </Typography>   
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
    marginBottom:20
  },
  subtitle: {
    marginLeft: 24,
  },
  card:{
    margin:10,
    padding:10,
    width:'90%'
  },

}));

export default BusinessResponsibilities;