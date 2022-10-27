
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';



const CustomerContractGP: React.FC = () => {
  const { t } = useTranslation();


  return (
  <><Trans>
    <ul>
      <li>{t('good_practices_customer_contract_array', { joinArrays: '<br/>' })}</li>
    </ul>
  </Trans></>  


);


}


export default CustomerContractGP; 

