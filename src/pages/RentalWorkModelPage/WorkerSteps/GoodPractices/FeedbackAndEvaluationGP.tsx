import { Divider } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';


const FeedbackAndEvaluationGP: React.FC = () => {
  const { t } = useTranslation();
  const feedbackAndEvaluationGoodPracticeArray = (t('good_practices_feedback_and_erformance_evaluation_array', {returnObjects: true}) as string[]);


  return (
   
    <Trans>
      <Divider/> 
      <ul>
      {feedbackAndEvaluationGoodPracticeArray.map((practice, index) => {
          return (<li key={index}>{practice}</li>)
        })}
      </ul>
      <Divider/>
    </Trans>


);
}

export default FeedbackAndEvaluationGP;