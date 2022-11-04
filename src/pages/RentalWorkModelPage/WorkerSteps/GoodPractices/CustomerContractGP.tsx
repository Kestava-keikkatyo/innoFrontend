
import { Divider } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';


const CustomerContractGP: React.FC = () => {
  const { t } = useTranslation();
  const customerContractGoodPracticeArray = (t('good_practices_customer_contract_array', {returnObjects: true}) as string[]);


  return (
   
    <Trans>
      <Divider/> 
      <ul>
      {customerContractGoodPracticeArray.map((practice, index) => {
          return (<li key={index}>{practice}</li>)
        })}
      </ul>
      <Divider/>
    </Trans>


);


}


export default CustomerContractGP; 

