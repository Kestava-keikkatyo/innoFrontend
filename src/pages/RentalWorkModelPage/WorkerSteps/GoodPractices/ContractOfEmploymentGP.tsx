import React from 'react';
import { useTranslation } from 'react-i18next';
import InterActiveListComponent from './InterActiveListComponent';


const ContractOfEmploymentGP: React.FC = () => {
  const { t } = useTranslation();
  const employeeContractGoodPracticeArray = (t('good_practices_employment_contract_and_general_orientation_array', {returnObjects: true}) as string[]);

  return (
    <InterActiveListComponent arrayName={employeeContractGoodPracticeArray}/> 
  );
  }

export default ContractOfEmploymentGP;