import { Divider } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';


const WorkPerformanceGP: React.FC = () => {
  const { t } = useTranslation();
  const workPerformanceGoodPracticeArray = (t('good_practices_work_performance_and_supervision_array', {returnObjects: true}) as string[]);


  return (
   
    <Trans>
      <Divider/> 
      <ul>
      {workPerformanceGoodPracticeArray.map((practice, index) => {
          return (<li key={index}>{practice}</li>)
        })}
      </ul>
      <Divider/>
    </Trans>


);
}

export default WorkPerformanceGP;