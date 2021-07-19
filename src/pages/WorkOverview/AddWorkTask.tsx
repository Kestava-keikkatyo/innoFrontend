import { Button, makeStyles, Theme, useTheme } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React from "react";
import Typography from "@material-ui/core/Typography";
import FileUploader from "../../components/FileUploader";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    textAlign: "center",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "50%",
  },
  terms: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("xs")]: {},
  },
  add: {
    marginTop: "1.25%",
    marginRight: "2%",
  },
  buttons: {
      display: 'flex',
      justifyContent: 'space-evenly',
  },
  preview: {
      marginRight: '6%'
  }
}));

const AddWorkTask = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <h1 className={classes.header}> Lisää työkeikka</h1>
      <div className={classes.root}>
        <TextField
          id="margin-none"
          defaultValue="Otsikko"
          className={classes.textField}
          helperText="Lisää työkeikan otsikko"
        />
        <TextField
          id="margin-none"
          defaultValue="Tiedot"
          className={classes.textField}
          helperText="Kerro työkeikan tiedot"
        />
        <TextField
          id="margin-none"
          defaultValue="Osallistujat"
          className={classes.textField}
          helperText="Kerro osallistujien määrä  "
        />
      </div>
      <div className={classes.terms}>
        <Typography className={classes.add}>Liitä käyttöehdot</Typography>
        <FileUploader accept="" name="Lisää tiedosto" />
      </div>
      <div className={classes.buttons}>
      <Button variant="contained" color="default" className={classes.preview}>Esikatsele</Button>
      <Button variant="contained" color="default">Lisää</Button>
      </div>
    </div>
  );
};

export default AddWorkTask;
