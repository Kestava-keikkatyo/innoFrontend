import React from 'react';
import { useTranslation } from 'react-i18next';
import InterActiveListComponent from './InterActiveListComponent';


const GuidanceToWorkGP: React.FC = () => {
  const { t } = useTranslation();
  const guidanceToWorkGoodPracticeArray = (t('good_practices_guidance_on_work_and_working_conditions_array', {returnObjects: true}) as string[]);

  return (
    <InterActiveListComponent arrayName={guidanceToWorkGoodPracticeArray}/> 
  );
  }

export default GuidanceToWorkGP;