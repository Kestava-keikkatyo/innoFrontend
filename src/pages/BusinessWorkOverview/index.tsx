import { Button, Container, FormControl, Grid, IconButton, InputBase, InputLabel, Theme, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import AgencyGrid from "./components/AgencyGrid";
import { Search } from '@mui/icons-material'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IRootState } from "../../utils/store";
import { fetchWorkContracts, postJobInWorkContract } from "../../actions/workContractActions";
import PendingJobPosts from "./components/PendingJobPosts";
import { useTranslation } from 'react-i18next'

const BusinessWorkRequest: React.FC<any> = () => {
  const { t } = useTranslation()
  
  const [searchInput, setSearchInput] = useState("")

  /*
  const SearchField = ({ searchInput, setSearchInput, placeholder}) => {
    return (
      <></>
    )
  } */

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

  const handleChange = (event: any) => {
    event?.preventDefault()
    setSearchInput(event?.target.value)
  }

  return (
    <Container className="lg">
      <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h1" className="header2" style={{marginBlock: "0.83em"}}>
              {t("send_agency_contract")}
            </Typography>
            <Typography className={classes.choose}> 
              <label htmlFor="search">{t("choose_agency")}</label>
            </Typography>
            <InputBase
              id="search"
              placeholder={t("search_by_name")}
              onChange={(event) => handleChange(event)}
            />
            <IconButton type="submit" size="large">
              <Search
              />
            </IconButton>
            <AgencyGrid workContracts={workContracts} setSelectedAgency={setSelectedAgency} searchInput={searchInput}/>
            <Typography className={classes.field}>
              <label htmlFor="tell">{t("tell_position")}</label>
            </Typography>
            <TextField
              className={classes.information}
              error={formData.headline.length > 0 ? false : true}
              type="text"
              variant="outlined"
              id="tell"
              value={formData.headline}
              onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
            /> {/* label={t("tell_position")}
            InputLabelProps={{
            shrink: true
            }} */}
            <Typography className={classes.field}>
              <label htmlFor="outlined-number">{t("worker_count")}</label>
            </Typography>
            <TextField
              error={formData.workerCount.length > 0 ? false : true}
              id="outlined-number"
              type="number"
              inputProps={{ min: 0 }}
              value={formData.workerCount}
              onChange={(e) => setFormData({ ...formData, workerCount: e.target.value })}
              variant="standard"
            />
            <Typography className={classes.field}>
              <label htmlFor="details">{t('report_details')}</label>
            </Typography>
            <TextField
              className={classes.information}
              error={formData.detailedInfo.length > 0 ? false : true}
              type="text"
              multiline
              rows={6}
              variant="outlined"
              id="details"
              value={formData.detailedInfo}
              onChange={(e) => setFormData({ ...formData, detailedInfo: e.target.value })}
            />
            
            <TextField
              className={classes.datesLeft}
              error={formData.startDate.length > 0 ? false : true}
              id="startDate"
              label={t('start_date')}
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
              label={t('end_date')}
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
                variant="contained">
                {t('send')}
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
