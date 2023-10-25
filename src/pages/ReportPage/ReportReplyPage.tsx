import { Box, Button, CardMedia, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { replyReport } from '../../actions/reportActions'
import { setAlert } from '../../actions/alertActions'
import { IRootState } from '../../utils/store'
/*
  With ReportReplyPage, business and agency users can reply to a workers report.
*/
const ReportReplyPage = () => {
  const report = useSelector((state: any) => state.report.currentReport)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const history = useHistory()
  const [reply, setReply] = useState('')
  const { data } = useSelector((state: IRootState) => state.user)
  const role = data.role

  const handleAnswer = () => {
    // Post report reply to database
    dispatch(replyReport(report._id, reply, role))
    setReply('')
    history.push('/reports')
    dispatch(setAlert(t('report_reply_sent_alert')))
  }
  return (
    <Container>
      {/** Report replypage title */}
      <Typography variant='h4' color='primary' sx={{ paddingTop: 10, paddingBottom: 3 }}>
        {t('report_reply_title')}
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
        {/** Back button takes back to reports list */}
        <Button
          variant='outlined'
          onClick={() => history.push('/reports')}
          sx={{
            color: 'primary',
            float: 'right',
          }}
        >
          {t('back')}
        </Button>
        {/** Title of the report */}
        <Typography
          variant='h6'
          sx={{
            color: '#eb5a00',
            textDecoration: 'underline',
            paddingBottom: 2,
          }}
        >
          {report.title}
        </Typography>

        {/** Details of the report */}
        <Typography variant='body1'>{report.details}</Typography>

        {/** Report writers information. */}
        <Box sx={{ paddingTop: '1em' }}>
          <Typography variant='body1' sx={{ color: '#eb5a00' }}>
            {t('report_worker_info')}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {report.user.name}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {report.user.email}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {report.user.phoneNumber}
          </Typography>
        </Box>

        {/** If there is an image or video attached to report, we show it here. */}
        {report.fileType === 'image' && (
          <CardMedia
            image={report.fileUrl ? report.fileUrl : ''}
            component='img'
            sx={{
              marginTop: '2em',
              borderRadius: 1,
            }}
          />
        )}
        {report.fileType === 'video' && (
          <Grid
            item
            sx={{
              position: 'relative',
              /*
            TODO: Should video aspect ratio be derived from 
            actual video and not forced to 16:9?
            */
              paddingTop: '56.25%' /* Percentage ratio for 16:9  720 / 1280 = 0.5625 */,
            }}
          >
            {/*   https://www.npmjs.com/package/react-player   */}
            <ReactPlayer url={report.fileUrl} width='100%' height='100%' controls />
          </Grid>
        )}

        {/** Reply answer title */}
        <Typography
          variant='h6'
          sx={{
            color: '#eb5a00',
            paddingBottom: 1,
            paddingTop: '1em',
          }}
        >
          {t('report_reply_answer')}
        </Typography>
        {/** Textfield for entering reply to report */}
        <TextField
          multiline
          minRows='4'
          variant='outlined'
          sx={{ width: '100%' }}
          value={reply}
          onChange={({ target }) => setReply(target.value)}
        />
        {/** Send button */}
        <Button
          variant='contained'
          onClick={handleAnswer}
          sx={{
            marginTop: '1em',
            background: '#EB5A00',
            color: 'white',
          }}
        >
          {t('report_reply_send')}
        </Button>
      </Box>
    </Container>
  )
}

export default ReportReplyPage
