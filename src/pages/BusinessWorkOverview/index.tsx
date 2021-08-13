import {
  Button,
  Container,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React from "react";
import AgencyGrid from "./AgencyGrid";
import { SearchIcon } from '@material-ui/data-grid'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBusinessContracts } from "../../actions/businessContractActions";
import { IRootState } from "../../utils/store";

const BusinessWorkRequest:React.FC<any> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [headline, setHeadline] = React.useState("");
  const [subheading, setSubheading] = React.useState("");
  const [detailedInfo, setDetailedInfo] = React.useState("");
  const [additionalDetails, setAdditionalDetails] = React.useState("");
  const { businessContract } = useSelector((state: IRootState) => state.businessContracts);

  useEffect(() => {
    dispatch(fetchBusinessContracts())
  },[dispatch])

  const handleSubmit = () => {
    alert("lisäsit työkeikan");
  };

  const showAgenciesWithContract = () => {
    const result = businessContract.filter((contract:any) => contract.madeContracts)
    console.log(result)
    if (result.length > 0) {
      return result
    } else {
      return [] 
    }
  }

  return (
    <Container className={classes.root}>
      <form>
        <Grid container>
            <h1> Lähetä työkeikka pyyntö HP-yritykselle</h1>
            <Grid item md={12} sm={12} className={classes.flexbox}>
            <Typography className={classes.choose}>Valitse HP-yritys</Typography>
            <InputBase
              placeholder="Etsi nimellä"
            />
            <IconButton type="submit">
              <SearchIcon 
              />
            </IconButton>
            </Grid>
            <AgencyGrid agencies={showAgenciesWithContract()}/>
          <Grid item md={12} sm={12}>
            <Typography>
              Kerro haettava positio / ilmoituksen otsikko
            </Typography>
            <TextField
              className={classes.information}
              type="text"
              variant="outlined"
              id="margin-none"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
            />
            <Typography>Lisää väliotsikko</Typography>
            <TextField
              className={classes.information}
              type="text"
              variant="outlined"
              id="margin-none"
              value={subheading}
              onChange={(e) => setSubheading(e.target.value)}
            />
            <Typography>Ehdota työntekijöitä</Typography>
            <TextField
              className={classes.information}
              type="text"
              variant="outlined"
              id="margin-none"
              value={subheading}
              onChange={(e) => setSubheading(e.target.value)}
            />
            <Typography>Kerro tarkemmat tiedot</Typography>
            <TextField
              className={classes.information}
              type="text"
              multiline
              rows={6}
              variant="outlined"
              id="margin-none"
              value={detailedInfo}
              onChange={(e) => setDetailedInfo(e.target.value)}
            />
          </Grid>
        </Grid>
        <Typography>Lisää lisätiedot</Typography>
        <Grid item md={12}>
          <TextField
            className={classes.information}
            type="text"
            multiline
            rows={6}
            id="margin-none"
            variant="outlined"
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
          />
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="default"
            onClick={() => handleSubmit()}
          >
            Lähetä
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyItems: "center",
  },
  gridi: {
    marginTop: "8%",
  },
  information: {
    width: "50%",
  },
  button: {
    marginTop: '9.3%',
    marginLeft: '1%'
  },
  flexbox: {
    display: 'flex',
    justifyContent: 'start'
  },
  choose: {
    marginTop: '1%',
    marginRight: '2%'
  },
 
}));

export default BusinessWorkRequest;
