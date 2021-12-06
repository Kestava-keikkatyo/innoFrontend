import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import MenuItem from "@material-ui/core/MenuItem"
import { useTranslation } from "react-i18next"
import i18next from "i18next"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
)

const JobsInsidence = () => {
  const incidences = [
    {
      value: i18next.t("newest"),
      label: i18next.t("newest"),
    },
    {
      value: i18next.t("oldest"),
      label: i18next.t("oldest"),
    },
    {
      value: i18next.t("closing"),
      label: i18next.t("closing"),
    },
  ]
  const classes = useStyles()
  const [incidence, setByIncidence] = React.useState("Uusimmat")
  const { t } = useTranslation()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setByIncidence(event.target.value)
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="select-by-incidence"
          select
          value={incidence}
          onChange={handleChange}
          helperText={t("select_by_incidence")}
        >
          {incidences.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  )
}

export default JobsInsidence
