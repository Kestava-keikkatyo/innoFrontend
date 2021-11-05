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

  const [title, setTitle] = useState("My Cool Job Title")  
  const [jobCategory, setJobCategory] = useState("My Awesome Job Category")
  const [details, setDetails] = useState("None")
  const [requirements, setRequirements] = useState("None")  
  const [numberOfNeededWorkers, setNumberOfNeededWorkers] = useState(1)
  const [startingDate, setStartingDate] = useState("2021-08-18T21:43:18.694+00:00")
  const [endingDate, setEndingDate] = useState("2021-08-18T21:43:18.694+00:00")
  const [applyingEndsAt, setApplyingEndsAt] = useState("2021-08-18T21:43:18.694+00:00")
  
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
      createdAt: "create new date"
    }

    dispatch(postWorkTask(workTask))
  }

  return (
    <div className={classes.headline}>
      <Typography variant="h5">{t("add_work_task")}</Typography>
      <div>
        <form onSubmit={addWork}>
          <Typography className={classes.description}>
            {t("tell_position")}
          </Typography>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            id="standard-full-width"
            style={{ maxWidth: "40%" }}
            name="name"
          />
          <Typography className={classes.description}>
            {t("description")}
          </Typography>
          <TextField
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            fullWidth
            style={{ maxWidth: "40%" }}
            id="outlined-multiline-static"
            multiline
            variant="filled"
            rows={4}
          />
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
  headline: {
    paddingTop: "1%",
    paddingLeft: "2%",
  },
  description: {
    marginTop: "2%",
  },
  button: {
    marginTop: "2%",
    marginLeft: "35%",
  },
}))

export default AgencyWorkAdd
