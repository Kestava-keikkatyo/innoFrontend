import { Stack, ListItem, Divider, ListItemIcon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';


const GuidanceToWorkGP: React.FC = () => {
  const { t } = useTranslation();
  const guidanceToWorkGoodPracticeArray = (t('good_practices_guidance_on_work_and_working_conditions_array', {returnObjects: true}) as string[]);


  return (
   
    <Trans>
        <Stack
        divider={<Divider orientation="horizontal" variant="inset" />}
        >  
          {guidanceToWorkGoodPracticeArray.map((practice, index) => {
          return (
            <ListItem key={index}>
              <ListItemIcon>
                <FiberManualRecordIcon fontSize='small' />
              </ListItemIcon>
              {practice}
            </ListItem>) 
          })}
        </Stack>  
     
    </Trans>


);
}

export default GuidanceToWorkGP;