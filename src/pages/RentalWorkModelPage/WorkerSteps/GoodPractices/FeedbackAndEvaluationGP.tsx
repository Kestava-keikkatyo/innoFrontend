import { Stack, ListItem, Divider, ListItemIcon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';


const FeedbackAndEvaluationGP: React.FC = () => {
  const { t } = useTranslation();
  const feedbackAndEvaluationGoodPracticeArray = (t('good_practices_feedback_and_erformance_evaluation_array', {returnObjects: true}) as string[]);


  return (
   
    <Trans>
        <Stack
        divider={<Divider orientation="horizontal" variant="inset" />}
        >  
          {feedbackAndEvaluationGoodPracticeArray.map((practice, index) => {
          return (
            <ListItem key={index}>
              <ListItemIcon>
                <FiberManualRecordIcon fontSize='small' />
              </ListItemIcon>
              {practice}
            </ListItem>) 
          })}
        </Stack>  
     
    </Trans>


);
}

export default FeedbackAndEvaluationGP;