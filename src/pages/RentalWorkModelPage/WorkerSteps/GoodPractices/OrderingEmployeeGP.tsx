import React from 'react';
import { useTranslation } from 'react-i18next';
import InterActiveListComponent from './InterActiveListComponent';


const OrderingEmployeeGP: React.FC = () => {
  const { t } = useTranslation();
  const orderingEmployeeGoodPracticeArray = (t('good_practices_order_and_selection_of_the_employee_array', {returnObjects: true}) as string[]);

  return (
    <InterActiveListComponent arrayName={orderingEmployeeGoodPracticeArray}/> 
  );
  }

export default OrderingEmployeeGP;