import { Divider } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';


const GuidanceToWorkGP: React.FC = () => {
  const { t } = useTranslation();
  const guidanceToWorkGoodPracticeArray = (t('good_practices_guidance_on_work_and_working_conditions_array', {returnObjects: true}) as string[]);


  return (
   
    <Trans>
      <Divider/> 
      <ul>
      {guidanceToWorkGoodPracticeArray.map((practice, index) => {
          return (<li key={index}>{practice}</li>)
        })}
      </ul>
      <Divider/>
    </Trans>


);
}

export default GuidanceToWorkGP;