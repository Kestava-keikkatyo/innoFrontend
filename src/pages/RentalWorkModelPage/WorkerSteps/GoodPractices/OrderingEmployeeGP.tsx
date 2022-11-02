import { Divider } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';


const OrderingEmployeeGP: React.FC = () => {
  const { t } = useTranslation();
  const orderingEmployeeGoodPracticeArray = (t('good_practices_order_and_selection_of_the_employee_array', {returnObjects: true}) as string[]);


  return (
   
    <Trans>
      <Divider/> 
      <ul>
      {orderingEmployeeGoodPracticeArray.map((practice, index) => {
          return (<li key={index}>{practice}</li>)
        })}
      </ul>
      <Divider/>
    </Trans>


);
}

export default OrderingEmployeeGP;