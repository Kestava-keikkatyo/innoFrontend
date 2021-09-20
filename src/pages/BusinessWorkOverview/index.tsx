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
import AgencyGrid from "./components/AgencyGrid";
import { SearchIcon } from '@material-ui/data-grid'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IRootState } from "../../utils/store";
import { fetchWorkContracts, postJobInWorkContract } from "../../actions/workContractActions";
import PendingJobPosts from "./components/PendingJobPosts";

const BusinessWorkRequest: React.FC<any> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    headline: "",
    workerCount: "",
    detailedInfo: "",
    startDate: "",
    endDate: "",
  })
  const [selectedAgency, setSelectedAgency] = React.useState({
    agencyId: "",
    contractId: ""
  });
  const { workContracts } = useSelector((state: IRootState) => state.workContracts);

  useEffect(() => {
    dispatch(fetchWorkContracts())
  }, [dispatch])

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(selectedAgency, formData)
    dispatch(postJobInWorkContract(selectedAgency.agencyId,selectedAgency.contractId, formData))
    setFormData({
      headline: "",
      workerCount: "",
      detailedInfo: "",
      startDate: "",
      endDate: "",
    })
  };
  const validateForm = () => {
    if
      (selectedAgency.agencyId.length > 0 &&
      formData.detailedInfo.length > 0 &&
      formData.endDate.length > 0 &&
      formData.headline.length > 0 &&
      formData.startDate.length > 0 &&
      formData.workerCount.length > 0) {
      return false
    }
    else {
      return true
    }
  }

  return (
    <Container className="lg">
      <Grid container direction="row" justify="center" alignItems="stretch" spacing={3}>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit} >
            <h2> Lähetä työkeikka pyyntö HP-yritykselle</h2>
            <Typography className={classes.choose}>Valitse HP-yritys</Typography>
            <InputBase
              placeholder="Etsi nimellä"
            />
            <IconButton type="submit">
              <SearchIcon
              />
            </IconButton>
            <AgencyGrid workContracts={workContracts} setSelectedAgency={setSelectedAgency} />
            <Typography className={classes.field}>
              Kerro haettava positio / ilmoituksen otsikko
            </Typography>
            <TextField
              className={classes.information}
              error={formData.headline.length > 0 ? false : true}
              type="text"
              variant="outlined"
              id="margin-none"
              value={formData.headline}
              onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
            />
            <Typography
              className={classes.field}
            >
              Työntekijöiden lukumäärä
            </Typography>
            <TextField
              error={formData.workerCount.length > 0 ? false : true}
              id="outlined-number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{ min: 0 }}
              value={formData.workerCount}
              onChange={(e) => setFormData({ ...formData, workerCount: e.target.value })}
              variant="standard"
            />
            <Typography className={classes.field}>
              Lisätietoja
            </Typography>
            <TextField
              className={classes.information}
              error={formData.detailedInfo.length > 0 ? false : true}
              type="text"
              multiline
              rows={6}
              variant="outlined"
              id="margin-none"
              value={formData.detailedInfo}
              onChange={(e) => setFormData({ ...formData, detailedInfo: e.target.value })}
            />
            
            <TextField
              className={classes.datesLeft}
              error={formData.startDate.length > 0 ? false : true}
              id="startDate"
              label="Start date"
              type="date"
              value={formData.startDate}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            />
            <TextField
              className={classes.datesRight}
              error={formData.endDate.length > 0 ? false : true}
              id="endDate"
              label="End date"
              type="date"
              value={formData.endDate}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            />
            <div>
              <Button
                disabled={validateForm()}
                className={classes.buttonRight}
                type="submit"
                variant="contained"
                color="default"
              >
                Lähetä
              </Button>
            </div>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <PendingJobPosts workContracts={workContracts}/>
        </Grid>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  information: {
    width: "100%"
  },
  datesLeft: {
    marginTop: "5%",
    width: "46%",
    marginRight: "4%"
  },
  datesRight: {
    marginTop: "5%",
    width: "46%",
    marginLeft: "4%"

  },
  buttonRight: {
    marginTop: "5%",
    float: "right"
  },
  field: {
    marginTop: "5%"
  },
  choose: {

  },
}));

export default BusinessWorkRequest;
