import React from "react";

import {
  Container,
  Avatar,
  createStyles,
  makeStyles,
  Theme,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";

/**
 * @component
 * @desc The main profile page component.
 * Container for WorkerProfile, CompanyProfile and PasswordChange components.
 */
/*
 <FileUploader handleFile={() => ''}>
 <span>Upload file</span>
</FileUploader>
*/

const UpdateProfileInformation = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        justifyContent: "center",
        "& > *": {
          margin: theme.spacing(1),
          width: "100%",
        },
      },
      small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
    })
  );

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className={classes.large}
        />
      </div>
      <Button
        style={{ display: "block", margin: "0 auto" }}
        variant="outlined"
        color="primary"
        onClick={() => alert("yritit vaihtaa profiilikuvasi")}
      >
        Vaihda profiilikuvasi
      </Button>

      <Typography
      style={{textAlign: 'center', marginTop: '2%'}}
      >Kuvaus itsestä</Typography>

      <TextField 
      //tämä ei liikkunut kuin marginLeft, on varmaan parempikin tapa?
      style={{ marginLeft: '31%'}}
      multiline rows={4} variant="outlined" />
    </Container>
  );
};

export default UpdateProfileInformation;
