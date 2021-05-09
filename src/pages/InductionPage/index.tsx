import {
  Avatar,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'
import Spacing from '../../components/Spacing'
import banner from '../../assets/form-banner.jpg'

export interface InductionPageProps {}

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: theme.palette.getContrastText('#eb5a00'),
    backgroundColor: '#eb5a00',
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}))

const InductionPage: React.FC<InductionPageProps> = () => {
  const classes = useStyles()

  return (
    <Container className="relative">
      <img src={banner} alt="Banner" className="profile-banner" />
      <Grid container direction="row" justify="center" alignItems="flex-end">
        <Grid item xs={12} md={2} style={{ marginTop: -100 }}>
          <Avatar
            style={{ margin: 'auto' }}
            className={classes.avatar}
            aria-label="recipe"
          >
            JB
          </Avatar>
        </Grid>
        <Grid item xs={12} md={10}>
          <Typography variant="h3">Jarmo Business</Typography>
        </Grid>
      </Grid>
      <Spacing m5 />
      <Typography variant="h4">Contact information</Typography>
      <Typography variant="body1">
        &bull; My working hours are 8am till 4pm. &bull; I prefer emailing
        &bull; Phonenumber 045 555 5555 &bull; Email jarmo@business.com &bull;
        Linkedin https//:linkedin.com/ &bull; I am using Whatsapp, Slack,
        Telegram
      </Typography>
      <Spacing m5 />
      <Typography variant="h4">Video</Typography>
      <iframe
        width="100%"
        height="600"
        src="https://www.youtube.com/embed/BxV14h0kFs0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Spacing m5 />
      <Typography variant="h4">Instructions</Typography>
      <ol>
        <li>
          First decide what type of filling you would like and check to see if
          there is some available.
        </li>

        <li>
          Next take two slices of bread and butter each of them on one side
          only.
        </li>

        <li>
          Put your filling on one slice of bread, butter side up. You may choose
          two fillings.
        </li>

        <li>
          Place the other piece of bread, butter side down, on top of the
          filling.
        </li>

        <li>Now cut your sandwich carefully with a knife.</li>

        <li>Now sit down and enjoy your sandwich.</li>

        <li>Finally, clear away the things you have been using.</li>
      </ol>
      <Spacing m5 />
    </Container>
  )
}

export default InductionPage
