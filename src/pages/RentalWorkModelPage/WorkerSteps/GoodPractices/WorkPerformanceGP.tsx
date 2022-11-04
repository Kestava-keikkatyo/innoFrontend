
import React from 'react';
import { useTranslation } from 'react-i18next';
import InterActiveListComponent from './InterActiveListComponent';



const WorkPerformanceGP: React.FC = () => {
  const { t } = useTranslation();
  const workPerformanceGoodPracticeArray = (t('good_practices_work_performance_and_supervision_array', {returnObjects: true}) as string[]);

  return (
    <InterActiveListComponent arrayName={workPerformanceGoodPracticeArray}/>
   
);
}

export default WorkPerformanceGP;