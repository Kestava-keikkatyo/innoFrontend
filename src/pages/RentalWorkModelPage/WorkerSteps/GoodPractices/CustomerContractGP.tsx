
import { Stack, ListItem, Divider, ListItemIcon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';


const CustomerContractGP: React.FC = () => {
  const { t } = useTranslation();
  const customerContractGoodPracticeArray = (t('good_practices_customer_contract_array', {returnObjects: true}) as string[]);


  return (
   
    <Trans>
        <Stack
        divider={<Divider orientation="horizontal" variant="inset" />}
        >  
          {customerContractGoodPracticeArray.map((practice, index) => {
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


export default CustomerContractGP; 

