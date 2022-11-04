import React from 'react';
import { useTranslation } from 'react-i18next';
import InterActiveListComponent from './InterActiveListComponent';


const FeedbackAndEvaluationGP: React.FC = () => {
  const { t } = useTranslation();
  const feedbackAndEvaluationGoodPracticeArray = (t('good_practices_feedback_and_erformance_evaluation_array', {returnObjects: true}) as string[]);

  return (
    <InterActiveListComponent arrayName={feedbackAndEvaluationGoodPracticeArray}/> 
  );
  }

export default FeedbackAndEvaluationGP;