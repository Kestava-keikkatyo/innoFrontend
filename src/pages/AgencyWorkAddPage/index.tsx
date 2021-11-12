import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button, TextField, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useDispatch, useSelector } from "react-redux"
import { postWorkTask } from "../../actions/workAddAction"

const AgencyWorkAdd: React.FC<any> = () => {
  const currentProfile: any = useSelector(
    (state: any) => state.profile.currentProfile
  )

  const [title, setTitle] = useState("")
  const [jobCategory, setJobCategory] = useState("")
  const [details, setDetails] = useState("")
  const [requirements, setRequirements] = useState("")
  const [numberOfNeededWorkers, setNumberOfNeededWorkers] = useState(1)
  const [startingDate, setStartingDate] = useState(
    "2021-08-18T21:43:18.694+00:00"
  )
  const [endingDate, setEndingDate] = useState("2021-08-18T21:43:18.694+00:00")
  const [applyingEndsAt, setApplyingEndsAt] = useState(
    "2021-08-18T21:43:18.694+00:00"
  )

  const dispatch = useDispatch()
  const { t } = useTranslation()
  const classes = useStyles()

  // TODO: date pickers for start&end&appyingEnd
  const addWork = (e: any) => {
    let workTask = {
      _id: "604021e581a962681088565e",
      agencyId: currentProfile._id,
      jobTitle: title,
      jobCategory: jobCategory,
      details: details,
      requirements: requirements,
      numberOfNeededWorkers: numberOfNeededWorkers,
      startingDate: startingDate,
      endingDate: endingDate,
      applyingEndsAt: applyingEndsAt,
      streetAddress: currentProfile.streetAddress,
      zipCode: currentProfile.zipCode,
      city: currentProfile.city,
      createdAt: "create new date",
    }

    dispatch(postWorkTask(workTask))
  }

  return (
    <div className={classes.headline}>
      <Typography variant="h5">{t("add_job ")}</Typography>
      <div>
        <form onSubmit={addWork}>
          <Typography className={classes.description}>{t("title")}</Typography>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            id="standard-full-width"
            style={{ maxWidth: "40%" }}
            name="name"
          />
          <Typography className={classes.description}>
            {t("category")}
          </Typography>
          <TextField
            value={jobCategory}
            onChange={(e) => setJobCategory(e.target.value)}
            fullWidth
            id="standard-full-width"
            style={{ maxWidth: "40%" }}
            name="name"
          />
          <Typography className={classes.description}>
            {t("details")}
          </Typography>
          <TextField
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            fullWidth
            style={{ maxWidth: "40%" }}
            id="outlined-multiline-static"
            multiline
            variant="outlined"
            rows={4}
          />
          <Typography className={classes.description}>
            {t("requirements")}
          </Typography>
          <TextField
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            fullWidth
            style={{ maxWidth: "40%" }}
            id="outlined-multiline-static"
            multiline
            variant="outlined"
            rows={4}
          />
          <Typography className={classes.description}>
            {t("worker_count")}
          </Typography>
          <TextField
            id="outlined-number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={numberOfNeededWorkers}
            inputProps={{ min: 0 }}
            variant="standard"
          />
          <Typography className={classes.description}>
            {t("duration")}
          </Typography>
          <TextField
            className={classes.datesLeft}
            id="startDate"
            label="Start date"
            type="date"
            value={startingDate}
            onChange={(e) => setStartingDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            className={classes.datesMiddle}
            id="endDate"
            label="End date"
            type="date"
            value={endingDate}
            onChange={(e) => setEndingDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            className={classes.datesRight}
            id="endDate"
            label="Application ends"
            type="date"
            value={applyingEndsAt}
            onChange={(e) => setApplyingEndsAt(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div className={classes.location}>
            <TextField
              className={classes.streetAddress}
              label="Street address"
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              id="standard-full-width"
              style={{ maxWidth: "40%" }}
              name="name"
            />

            <TextField
              label="City"
              className={classes.city}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              id="standard-full-width"
              name="name"
            />
            <TextField
              label="Zip code"
              className={classes.zipCode}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              id="standard-full-width"
              name="name"
            />
          </div>
        </form>
        <div>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={addWork}
          >
            {t("submit")}
          </Button>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  // necessary for content to be below app bar
  location: {
    marginTop: "1%",
    display: "flex",
    flexDirection: "row",
  },
  streetAddress: {
    marginTop: "1%",
    width: "16%",
    marginRight: "1%",
  },
  city: {
    marginTop: "1%",
    marginRight: "1%",
    width: "16%",
  },
  zipCode: {
    marginTop: "1%",
    width: "6%",
  },
  headline: {
    marginTop: "1%",
    marginLeft: "2%",
  },
  description: {
    marginTop: "1.5%",
  },
  button: {
    marginTop: "1.5%",
    marginLeft: "35%",
  },
  datesLeft: {
    marginTop: "1%",
    marginRight: "2%",
  },
  datesMiddle: {
    marginTop: "1%",
  },
  datesRight: {
    marginTop: "1%",
    marginLeft: "2%",
  },
}))

export default AgencyWorkAdd
