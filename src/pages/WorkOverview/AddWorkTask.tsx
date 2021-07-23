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
  info: {
    textAlign: "center",
    marginBottom: "1%",
    marginTop: "1%",
    display: "block",
    textDecoration: "underline",
  },
  textField: {
    marginLeft: "25%",
    marginRight: "25%",
    display: "flex",
    justifyContent: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "2%",
    marginBottom: "1%",
  },
  textFieldSmall: {
    marginLeft: "35%",
    marginRight: "35%",
    width: "30%",
    display: "flex",
    justifyContent: "center",
  },
}));

const AddWorkTask = () => {
  const classes = useStyles();

  const [headline, setHeadline] = React.useState("");
  const [subheading, setSubheading] = React.useState("");
  const [detailedInfo, setDetailedInfo] = React.useState("");
  const [additionalDetails, setAdditionalDetails] = React.useState("");
  const [phonenumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [city, setCity] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");

  const history = useHistory();

  const handleSubmit = () => {
    alert("lisäsit työkeikan");
  };

  const workInfo = () => {
    history.push("/work-info");
  };

  return (
    <Container>
    <Grid container>
      <Grid item md={6}>
        <Paper>
      <form>
        <h1> Lisää työkeikka</h1>
        <div>
          <FileUploader name="Lisää Firman logo tästä" accept="" />
        </div>
        <Typography >
          Kerro haettava positio / ilmoituksen otsikko
        </Typography>
        
        <TextField
          type="text"
          variant="outlined"
          id="margin-none"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />
        {console.log(headline)}
        <Typography >Lisää väliotsikko</Typography>
        <TextField
          type="text"
          variant="outlined"
          id="margin-none"
          value={subheading}
          onChange={(e) => setSubheading(e.target.value)}
        />
        <Typography >Kerro tarkemmat tiedot</Typography>
        <TextField
          type="text"
          variant="outlined"
          id="margin-none"
          value={detailedInfo}
          onChange={(e) => setDetailedInfo(e.target.value)}
        />

        <Typography >Lisää lisätiedot</Typography>
        <TextField
          type="text"
          id="margin-none"
          variant="outlined"
          value={additionalDetails}
          onChange={(e) => setAdditionalDetails(e.target.value)}
        />
        <Typography >Valitse HP-yritys</Typography>
        <AgencyGrid/>
        <div>
          <Button
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
