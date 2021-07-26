import { Button, Container, Grid, makeStyles, Paper, Theme, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import React from "react";
import { useHistory } from "react-router-dom";
import FileUploader from "../../components/FileUploader";
import AgencyGrid from "./AgencyGrid";
import SituationPanel from "./SituationPanel";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
      textAlign: "center",
    },  
    textField: {
    width: '90%'
    },
    text: {
      marginTop: '3%'
    },
    buttons: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "1%",
      marginTop: '2%'
    },
    previewButton: {
      marginRight: '3%'
    },
    textFieldSmall: {
      marginLeft: "35%",
      marginRight: "35%",
      width: "30%",
      display: "flex",
      justifyContent: "center",
    },
    paper: {
      marginRight: '5%'
    },
    aText:{
      marginBottom: '2%',
      marginLeft: '2%'
    }
  }));

const AddWorkTask = () => {
  const classes = useStyles();

  const [headline, setHeadline] = React.useState("");
  const [subheading, setSubheading] = React.useState("");
  const [detailedInfo, setDetailedInfo] = React.useState("");
  const [additionalDetails, setAdditionalDetails] = React.useState("");

  const history = useHistory();

  const handleSubmit = () => {
    alert("lisäsit työkeikan");
  };

  const workInfo = () => {
    history.push("/work-info");
  };

  return (
    <Container >
    <Grid container>
      <Grid item md={6}>
        <Paper className={classes.paper}>
      <form>
        <h1
       
        > Lähetä työkeikka pyyntö HP-yritykselle</h1>
        <Typography 
        className={classes.aText}
        >Valitse HP-yritys</Typography>
        <AgencyGrid/>
        <Typography className={classes.text}>
          Kerro haettava positio / ilmoituksen otsikko
        </Typography>
        
        <TextField
          className={classes.textField}
          type="text"
          variant="outlined"
          id="margin-none"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />
        <Typography
        className={classes.text}
        >Lisää väliotsikko</Typography>
        <TextField
          className={classes.textField}
          type="text"
          variant="outlined"
          id="margin-none"
          value={subheading}
          onChange={(e) => setSubheading(e.target.value)}
        />
        <Typography
        className={classes.text}
        >Ehdota työntekijöitä</Typography>
        <TextField
          className={classes.textField}
          type="text"
          variant="outlined"
          id="margin-none"
          value={subheading}
          onChange={(e) => setSubheading(e.target.value)}
        />
        <Typography 
        className={classes.text}
        >Kerro tarkemmat tiedot</Typography>
        <TextField
          className={classes.textField}
          type="text"
          multiline
          rows={6}
          variant="outlined"
          id="margin-none"
          value={detailedInfo}
          onChange={(e) => setDetailedInfo(e.target.value)}
        />

        <Typography
        className={classes.text}
        >Lisää lisätiedot</Typography>
        <TextField
          className={classes.textField}
          type="text"
          multiline
          rows={6}
          id="margin-none"
          variant="outlined"
          value={additionalDetails}
          onChange={(e) => setAdditionalDetails(e.target.value)}
        />
        
        <div className={classes.buttons}>
          <Button
            className={classes.previewButton}
            variant="contained"
            color="default"
            onClick={() => workInfo()}
          >
            Esikatsele
          </Button>
          <Button     
            type="submit"
            variant="contained"
            color="default"
            onClick={() => handleSubmit()}
          >
            Lisää
          </Button>
        </div>
      </form>
      </Paper>
      </Grid>
      <Grid item md={6}>
        <Paper>
        <SituationPanel/>
      </Paper>
      </Grid>
    </Grid>
    </Container>
  );
};

export default AddWorkTask;
