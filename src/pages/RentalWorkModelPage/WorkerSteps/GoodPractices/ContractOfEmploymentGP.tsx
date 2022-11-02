import { Divider } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';


const ContractOfEmploymentGP: React.FC = () => {
  const { t } = useTranslation();
  const employeeContractGoodPracticeArray = (t('good_practices_employment_contract_and_general_orientation_array', {returnObjects: true}) as string[]);


  return (
   
    <Trans>
      <Divider/> 
      <ul>
      {employeeContractGoodPracticeArray.map((practice, index) => {
          return (<li key={index}>{practice}</li>)
        })}
      </ul>
      <Divider/>
    </Trans>


);
}

export default ContractOfEmploymentGP;