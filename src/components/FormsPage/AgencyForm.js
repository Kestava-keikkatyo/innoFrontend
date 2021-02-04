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
 * @todo datePicker component should search currentDate for defaultvalue if possible
 * @todo print to pdf?
 * @todo inflation? Figure out a more compact and readable way to produce the forms
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

  const {
    first: lawHonored,
    second: representative,
    third: employmentStatement,
    fourth: riskAssessment,
    fifth: activities,
    sixth: rescuePlan,
  } = state

  return (
    <form>
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
              <Checkbox
                checked={lawHonored}
                onChange={handleChange}
                name="lawHonored"
              />
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
                checked={representative}
                onChange={handleChange}
                name="representative"
              />
            }
            label="Vuokrayrityksen edustaja käy paikan päällä tutustumassa työolosuhteisiin ennen työntekijöiden valintaa"
          />
        </FormGroup>
      </FormControl>
      <div className={classes.Container} noValidate>
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
      <FormControl
        component="fieldset"
        className={classes.formControl}
        name="header"
      >
        <FormLabel>
          Työtehtävissä tarvittavat henkilönsuojaimet (+työvaatetus) ja kuvaus
          siitä kumpi osapuoli vastaa tarvittavien suojainten toimittamisesta
          työntekijöille ja suojainten huollosta
        </FormLabel>
        <InputLabel htmlFor="henkilonsuojaimet"></InputLabel>
        <Input id="henkilonsuojaimet" />
      </FormControl>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        name="header"
      >
        <FormLabel>
          Kuvaus vuokratyöntekijöiden perehdytyksestä ja työnopastuksesta (ketkä
          perehdyttävät, kuinka kauan kestää, mitä asioita käydään läpi, mitä
          perehdytysmateriaalia vuokratyöntekijöille annetaan jne.)
        </FormLabel>
        <InputLabel htmlFor="perehdytys-opastus"></InputLabel>
        <Input id="perehdytys-opastus" />
      </FormControl>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        name="header"
      >
        <FormLabel>
          Miten toimitaan työtapaturman sattuessa vuokratyöntekijälle,
          sairauspoissaolotilanteissa ja muissa vaaratilanteissa (onnettomuus ja
          poikkeustilanteet, läheltä piti -tilanteet, väkivalta- ja
          uhkatilanteet)
        </FormLabel>
        <InputLabel htmlFor="tapaturma-vaara"></InputLabel>
        <Input id="tapaturma-vaara" />
      </FormControl>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        name="header"
      >
        <FormLabel>
          Miten vuokratyöntekijä ilmoittaa työtapaturmista,
          sairauspoissaoloista, muista vaaratilanteista tai muista
          turvallisuushavainnoista (ongelmat, puutteet, turvallisuusaloitteet)
        </FormLabel>
        <InputLabel htmlFor="tekija-ilmoittaa"></InputLabel>
        <Input id="tekija-ilmoittaa" />
      </FormControl>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        name="header"
      >
        Työntekijä ottaa työturvallisuusasioissa yhteyttä henkilöön/henkilöihin:
        <InputLabel htmlFor="yhteyshenkilonimi">Nimi</InputLabel>
        <Input id="yhteyshenkilonimi" />
      </FormControl>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        name="header"
      >
        <InputLabel htmlFor="yhteyshenkilopuh">Puh.</InputLabel>
        <Input id="yhteyshenkilopuh" />
      </FormControl>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        name="header"
      >
        <InputLabel htmlFor="yhteyshenkilomail">E-mail</InputLabel>
        <Input id="yhteyshenkilomail" />
      </FormControl>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        name="header"
      >
        <InputLabel htmlFor="yhteyshenkilohuone">
          Työhuoneen sijainti
        </InputLabel>
        <Input id="yhteyshenkilohuone" />
      </FormControl>
      <br></br>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        name="header"
      >
        <InputLabel htmlFor="yhteyshenkilonimi">Nimi</InputLabel>
        <Input id="yhteyshenkilonimi" />
      </FormControl>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        name="header"
      >
        <InputLabel htmlFor="yhteyshenkilopuh">Puh.</InputLabel>
        <Input id="yhteyshenkilopuh" />
      </FormControl>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        name="header"
      >
        <InputLabel htmlFor="yhteyshenkilomail">E-mail</InputLabel>
        <Input id="yhteyshenkilomail" />
      </FormControl>
      <FormControl
        component="fieldset"
        className={classes.formControl}
        name="header"
      >
        <InputLabel htmlFor="yhteyshenkilohuone">
          Työhuoneen sijainti
        </InputLabel>
        <Input id="yhteyshenkilohuone" />
      </FormControl>
      <FormGroup>
        Käyttäjäyritys toimittaa vuokrayritykselle kopion (tarvittaessa):
        <FormControlLabel
          control={
            <Checkbox
              checked={employmentStatement}
              onChange={handleChange}
              name="employmentStatement"
            />
          }
          label="Työterveyshuollon työpaikkaselvityksestä"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={riskAssessment}
              onChange={handleChange}
              name="riskAssessment"
            />
          }
          label="Viimeisimmän riskin arvioinnin tuloksista"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={activities}
              onChange={handleChange}
              name="activities"
            />
          }
          label="Työsuojelun toimintaohjelmasta"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={rescuePlan}
              onChange={handleChange}
              name="rescuePlan"
            />
          }
          label="Pelastussuunnitelmasta"
        />
      </FormGroup>
      <div className={classes.Container} noValidate>
        <TextField
          id="date"
          label="Pvm. mennessä"
          type="date"
          defaultValue="2021-02-04"
          className={classes.TextField}
          InputLabelProps={{ shrink: true }}
        />
      </div>
    </form>
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
