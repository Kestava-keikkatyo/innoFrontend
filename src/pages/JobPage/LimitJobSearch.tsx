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

export default function MultilineTextFields() {
  const classes = useStyles()
  const [location, setLocation] = React.useState("Helsinki")
  const [field, setField] = React.useState("Palvelut")
  const [experience, setExperience] = React.useState("Harjoittelija")
  const { t } = useTranslation()

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
  }

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setField(event.target.value)
  }

  const handleExperinceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExperience(event.target.value)
  }

  const locations = [
    {
      value: "Helsinki",
      label: "Helsinki",
    },
    {
      value: "Espoo",
      label: "Espoo",
    },
    {
      value: "Vantaa",
      label: "Vantaa",
    },
  ]

  const fields = [
    {
      value: i18next.t("services"),
      label: i18next.t("services"),
    },
    {
      value: i18next.t("care"),
      label: i18next.t("care"),
    },
    {
      value: i18next.t("marketing_sales"),
      label: i18next.t("marketing_sales"),
    },
  ]

  const experiences = [
    {
      value: i18next.t("trainee"),
      label: i18next.t("trainee"),
    },
    {
      value: i18next.t("experienced"),
      label: i18next.t("experienced"),
    },
    {
      value: i18next.t("professional"),
      label: i18next.t("professional"),
    },
  ]

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="location"
          select
          label={t("locations")}
          value={location}
          onChange={handleLocationChange}
        >
          {locations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="field"
          select
          label={t("scope")}
          value={field}
          onChange={handleFieldChange}
        >
          {fields.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="experience"
          select
          label={t("experience")}
          value={experience}
          onChange={handleExperinceChange}
        >
          {experiences.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  )
}
