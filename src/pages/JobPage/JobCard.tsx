import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  Card,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core"
import JobModal from "./JobModal"
import { useTranslation } from "react-i18next"

const useStyles = makeStyles({
  root: {
    marginBottom: "3%",
  },
  media: {
    height: 140,
  },
})

const JobCard: React.FC = () => {
  const classes = useStyles()
  const [displayModal, setDisplayModal] = React.useState(false)
  const { t } = useTranslation()
  const handleOpen = () => {
    setDisplayModal(true)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Yhtiö Eero
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Etsinässämme on reipas oma-aloitteinen koodaaja, jonka tehtävä on
            kehittää nettisivujemme ulkonäköä. Työt suoritetaan etätyönä.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Jos kiinnostuit tehtävästä ota yhteyttä eero.mail@test.fi
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleOpen}>{t("information")}</Button>
        <JobModal
          displayModal={displayModal}
          closeModal={() => setDisplayModal(false)}
        />
      </CardActions>
    </Card>
  )
}

export default JobCard
