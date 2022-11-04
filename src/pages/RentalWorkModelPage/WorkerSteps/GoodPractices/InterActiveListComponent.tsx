import { Stack, ListItem, Divider, ListItemIcon, Button, Box} from '@mui/material';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import makeStyles from '@mui/styles/makeStyles';



function InterActiveListComponent(props: any){
  const { t } = useTranslation();
  const goodPracticeArray = (props.arrayName);
  const classes = useStyles()
  const [buttonText, setButtonText] = useState(t('checkAll'));
  const [style, setStyle]= useState(classes.buttonNotClicked);
  const [show,setShow]=useState(true)
  const [hide, setHide]=useState(false);


 
  const handleClick = () => {
    setButtonText(t('readAndUnderstood'));
    setStyle(classes.buttonClicked);
    setShow(false);
    setHide(true);
  }


  return (
   
    <Trans>
        <Stack
        divider={<Divider orientation="horizontal" variant="inset" />}
        margin='20px'
        >  
          {goodPracticeArray.map((practice: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => {
          return (
            <ListItem key={index}>
              <ListItemIcon>
                <div className={style}>
                  {show?<CircleOutlinedIcon fontSize='small'/>:null}
                </div>
                <div className={style}>
                  {hide?<DoneRoundedIcon/>:null}
                </div>  
              </ListItemIcon>
              {practice}
            </ListItem>) 
          })}
        </Stack> 
        <Box className={classes.buttonBoxCenter}>
          <Button className={style} size="small" onClick={handleClick}>{buttonText}</Button> 
       </Box>

    </Trans>


);
}

const useStyles = makeStyles((theme) => ({

buttonBoxCenter:{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  margin: 5
},
buttonBoxRight:{
  display:'flex',
  justifyContent:'right',
  alignItems:'center',

},  
buttonNotClicked:{
  color:'#1976D5'
},
buttonClicked:{
  color:'green',
},



}))

export default InterActiveListComponent;