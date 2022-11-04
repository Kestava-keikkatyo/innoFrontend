
import React from 'react';
import {useTranslation } from 'react-i18next';
import InterActiveListComponent from './InterActiveListComponent';


const CustomerContractGP: React.FC = () => {
  const { t } = useTranslation();
  const customerContractGoodPracticeArray = (t('good_practices_customer_contract_array', {returnObjects: true}) as string[]);


  return (
    <InterActiveListComponent arrayName={customerContractGoodPracticeArray}/> 
  );
  }


export default CustomerContractGP; 

