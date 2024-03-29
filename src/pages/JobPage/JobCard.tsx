import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import JobModal from './JobModal';
import { Button } from 'react-bootstrap';


const useStyles = makeStyles({
  root: {
    marginBottom: '3%',
  },
  media: {
    height: 140,
  },
});



const JobCard: React.FC = () => {
  const classes = useStyles();
  const [displayModal, setDisplayModal] = React.useState(false);
  
  const handleOpen = () => {
    setDisplayModal(true);
  };


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
            Etsinässämme on reipas oma-aloitteinen koodaaja, jonka tehtävä on kehittää nettisivujemme ulkonäköä. Työt suoritetaan etätyönä.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Jos kiinnostuit tehtävästä ota yhteyttä eero.mail@test.fi
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
        onClick={handleOpen}
        >
          Tiedot
        </Button>
          <JobModal
          displayModal={displayModal}
          closeModal={() => setDisplayModal(false)}
          />
      </CardActions>
    </Card>
  );
}

export default JobCard