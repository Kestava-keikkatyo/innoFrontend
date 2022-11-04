import { Stack, ListItem, Divider, ListItemIcon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';


const OrderingEmployeeGP: React.FC = () => {
  const { t } = useTranslation();
  const orderingEmployeeGoodPracticeArray = (t('good_practices_order_and_selection_of_the_employee_array', {returnObjects: true}) as string[]);


  return (
   
    <Trans>
        <Stack
        divider={<Divider orientation="horizontal" variant="inset" />}
        >  
          {orderingEmployeeGoodPracticeArray.map((practice, index) => {
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

export default OrderingEmployeeGP;