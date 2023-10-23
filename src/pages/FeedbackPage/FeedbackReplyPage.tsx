import { Box, Button, Typography, TextField, Container } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { replyFeedback } from '../../actions/feedBackActions';
import { setAlert } from '../../actions/alertActions'
import { IRootState } from '../../utils/store'


type FeedbackUrlParams = {
   feedbackId: string;
};

const FeedbackReplyPage: React.FC = () => {
   const { feedbackId } = useParams<FeedbackUrlParams>();
   const dispatch = useDispatch();
   const history = useHistory();
   const { t } = useTranslation();
   const [reply, setReply] = useState('');
   const feedback = useSelector((state: any) => state.report.currentReport)
   const { data } = useSelector((state: IRootState) => state.user)
   const role = data.role

   const handleAnswer = () => {
      // Post report reply to database
      dispatch(replyFeedback(feedbackId, reply))
      setReply('')
      history.push('/feedback')
      dispatch(setAlert(t('feedback_reply_sent_alert')))
    }

   return (
      <Container>
         <Typography variant='h4' color='primary' sx={{ paddingTop: 10, paddingBottom: 3 }}>
            {t('Vastaus työntekijän palautteeseen')}
         </Typography>
         <Box
            sx={{
               padding: 2,
               width: '90%',
               border: 1,
               borderColor: 'grey.500',
               borderRadius: 1,
            }}
         >
            <Button
               variant='outlined'
               onClick={() => history.push('/receivedFeedbacks')}
               sx={{
                  color: 'primary',
                  float: 'right',
               }}
            >
               {t('back')}
            </Button>
            
            {/* Additional feedback-related content can be added here. E.g., feedback details. */}
            
            <Typography
               variant='h6'
               sx={{
                  color: '#eb5a00',
                  paddingBottom: 1,
                  paddingTop: '1em',
               }}
            >
               {t('Työntekijän tiedot')}
            </Typography>
            <TextField
               multiline
               minRows='4'
               variant='outlined'
               sx={{ width: '100%' }}
               value={reply}
               onChange={({ target }) => setReply(target.value)}
            />
            <Button
               variant='contained'
               onClick={handleAnswer}
               sx={{
                  marginTop: '1em',
                  background: '#EB5A00',
                  color: 'white',
               }}
            >
               {t('Lähetä vastaus')}
            </Button>
         </Box>
      </Container>
   );
};

export default FeedbackReplyPage;
