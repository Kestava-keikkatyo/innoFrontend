import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { Card, ListItem, ListItemText, Button, Link} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function KlickForMoreInfoListComponent(props: any) {
  const { t } = useTranslation();
  const responsibilityArray=(props.arrayName);
  const index=(props.indexNumber);
  const responsibilitieHeader= responsibilityArray[index].header;
  const responsibilitieSummary=responsibilityArray[index].summary;
  const classes = useStyles();
  const [infoNotShowing,notChecked]=useState(true)

  const handleClick = () => {
    notChecked(!infoNotShowing);

  }

  return (
    <Card className={classes.infoCard}>
        <><ListItem>
          <ListItemText primary={responsibilitieHeader} />
          <Button
            size="small"
            onClick={handleClick}
            startIcon={infoNotShowing ? <KeyboardArrowLeftIcon fontSize='small' /> : <KeyboardArrowDownIcon fontSize='small' />}>
          </Button>
        </ListItem>
        <div>
         {infoNotShowing ? <p> </p> :<><ListItemText primary={responsibilitieSummary} /><Link href="/Databank" underline="none">{t('read_more_about_responsibilities')}</Link></>}
        </div></>
    </Card>
  )
};

const useStyles = makeStyles((theme: Theme) => ({
  infoCard:{
    margin:15,
    padding:10,
  }
}));

export default KlickForMoreInfoListComponent;