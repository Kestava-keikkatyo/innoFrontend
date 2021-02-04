import React, { useState } from "react"

import {
  Container,
  Typography,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  InputLabel,
  Input,
  TextField,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
//import { useTranslation } from "react-i18next"
import Collapsible from "react-collapsible"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    padding: "30px",
    margin: "20px",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },

  formControl: {
    margin: theme.spacing(3),
  },

  clickableIcon: {
    color: "black",
    "&:hover": {
      color: "blue",
    },
    width: 60,
    height: 60,
  },
}))

/**
 * @todo useTranslation for languagesupport
 * @todo Styles and responsiveness,
 * @todo Figure out the relationship between worker and agency => does the agency need the form as it is or just templates and the worker needs the "working version".
 * @exports components/FormContainerExpandable
 */
export const FormContainerExpandable = () => {
  const classes = useStyles()
  return (
    <>
      <Container maxWidth="md" disableGutters>
        <Typography>
          <Collapsible className={classes.root} trigger="Lomake">
            <div>
              <AgencyForm></AgencyForm>
            </div>
          </Collapsible>
        </Typography>
      </Container>
    </>
  )
}

export const AgencyForm = () => {
  const classes = useStyles()
  const [state, setState] = useState({
    first: false,
    second: false,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const { first, second } = state

  return (
    <div>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        name="header"
      >
        <FormLabel>
          Lomake 1 - ASIAKASSOPIMUKSEEN LIITTYVÄT TYÖTURVALLISUUS- JA
          TYÖHYVINVOINTIASIAT (vuokrausyrityksen ja käyttäjäyrityksen edustajat
          täyttävät yhdessä)
        </FormLabel>
        <InputLabel htmlFor="vuokrausyritys-input">Vuokrausyritys</InputLabel>
        <Input id="vuokra-input" />
      </FormControl>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        name="header2"
      >
        <InputLabel htmlFor="kayttajayritys-input">Käyttäjäyritys</InputLabel>
        <Input id="kayttaja-input" />
      </FormControl>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        name="first"
      >
        <FormLabel component="legend">
          Lainsäädännöstä seuraavat työturvallisuusvastuut on käyty yhdessä läpi
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={first} onChange={handleChange} name="first" />
            }
          />
        </FormGroup>
      </FormControl>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        name="second"
      >
        <FormLabel component="legend">
          Työn erityispiirteet, työssä esiintyvät haitta- ja vaaratekijät sekä
          muut työturvallisuuden kannalta erityisesti huomioitavat seikat
        </FormLabel>
        <InputLabel htmlFor="erityispirteet"></InputLabel>
        <Input id="erityispiirteet" />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={second}
                onChange={handleChange}
                name="second"
              />
            }
            label="Vuokrayrityksen edustaja käy paikan päällä tutustumassa työolosuhteisiin ennen työntekijöiden valintaa"
          />
        </FormGroup>
      </FormControl>
      <div className={classes.Container}>
        <TextField
          id="date"
          label="Pvm."
          type="date"
          defaultValue="2021-02-04"
          className={classes.TextField}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          id="time"
          label="klo"
          type="time"
          defaultValue="07:30"
          className={classes.TextField}
          InputLabelProps={{ shrink: true }}
          inputProps={{ step: 300 }}
        />
      </div>
    </div>
  )
}

/**
 * @exports components/AgencyForms
 */
export const AgencyForms = (props) => {
  const classes = useStyles()

  const { forms, onAdd } = props

  return (
    <div>
      <Button className={classes.clickableIcon} onClick={onAdd}>
        Uusi lomake
      </Button>
      {forms.map((form) => (
        <FormContainerExpandable key={form.id}></FormContainerExpandable>
      ))}
    </div>
  )
}
