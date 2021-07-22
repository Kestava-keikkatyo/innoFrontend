import { Button, makeStyles, Theme, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import React from "react";
import { useHistory } from "react-router-dom";
import FileUploader from "../../components/FileUploader";

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
    <div>
      <form>
        <h1 className={classes.header}> Lisää työkeikka</h1>
        <div className={classes.header}>
          <FileUploader name="Lisää Firman logo tästä" accept="" />
        </div>
        <Typography className={classes.info}>
          Kerro haettava positio / ilmoituksen otsikko
        </Typography>

        <TextField
          type="text"
          variant="outlined"
          id="margin-none"
          className={classes.textField}
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />
        {console.log(headline)}
        <Typography className={classes.info}>Lisää väliotsikko</Typography>
        <TextField
          type="text"
          variant="outlined"
          id="margin-none"
          className={classes.textField}
          value={subheading}
          onChange={(e) => setSubheading(e.target.value)}
        />
        <Typography className={classes.info}>Kerro tarkemmat tiedot</Typography>
        <TextField
          type="text"
          variant="outlined"
          id="margin-none"
          className={classes.textField}
          value={detailedInfo}
          onChange={(e) => setDetailedInfo(e.target.value)}
        />

        <Typography className={classes.info}>Lisää lisätiedot</Typography>
        <TextField
          type="text"
          id="margin-none"
          variant="outlined"
          className={classes.textField}
          value={additionalDetails}
          onChange={(e) => setAdditionalDetails(e.target.value)}
        />
        <Typography className={classes.info}>Puhelinnumero</Typography>
        <TextField
          type="text"
          id="margin-none"
          variant="outlined"
          className={classes.textFieldSmall}
          value={phonenumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <Typography className={classes.info}>Sähköposti</Typography>
        <TextField
          type="text"
          id="margin-none"
          variant="outlined"
          className={classes.textFieldSmall}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Typography className={classes.info}>Postitoimipaikka</Typography>
        <TextField
          type="text"
          id="margin-none"
          variant="outlined"
          className={classes.textFieldSmall}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Typography className={classes.info}>Postinumero</Typography>
        <TextField
          type="text"
          id="margin-none"
          variant="outlined"
          className={classes.textFieldSmall}
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />

        <div className={classes.buttons}>
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
    </div>
  );
};

export default AddWorkTask;
