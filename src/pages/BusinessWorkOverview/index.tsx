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
import { useTranslation } from 'react-i18next'

const BusinessWorkRequest: React.FC<any> = () => {
  const { t } = useTranslation()

  const classes = useStyles();
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    headline: "",
    workerCount: "",
    detailedInfo: "",
    startDate: "",
    endDate: "",
  })
  const [slectedAgency, setSelectedAgency] = React.useState({
    agencyId: "",
    contractId: ""
  });
  const { workContracts } = useSelector((state: IRootState) => state.workContracts);

  useEffect(() => {
    dispatch(fetchWorkContracts())
  }, [dispatch])

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(slectedAgency, formData)
    dispatch(postJobInWorkContract(slectedAgency.agencyId,slectedAgency.contractId, formData))
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
      (slectedAgency.agencyId.length > 0 &&
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
        <Grid item xs={12} md={6} className={classes.flexbox}>
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
            <Typography>
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
            <Typography>
              Tarvittavia työntekijöitä
            </Typography>
            <TextField
              className={classes.information}
              error={formData.workerCount.length > 0 ? false : true}
              id="filled-number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{ min: 0 }}
              value={formData.workerCount}
              onChange={(e) => setFormData({ ...formData, workerCount: e.target.value })}
            />
            <Typography>Kerro tarkemmat tiedot</Typography>
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
              className={classes.information}
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
              className={classes.information}
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
                className={classes.button}
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
  button: {

  },
  flexbox: {

  },
  choose: {

  },
}));

export default BusinessWorkRequest;
