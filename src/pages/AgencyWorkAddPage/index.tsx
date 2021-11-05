import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button, TextField, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { WorkAddActions } from "../../types/state"
import { useDispatch } from "react-redux"
import { postWorkTask } from "../../actions/workAddAction"

const AgencyWorkAdd: React.FC<any> = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const classes = useStyles()

  const x = {
    _id: "604021e581a962681088565f",
    agencyId: "604021e581a9626810885235",
    jobTitle: "EXAMPLE TITTELI",
    jobCategory: "EXAMPLE CATEGORY",
    details: "Job vacancy details",
    requirements: "Job vacancy requirements",
    numberOfNeededWorkers: 20,
    startingDate: "2021-08-18T21:43:18.694+00:00",
    endingDate: "2021-08-18T21:43:18.694+00:00",
    applyingEndsAt: "2021-08-18T21:43:18.694+00:00",
    streetAddress: "Street address",
    zipCode: 100,
    city: "Helsinki",
    createdAt: "2021-08-18T21:43:18.694+00:00",
  }

  /*
    jobTitle: String,
    jobCategory: String,
    details: String,
    requirements: String,
    numberOfNeededWorkers: Number,
    startingDate: Date,
    endingDate: Date,
    applyingEndsAt: Date,
    zipCode: Number,
    city: String,
    createdAt: String
    */

  const addWork = (e: any) => {
    dispatch(postWorkTask(x))
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
