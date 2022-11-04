import { Stack, ListItem, Divider, ListItemIcon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';


const ContractOfEmploymentGP: React.FC = () => {
  const { t } = useTranslation();
  const employeeContractGoodPracticeArray = (t('good_practices_employment_contract_and_general_orientation_array', {returnObjects: true}) as string[]);


  return (
   
    <Trans>
        <Stack
        divider={<Divider orientation="horizontal" variant="inset" />}
        >  
          {employeeContractGoodPracticeArray.map((practice, index) => {
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

export default ContractOfEmploymentGP;