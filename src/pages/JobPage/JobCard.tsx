import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginBottom: '2%',
  },
  media: {
    height: 140,
  },
});

const JobCard: React.FC = () => {
  const classes = useStyles();

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
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default JobCard