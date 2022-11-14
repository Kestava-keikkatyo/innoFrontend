import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { Container, Card, Stack, Divider, List, ListItem, ListItemIcon, ListItemText, Button} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';




const ResponsibilitiesToAll = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [infoNotShowing,notChecked]=useState(true)

  const handleClick = () => {
    notChecked(!infoNotShowing);

  }

  return (
    <Container maxWidth="xl" className={classes.root}>
       <Card className={classes.card}>
      <Typography variant="h1" color="primary" className={classes.header}>
        {t('responsibilities')}
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
      <List>
        <Card className={classes.infoCard}>
        <ListItem>
 
          <ListItemText primary={t('responsibility_1')}/>
          <Button 
          size="small" 
          onClick={handleClick} 
          startIcon={infoNotShowing?<KeyboardArrowLeftIcon fontSize='small' />:<KeyboardArrowDownIcon fontSize='small'/>}> 
          </Button>
         
        </ListItem>
         
          {infoNotShowing? '':
          <ListItemText primary={t('responsibility_1_article')}/>
          }

        </Card>

        <Card className={classes.infoCard}>
          <ListItem>
       
             <ListItemText primary={t('responsibility_2')}/>
              <Button 
              size="small" 
              startIcon={<KeyboardArrowLeftIcon fontSize='small' />}> 
              </Button>
          </ListItem>
        </Card>

        <Card className={classes.infoCard}>
          <ListItem>
     
             <ListItemText primary={t('responsibility_3')}/>
              <Button 
              size="small" 
              startIcon={<KeyboardArrowLeftIcon fontSize='small' />}> 
              </Button>
          </ListItem>
        </Card>

        <Card className={classes.infoCard}>
          <ListItem>
      
             <ListItemText primary={t('responsibility_4')}/>
              <Button 
              size="small" 
              startIcon={<KeyboardArrowLeftIcon fontSize='small' />}> 
              </Button>
          </ListItem>
        </Card>

        <Card className={classes.infoCard}>
          <ListItem>
         
             <ListItemText primary={t('responsibility_5')}/>
              <Button 
              size="small" 
              startIcon={<KeyboardArrowLeftIcon fontSize='small' />}> 
              </Button>
          </ListItem>
        </Card>
    
      </List>
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
    padding:20,
    width:'90%'
  },
  infoCard:{
    margin:10,
    padding:15,
  
  },


}));

export default ResponsibilitiesToAll;