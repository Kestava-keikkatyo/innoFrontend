import { Stack, ListItem, Divider, ListItemIcon, Button, Box, Checkbox } from '@mui/material';
import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import makeStyles from '@mui/styles/makeStyles';



const WorkPerformanceGP: React.FC = () => {
  const { t } = useTranslation();
  const workPerformanceGoodPracticeArray = (t('good_practices_work_performance_and_supervision_array', {returnObjects: true}) as string[]);
  const classes = useStyles()
  const [buttonText, setButtonText] = useState(t('checkAll'));
  const [style, setStyle]= useState(classes.buttonNotClicked);
  const [isChecked, setIsChecked] = useState(false);


 
  const handleClick = () => {
    setButtonText(t('readAndUnderstood'));
    setStyle(classes.buttonClicked);
    setIsChecked(true);
    
  }


  return (
   
    <Trans>
        <Stack
        divider={<Divider orientation="horizontal" variant="inset" />}
        >  
          {workPerformanceGoodPracticeArray.map((practice, index) => {
          return (
            <ListItem key={index}>
              <ListItemIcon>
                
                <Checkbox className={style} checked={isChecked} defaultChecked color="success" />
             
              </ListItemIcon>
              {practice}
            </ListItem>) 
          })}
        </Stack> 
        <Box className={classes.buttonBox}>
          <Button className={style} size="small" onClick={handleClick}>{buttonText}</Button> 
       </Box>

    </Trans>


);
}

const useStyles = makeStyles((theme) => ({

buttonBox:{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  margin: 5
},  
buttonNotClicked:{
  color:'#1976D5'
},
buttonClicked:{
  color:'green',
},


}))

export default WorkPerformanceGP;