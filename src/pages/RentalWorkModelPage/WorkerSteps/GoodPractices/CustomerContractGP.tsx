import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

const CustomerContractGP: React.FC = () => {
  const { t } = useTranslation();
  return (
    <><Trans>{t('good_practices_customer_contract')}</Trans>
      </>
 
  
  );
}


export default CustomerContractGP;